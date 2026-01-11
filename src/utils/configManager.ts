/**
 * 配置管理器
 * 负责加载、缓存和热重载配置
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { MappingConfig } from '../types';
import { loadMergedConfig, validateConfig, getAllLanguagesFromConfig, getAllAssignmentOperatorsFromConfig } from './utils';
import { logger } from './logger';
import { regexCache } from './regexCache';

export class ConfigManager {
  private config: MappingConfig = [];
  private cachedLanguages: string[] = [];
  private cachedAssignmentOperators: string[] = [];
  private configWatcher: vscode.FileSystemWatcher | null = null;
  private disposables: vscode.Disposable[] = [];
  private onChangeCallbacks: Array<(config: MappingConfig) => void> = [];

  constructor() {
    this.loadConfig();
    this.setupFileWatcher();
  }

  /**
   * 加载配置
   */
  private loadConfig() {
    try {
      this.config = loadMergedConfig();
      // 更新缓存的语言和操作符列表
      this.cachedLanguages = getAllLanguagesFromConfig(this.config);
      this.cachedAssignmentOperators = getAllAssignmentOperatorsFromConfig(this.config);
      logger.info('配置已重新加载', { 
        configLength: this.config.length,
        languages: this.cachedLanguages.length,
        operators: this.cachedAssignmentOperators.length
      });
    } catch (error) {
      logger.error('加载配置失败', error);
    }
  }

  /**
   * 设置文件监听器，监听配置文件变化
   */
  private setupFileWatcher() {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      return;
    }

    const configPath = path.join(workspaceFolder.uri.fsPath, 'reminder.config.json');
    const configPattern = new vscode.RelativePattern(workspaceFolder, 'reminder.config.json');

    // 创建文件监听器
    this.configWatcher = vscode.workspace.createFileSystemWatcher(configPattern);

    // 监听文件创建、更改和删除
    this.configWatcher.onDidCreate(() => {
      logger.info('检测到配置文件创建');
      this.reloadConfig();
    });

    this.configWatcher.onDidChange(() => {
      logger.info('检测到配置文件更改');
      this.reloadConfig();
    });

    this.configWatcher.onDidDelete(() => {
      logger.info('检测到配置文件删除');
      this.reloadConfig();
    });

    // 监听工作区配置变化（VSCode 设置）
    const configChangeDisposable = vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('reminder')) {
        logger.info('检测到 VSCode 配置更改');
        this.reloadConfig();
      }
    });

    this.disposables.push(this.configWatcher, configChangeDisposable);
  }

  /**
   * 重新加载配置并通知所有监听器
   */
  private reloadConfig() {
    this.loadConfig();
    // 清除正则表达式缓存（配置变化后需要重新构建）
    regexCache.clear();
    // 通知所有注册的回调函数
    this.onChangeCallbacks.forEach(callback => {
      try {
        callback(this.config);
      } catch (error) {
        logger.error('配置变更回调执行失败', error);
      }
    });
  }

  /**
   * 获取当前配置
   */
  getConfig(): MappingConfig {
    return this.config;
  }

  /**
   * 获取所有支持的语言列表（缓存）
   */
  getAllLanguages(): string[] {
    return this.cachedLanguages;
  }

  /**
   * 获取所有赋值操作符列表（缓存）
   */
  getAllAssignmentOperators(): string[] {
    return this.cachedAssignmentOperators;
  }

  /**
   * 注册配置变更回调
   * @param callback 配置变更时调用的回调函数
   * @returns 用于取消注册的 Disposable
   */
  onConfigChange(callback: (config: MappingConfig) => void): vscode.Disposable {
    this.onChangeCallbacks.push(callback);
    return {
      dispose: () => {
        const index = this.onChangeCallbacks.indexOf(callback);
        if (index > -1) {
          this.onChangeCallbacks.splice(index, 1);
        }
      }
    };
  }

  /**
   * 手动重新加载配置
   */
  reload() {
    this.reloadConfig();
  }

  /**
   * 释放资源
   */
  dispose() {
    this.disposables.forEach(disposable => disposable.dispose());
    this.disposables = [];
    this.onChangeCallbacks = [];
    this.configWatcher = null;
  }
}

// 导出单例实例
let configManagerInstance: ConfigManager | null = null;

export function getConfigManager(): ConfigManager {
  if (!configManagerInstance) {
    configManagerInstance = new ConfigManager();
  }
  return configManagerInstance;
}

