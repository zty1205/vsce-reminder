/**
 * reminder VSCode 扩展
 * 功能：根据配置文件自动提示 CSS 变量并支持值到变量的转换
 */

import * as vscode from 'vscode';
import { ReminderProvider } from './providers/completionProvider';
import { ConvertToVariableCodeActionProvider } from './providers/codeActionProvider';
import { registerConvertCommand } from './commands';
import { logger } from './utils/logger';
import { getConfigManager } from './utils/configManager';

/**
 * 扩展激活函数
 * 当扩展被激活时调用，注册所有功能提供者和命令
 * 
 * @param context VSCode 扩展上下文，用于管理扩展的生命周期和订阅
 */
export function activate(context: vscode.ExtensionContext) {
  // 初始化日志输出通道
  logger.initialize('Reminder');
  logger.info('Reminder 扩展已激活');
  
  // 初始化配置管理器
  const configManager = getConfigManager();
  
  // 获取支持的语言列表（使用缓存）
  const languages = configManager.getAllLanguages();
  // 获取所有配置中定义的赋值操作符（用于触发补全，使用缓存）
  const triggerCharacters = configManager.getAllAssignmentOperators();
  
  // 构建语言选择器
  const languageSelectors = languages.map(lang => ({ scheme: 'file', language: lang }));

  // ========== 注册自动补全提供者 ==========
  const completionProvider = new ReminderProvider(configManager);
  const completionDisposable = vscode.languages.registerCompletionItemProvider(
    languageSelectors,
    completionProvider,
    ...triggerCharacters // 触发字符：从配置中读取赋值操作符
  );

  // ========== 注册代码操作提供者（快速修复） ==========
  const codeActionProvider = new ConvertToVariableCodeActionProvider(configManager);
  const codeActionDisposable = vscode.languages.registerCodeActionsProvider(
    languageSelectors,
    codeActionProvider
  );

  // ========== 注册命令：手动转换选中文本 ==========
  const convertCommand = registerConvertCommand(context);

  // ========== 注册命令：显示日志输出通道 ==========
  const showLogCommand = vscode.commands.registerCommand('reminder.showLog', () => {
    logger.show();
  });

  // 监听配置变化
  const configChangeDisposable = configManager.onConfigChange(() => {
    logger.info('配置已更新', {
      languages: configManager.getAllLanguages().length,
      operators: configManager.getAllAssignmentOperators().length
    });
    // 注意：VSCode 的 provider 注册后无法动态更新语言选择器
    // 如果需要完全支持动态更新，需要重新注册 provider（但这会导致用户体验问题）
  });

  // 将所有订阅添加到上下文中，以便在扩展停用时自动清理
  context.subscriptions.push(
    completionDisposable,
    codeActionDisposable,
    convertCommand,
    showLogCommand,
    configChangeDisposable,
    { dispose: () => logger.dispose() }, // 清理日志资源
    { dispose: () => configManager.dispose() } // 清理配置管理器资源
  );
}

/**
 * 扩展停用函数
 * 当扩展被停用时调用，用于清理资源
 * 由于使用了 context.subscriptions，大部分清理工作会自动完成
 */
export function deactivate() {
  logger.info('Reminder 扩展已停用');
  logger.dispose();
}
