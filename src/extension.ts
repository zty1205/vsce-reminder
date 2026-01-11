/**
 * reminder VSCode 扩展
 * 功能：根据配置文件自动提示 CSS 变量并支持值到变量的转换
 */

import * as vscode from 'vscode';
import { ReminderProvider } from './completionProvider';
import { ConvertToVariableCodeActionProvider } from './codeActionProvider';
import { registerConvertCommand } from './commands';
import { loadMergedConfig, getAllLanguagesFromConfig, getAllAssignmentOperatorsFromConfig } from './utils';

/**
 * 扩展激活函数
 * 当扩展被激活时调用，注册所有功能提供者和命令
 * 
 * @param context VSCode 扩展上下文，用于管理扩展的生命周期和订阅
 */
export function activate(context: vscode.ExtensionContext) {
  // 加载配置并获取支持的语言列表
  const config = loadMergedConfig();
  const languages = getAllLanguagesFromConfig(config);
  // 获取所有配置中定义的赋值操作符（用于触发补全）
  const triggerCharacters = getAllAssignmentOperatorsFromConfig(config);
  
  // 构建语言选择器
  const languageSelectors = languages.map(lang => ({ scheme: 'file', language: lang }));

  // ========== 注册自动补全提供者 ==========
  const completionProvider = new ReminderProvider();
  const completionDisposable = vscode.languages.registerCompletionItemProvider(
    languageSelectors,
    completionProvider,
    ...triggerCharacters // 触发字符：从配置中读取赋值操作符
  );

  // ========== 注册代码操作提供者（快速修复） ==========
  const codeActionProvider = new ConvertToVariableCodeActionProvider();
  const codeActionDisposable = vscode.languages.registerCodeActionsProvider(
    languageSelectors,
    codeActionProvider
  );

  // ========== 注册命令：手动转换选中文本 ==========
  const convertCommand = registerConvertCommand(context);

  // 将所有订阅添加到上下文中，以便在扩展停用时自动清理
  context.subscriptions.push(
    completionDisposable,
    codeActionDisposable,
    convertCommand
  );
}

/**
 * 扩展停用函数
 * 当扩展被停用时调用，用于清理资源
 * 由于使用了 context.subscriptions，大部分清理工作会自动完成
 */
export function deactivate() {}
