/**
 * 代码操作提供者
 * 实现 VSCode 的 CodeActionProvider 接口，提供快速修复功能
 */

import * as vscode from 'vscode';
import { MappingConfig } from '../types';
import { normalizePropertyName, findConfigItemByLanguage } from '../utils/utils';
import { logger } from '../utils/logger';
import { ConfigManager } from '../utils/configManager';
import { regexCache } from '../utils/regexCache';

/**
 * 代码操作提供者类
 * 当用户输入了配置中存在的值时，可以通过快速修复一键转换为对应的 CSS 变量
 */
export class ConvertToVariableCodeActionProvider implements vscode.CodeActionProvider {
  /** 配置管理器 */
  private configManager: ConfigManager;

  /**
   * 构造函数
   */
  constructor(configManager: ConfigManager) {
    this.configManager = configManager;
    // 监听配置变化
    this.configManager.onConfigChange(() => {
      logger.debug('代码操作提供者：配置已更新');
    });
  }

  /**
   * 获取当前配置
   */
  private getConfig(): MappingConfig {
    return this.configManager.getConfig();
  }

  /**
   * 提供代码操作（快速修复）
   */
  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range,
    context: vscode.CodeActionContext,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.CodeAction[]> {
    const config = this.getConfig();

    if (config.length === 0) {
      return [];
    }

    // 根据当前文档语言查找匹配的配置项
    const configItem = findConfigItemByLanguage(config, document.languageId);
    if (!configItem) {
      return [];
    }

    const codeActions: vscode.CodeAction[] = [];
    const lineText = document.lineAt(range.start.line).text;
    
    // 使用缓存的正则表达式
    const regex = regexCache.getRegex(configItem, 'codeAction');
    const propertyMatch = lineText.match(regex);
    
    if (!propertyMatch || propertyMatch.length < 3) {
      return [];
    }

    // 提取属性名并规范化（防止空指针）
    const propertyName = normalizePropertyName(propertyMatch[1] || '');
    if (!propertyName) {
      return [];
    }
    const value = (propertyMatch[2] || '').trim();
    if (!value) {
      return [];
    }
    
    // 防止空指针：检查 mapping 是否存在
    if (!configItem.mapping || typeof configItem.mapping !== 'object') {
      return [];
    }
    const propertyMapping = configItem.mapping[propertyName];

    if (!propertyMapping || !propertyMapping[value]) {
      return [];
    }

    // 获取对应的 CSS 变量映射项（支持单个或多个）
    const variableMappingItems = propertyMapping[value];
    // 防止空指针：如果 variableMappingItems 为 null/undefined 或不是数组，返回空数组
    if (!Array.isArray(variableMappingItems) || variableMappingItems.length === 0) {
      return [];
    }
    
    // 过滤有效的变量映射项
    const validItems = variableMappingItems.filter(item => 
      item != null && 
      typeof item === 'object' && 
      item.mapping != null && 
      typeof item.mapping === 'string'
    );
    
    // 如果过滤后没有有效变量，返回空数组
    if (validItems.length === 0) {
      return [];
    }
    
    // 获取前缀和后缀配置（缓存以避免重复拼接）
    const prefix = configItem.prefix ?? '';
    const suffix = configItem.suffix ?? '';
    
    // 性能优化：预先计算值的位置，避免重复查找（防止空指针）
    const valueIndex = lineText.indexOf(value);
    if (valueIndex === -1) {
      return [];
    }
    
    const valueRange = new vscode.Range(
      range.start.line,
      valueIndex,
      range.start.line,
      valueIndex + value.length
    );
    
    const variablesCount = validItems.length;
    const isMultiple = variablesCount > 1;

    // 如果有多个变量，为每个变量创建一个快速修复操作
    validItems.forEach((item, index) => {
      const variable = item.mapping;
      const description = item.description || '';
      
      // 性能优化：使用字符串拼接而非模板字符串
      const replaceText = prefix + variable + suffix;
      
      // 构建操作标题
      let actionTitle = `转换为 ${variable}`;
      if (isMultiple) {
        actionTitle += ` (${index + 1}/${variablesCount})`;
      }
      if (description) {
        actionTitle += ` - ${description}`;
      }
      
      // 创建快速修复操作
      const action = new vscode.CodeAction(
        actionTitle,
        vscode.CodeActionKind.QuickFix
      );
      
      action.edit = new vscode.WorkspaceEdit();
      action.edit.replace(document.uri, valueRange, replaceText);
      // 只有第一个操作设为首选
      if (index === 0) {
        action.isPreferred = true;
      }

      codeActions.push(action);
    });
    return codeActions;
  }
}
