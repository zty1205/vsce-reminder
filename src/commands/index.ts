/**
 * 命令处理
 */

import * as vscode from 'vscode';
import { MappingConfig } from '../types';
import { normalizePropertyName, findConfigItemByLanguage } from '../utils/utils';
import { ReminderProvider } from '../providers/completionProvider';
import { getConfigManager } from '../utils/configManager';
import { regexCache } from '../utils/regexCache';

/**
 * 注册手动转换命令
 * 用户可以通过命令面板手动执行转换
 */
export function registerConvertCommand(context: vscode.ExtensionContext): vscode.Disposable {
  return vscode.commands.registerCommand(
    'reminder.convertToVariable',
    () => {
      // 获取当前活动的编辑器
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      // 获取用户选中的文本
      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);
      
      // 如果没有选中文本，提示用户
      if (!selectedText) {
        vscode.window.showWarningMessage('请先选择要转换的值');
        return;
      }

      // 获取选中文本所在行的内容
      const lineText = editor.document.lineAt(selection.start.line).text;
      
      // 获取配置管理器并创建提供者实例
      const configManager = getConfigManager();
      const provider = new ReminderProvider(configManager);
      const config = provider.getConfig();
      
      if (config.length === 0) {
        vscode.window.showErrorMessage('配置未加载');
        return;
      }

      // 根据当前文档语言查找匹配的配置项
      const configItem = findConfigItemByLanguage(config, editor.document.languageId);
      if (!configItem) {
        vscode.window.showWarningMessage('当前文件类型不支持转换');
        return;
      }

      // 使用缓存的正则表达式（使用 codeAction 模式，因为需要匹配值）
      const regex = regexCache.getRegex(configItem, 'codeAction');
      // 检查该行是否包含支持的属性
      const propertyMatch = lineText.match(regex);
      
      if (!propertyMatch || propertyMatch.length < 2) {
        // 防止空指针：检查 mapping 是否存在
        if (configItem.mapping && typeof configItem.mapping === 'object') {
          const propertyList = Object.keys(configItem.mapping).join('、');
          vscode.window.showWarningMessage(`请在选择以下属性的值：${propertyList}`);
        } else {
          vscode.window.showWarningMessage('配置中的映射无效');
        }
        return;
      }

      // 规范化属性名（防止空指针）
      const propertyName = normalizePropertyName(propertyMatch[1] || '');
      if (!propertyName) {
        vscode.window.showErrorMessage('无法识别属性名');
        return;
      }
      
      // 防止空指针：检查 mapping 是否存在
      if (!configItem.mapping || typeof configItem.mapping !== 'object') {
        vscode.window.showErrorMessage('配置中的映射无效');
        return;
      }
      
      if (!configItem.mapping[propertyName]) {
        vscode.window.showErrorMessage('未找到对应的映射配置');
        return;
      }

      // 查找选中文本对应的 CSS 变量映射项（支持单个或多个）
      const trimmedSelectedText = selectedText.trim();
      if (!trimmedSelectedText) {
        vscode.window.showWarningMessage('选中的文本为空');
        return;
      }
      
      const variableMappingItems = configItem.mapping[propertyName][trimmedSelectedText];
      if (!Array.isArray(variableMappingItems) || variableMappingItems.length === 0) {
        vscode.window.showWarningMessage(`未找到 "${selectedText}" 对应的变量`);
        return;
      }

      // 过滤有效的变量映射项
      const validItems = variableMappingItems.filter(item => 
        item != null && 
        typeof item === 'object' && 
        item.mapping != null && 
        typeof item.mapping === 'string'
      );
      
      if (validItems.length === 0) {
        vscode.window.showErrorMessage('变量配置无效');
        return;
      }

      // 获取前缀和后缀配置（缓存以避免重复拼接）
      const prefix = configItem.prefix ?? '';
      const suffix = configItem.suffix ?? '';
      
      if (validItems.length === 1) {
        // 只有一个变量，直接替换（性能优化：使用字符串拼接）
        const replaceText = prefix + validItems[0].mapping + suffix;
        editor.edit(editBuilder => {
          editBuilder.replace(selection, replaceText);
        });
      } else {
        // 多个变量，让用户选择（性能优化：预先计算变量数量）
        const variablesCount = validItems.length;
        const items = validItems.map((item, index) => ({
          label: item.mapping,
          description: item.description || `选项 ${index + 1}/${variablesCount}`,
          detail: item.description ? `选项 ${index + 1}/${variablesCount}` : undefined,
          variable: item.mapping
        }));
        
        vscode.window.showQuickPick(items, {
          placeHolder: `"${selectedText}" 对应多个变量，请选择一个：`
        }).then(selected => {
          if (selected) {
            // 性能优化：使用字符串拼接
            const replaceText = prefix + selected.variable + suffix;
            editor.edit(editBuilder => {
              editBuilder.replace(selection, replaceText);
            });
          }
        });
      }
    }
  );
}
