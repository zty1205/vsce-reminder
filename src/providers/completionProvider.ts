/**
 * 自动补全提供者
 * 实现 VSCode 的 CompletionItemProvider 接口，提供 CSS 变量的自动补全功能
 */

import * as vscode from 'vscode';
import { MappingConfig, MappingConfigItem } from '../types';
import { normalizePropertyName, findConfigItemByLanguage } from '../utils/utils';
import { logger } from '../utils/logger';
import { ConfigManager } from '../utils/configManager';
import { regexCache } from '../utils/regexCache';

/**
 * 自动补全提供者类
 * 当用户输入配置中支持的 属性时，自动提示可用的 变量选项
 */
export class ReminderProvider implements vscode.CompletionItemProvider {
  /** 配置管理器 */
  private configManager: ConfigManager;

  /**
   * 构造函数
   */
  constructor(configManager: ConfigManager) {
    this.configManager = configManager;
    // 监听配置变化
    this.configManager.onConfigChange(() => {
      logger.debug('自动补全提供者：配置已更新');
    });
  }

  /**
   * 提供自动补全项
   */
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const config = this.getConfig();

    if (config.length === 0) {
      return [];
    }

    // 根据当前文档语言查找匹配的配置项
    const configItem = findConfigItemByLanguage(config, document.languageId);
    if (!configItem) {
      return [];
    }

    // 获取当前行的文本内容
    const lineText = document.lineAt(position.line).text;
    // 获取光标前的文本（用于匹配 属性）
    const textBeforeCursor = lineText.substring(0, position.character);

    // 使用缓存的正则表达式
    const regex = regexCache.getRegex(configItem, 'completion');
    const propertyMatch = textBeforeCursor.match(regex);
    
    if (!propertyMatch || propertyMatch.length < 2) {
      return [];
    }

    // 提取属性名并规范化（防止空指针）
    const propertyName = normalizePropertyName(propertyMatch[1] || '');
    if (!propertyName) {
      return [];
    }

    // 从配置中获取该属性对应的值到变量的映射（防止空指针）
    if (!configItem.mapping || typeof configItem.mapping !== 'object') {
      logger.warn('配置中的 mapping 无效');
      return [];
    }
    const propertyMapping = configItem.mapping[propertyName];
    if (!propertyMapping) {
      logger.warn(`配置中未找到属性 "${propertyName}"`, { availableProperties: Object.keys(configItem.mapping) });
      return [];
    }

    const completionItems: vscode.CompletionItem[] = [];
    // 获取前缀和后缀配置（缓存以避免重复拼接）
    const prefix = configItem.prefix ?? '';
    const suffix = configItem.suffix ?? '';

    // 遍历配置中的所有值，为每个值创建补全项
    Object.entries(propertyMapping).forEach(([value, variableMappingItems]) => {
      // 防止空指针：如果 variableMappingItems 为 null/undefined 或不是数组，跳过
      if (!Array.isArray(variableMappingItems) || variableMappingItems.length === 0) {
        logger.warn(`属性 "${propertyName}" 的值 "${value}" 对应的变量配置为空或无效`);
        return;
      }
      
      // 过滤有效的变量映射项
      const validItems = variableMappingItems.filter(item => 
        item != null && 
        typeof item === 'object' && 
        item.mapping != null && 
        typeof item.mapping === 'string'
      );
      
      // 如果过滤后没有有效变量，跳过
      if (validItems.length === 0) {
        return;
      }
      
      const variablesCount = validItems.length;
      const isMultiple = variablesCount > 1;
      
      // 为每个变量创建补全项
      validItems.forEach((item, index) => {
        const variable = item.mapping;
        const description = item.description || '';
        
        const itemLabel = isMultiple 
          ? `${value} → ${variable} (${index + 1}/${variablesCount})`
          : `${value} → ${variable}`;
        
        const completionItem = new vscode.CompletionItem(
          itemLabel,
          vscode.CompletionItemKind.Value
        );
        // 插入的文本是 CSS 变量（加上前缀和后缀）
        completionItem.insertText = prefix + variable + suffix;
        completionItem.detail = `转换为: ${variable}`;
        
        // 构建文档说明
        let documentation = `原始值: ${value}`;
        if (description) {
          documentation += `\n${description}`;
        }
        if (isMultiple) {
          documentation += `\n可选变量 ${index + 1}/${variablesCount}`;
        }
        if (configItem.description) {
          documentation += `\n${configItem.description}`;
        }
        completionItem.documentation = documentation;
        
        // 预设所有补全项
        completionItem.preselect = true;
        
        completionItems.push(completionItem);
      });
    });

    return completionItems;
  }

  /**
   * 获取配置（用于命令处理）
   */
  public getConfig(): MappingConfig {
    return this.configManager.getConfig();
  }
}
