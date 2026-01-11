/**
 * 日志工具模块
 * 使用 VSCode 输出通道进行日志记录
 */

import * as vscode from 'vscode';

class Logger {
  private outputChannel: vscode.OutputChannel | null = null;

  /**
   * 初始化输出通道
   */
  initialize(channelName: string = 'Reminder') {
    if (!this.outputChannel) {
      this.outputChannel = vscode.window.createOutputChannel(channelName);
    }
  }

  /**
   * 记录信息日志
   */
  info(message: string, ...args: any[]) {
    if (this.outputChannel) {
      const timestamp = new Date().toISOString();
      this.outputChannel.appendLine(`[${timestamp}] [INFO] ${this.formatMessage(message, args)}`);
    }
  }

  /**
   * 记录警告日志
   */
  warn(message: string, ...args: any[]) {
    if (this.outputChannel) {
      const timestamp = new Date().toISOString();
      this.outputChannel.appendLine(`[${timestamp}] [WARN] ${this.formatMessage(message, args)}`);
    }
    // 同时输出到控制台（开发时有用）
    console.warn(`[Reminder] ${message}`, ...args);
  }

  /**
   * 记录错误日志
   * 记录错误时会自动显示输出通道，方便用户查看错误信息
   */
  error(message: string, ...args: any[]) {
    if (this.outputChannel) {
      const timestamp = new Date().toISOString();
      this.outputChannel.appendLine(`[${timestamp}] [ERROR] ${this.formatMessage(message, args)}`);
      // 发生错误时自动显示输出通道
      this.show();
    }
    // 同时输出到控制台（开发时有用）
    console.error(`[Reminder] ${message}`, ...args);
  }

  /**
   * 记录调试日志（仅在开发模式下）
   */
  debug(message: string, ...args: any[]) {
    // 仅在开发模式下记录调试日志
    if (process.env.NODE_ENV === 'development' && this.outputChannel) {
      const timestamp = new Date().toISOString();
      this.outputChannel.appendLine(`[${timestamp}] [DEBUG] ${this.formatMessage(message, args)}`);
    }
  }

  /**
   * 显示输出通道
   */
  show() {
    if (this.outputChannel) {
      this.outputChannel.show();
    }
  }

  /**
   * 格式化消息
   */
  private formatMessage(message: string, args: any[]): string {
    if (args.length === 0) {
      return message;
    }
    try {
      return `${message} ${JSON.stringify(args, null, 2)}`;
    } catch {
      return `${message} ${args.join(' ')}`;
    }
  }

  /**
   * 释放资源
   */
  dispose() {
    if (this.outputChannel) {
      this.outputChannel.dispose();
      this.outputChannel = null;
    }
  }
}

// 导出单例实例
export const logger = new Logger();

