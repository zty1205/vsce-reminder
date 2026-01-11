/**
 * 配置管理工具函数
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import projectConfig from './reminder.config';
import { MappingConfig, MappingConfigItem, VariableMappingItem } from './types';

/**
 * 获取所有支持的属性名（用于构建正则表达式）
 * 返回包含 kebab-case 和 camelCase 变体的属性名数组
 */
export function getSupportedPropertyNamesFromConfig(configItem: MappingConfigItem | null): string[] {
  if (!configItem) {
    return [];
  }

  // 防止空指针：检查 mapping 是否存在
  if (!configItem.mapping || typeof configItem.mapping !== 'object') {
    return [];
  }

  const propertyNames: string[] = [];
  Object.keys(configItem.mapping).forEach(prop => {
    // 添加原始属性名（可能是 kebab-case）
    propertyNames.push(prop);
    // 如果是 kebab-case，也添加 camelCase 变体
    if (prop.includes('-')) {
      const camelCase = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      propertyNames.push(camelCase);
    }
  });

  return propertyNames;
}

/**
 * 规范化属性名（将 camelCase 转换为 kebab-case）
 */
export function normalizePropertyName(propertyName: string): string {
  // 防止空指针：如果 propertyName 为空或不是字符串，返回空字符串
  if (!propertyName || typeof propertyName !== 'string') {
    return '';
  }
  return propertyName.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * 将赋值操作符数组转换为正则表达式模式
 * 例如 [':', '='] 转换为 '\\s*[:=]\\s*'
 * 
 * @param operators 操作符数组
 * @returns 正则表达式模式字符串，包含操作符前后的空格匹配
 */
export function getAssignmentOperatorsPattern(operators?: string[]): string {
  if (!operators || operators.length === 0) {
    return '\\s*[:=]\\s*'; // 默认值，匹配 : 或 =，前后可以有空格
  }
  
  // 转义特殊字符并构建字符类
  const escaped = operators.map(op => {
    // 在正则表达式字符类中，需要转义的特殊字符：] \ ^ - 
    return op.replace(/[\]\\^-]/g, '\\$&');
  });
  
  // 返回模式：前后可以有空格，中间是操作符字符类
  return `[${escaped.join('')}]\\s*`;
}

/**
 * 读取并解析配置文件
 * 仅支持 JSON 格式
 */
export function readConfigFile(configPath: string): MappingConfig | null {
  try {
    if (!fs.existsSync(configPath)) {
      return null;
    }

    const configContent = fs.readFileSync(configPath, 'utf-8');

    try {
      const parsed = JSON.parse(configContent);
      // 兼容数组和对象格式
      if (Array.isArray(parsed)) {
        return parsed as MappingConfig;
      } else {
        // 如果是对象格式，转换为数组
        return [parsed as MappingConfigItem];
      }
    } catch (jsonError) {
      vscode.window.showErrorMessage(
        `解析 JSON 配置文件失败: ${(jsonError as Error)?.message}`
      );
      console.error('解析 JSON 配置文件失败:', jsonError);
      return null;
    }
  } catch (error) {
    vscode.window.showErrorMessage(
      `读取配置文件失败: ${(error as Error)?.message}`
    );
    console.error('读取配置文件失败:', error);
    return null;
  }
}

/**
 * 深度合并两个映射对象
 * 将 projectMapping 合并到 userMapping 中，userMapping 的键值优先
 */
function deepMergeMappings(
  projectMapping: MappingConfigItem['mapping'],
  userMapping: MappingConfigItem['mapping']
): MappingConfigItem['mapping'] {
  const merged: MappingConfigItem['mapping'] = { ...projectMapping };
  
  // 遍历用户配置的映射
  Object.keys(userMapping).forEach(propertyName => {
    if (merged[propertyName]) {
      // 如果属性已存在，合并值映射
      const mergedValues: { [value: string]: VariableMappingItem[] } = { ...merged[propertyName] };
      
      // 合并用户配置的值映射
      Object.keys(userMapping[propertyName]).forEach(value => {
        // 如果值已存在，合并变量映射数组（用户配置优先，但保留项目配置中不冲突的项）
        if (mergedValues[value]) {
          // 合并数组，去重（基于 mapping 字段）
          const existingMappings = new Map<string, VariableMappingItem>();
          mergedValues[value].forEach(item => {
            existingMappings.set(item.mapping, item);
          });
          // 用户配置覆盖项目配置
          userMapping[propertyName][value].forEach(item => {
            existingMappings.set(item.mapping, item);
          });
          mergedValues[value] = Array.from(existingMappings.values());
        } else {
          mergedValues[value] = userMapping[propertyName][value];
        }
      });
      
      merged[propertyName] = mergedValues;
    } else {
      // 如果属性不存在，直接使用用户配置
      merged[propertyName] = userMapping[propertyName];
    }
  });
  
  return merged;
}

/**
 * 合并项目配置到用户配置项
 * 将 projectConfig 合并到每个 userConfigItem 中
 */
function mergeProjectConfigIntoItem(
  projectConfig: MappingConfigItem,
  userConfigItem: MappingConfigItem
): MappingConfigItem {
  return {
    // 用户配置的描述优先，如果没有则使用项目配置
    description: userConfigItem.description ?? projectConfig.description,
    // 深度合并映射对象
    mapping: deepMergeMappings(
      projectConfig.mapping || {},
      userConfigItem.mapping || {}
    ),
    // 用户配置的其他字段优先，如果没有则使用项目配置
    prefix: userConfigItem.prefix ?? projectConfig.prefix,
    suffix: userConfigItem.suffix ?? projectConfig.suffix,
    assignmentOperators: userConfigItem.assignmentOperators ?? projectConfig.assignmentOperators,
    languages: userConfigItem.languages ?? projectConfig.languages,
  };
}

/**
 * 合并项目配置到用户配置数组
 * 将 projectConfig 合并到每个用户配置项中
 */
export function mergeConfigs(
  projectConfig: MappingConfigItem,
  userConfig: MappingConfig
): MappingConfig {
  return userConfig.map(userItem => mergeProjectConfigIntoItem(projectConfig, userItem));
}

/**
 * 查找用户配置文件路径
 * 仅支持 reminder.config.json
 */
function findUserConfigPath(projectRootPath: string): string | null {
  const configPath = path.join(projectRootPath, 'reminder.config.json');
  if (fs.existsSync(configPath)) {
    return configPath;
  }
  return null;
}

/**
 * 加载合并后的配置（项目默认配置 + 工作区根目录配置）
 * 将 projectConfig 合并到用户配置文件的每一项中
 */
export function loadMergedConfig(): MappingConfig {
  // 兼容数组和对象格式的项目配置，但只取第一个作为基础配置
  const baseProjectConfig: MappingConfigItem = Array.isArray(projectConfig)
    ? (projectConfig as MappingConfig)[0] || {} as MappingConfigItem
    : projectConfig as MappingConfigItem;

  try {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    const projectRootPath = workspaceFolder?.uri.fsPath;
    const userConfigPath = projectRootPath ? findUserConfigPath(projectRootPath) : null;
    const userConfig = userConfigPath ? readConfigFile(userConfigPath) : null;

    if (userConfig && userConfig.length > 0) {
      // 将项目配置合并到每个用户配置项中
      return mergeConfigs(baseProjectConfig, userConfig);
    } else {
      // 如果没有用户配置，返回项目配置作为数组
      return [baseProjectConfig];
    }
  } catch (error) {
    vscode.window.showErrorMessage(
      `加载配置失败: ${(error as Error)?.message}`
    );
    console.error('加载配置失败:', error);
    return [baseProjectConfig];
  }
}

/**
 * 根据语言ID查找匹配的配置项
 */
export function findConfigItemByLanguage(config: MappingConfig, languageId: string): MappingConfigItem | null {
  if (!config || !Array.isArray(config)) {
    return null;
  }
  
  if (!languageId || typeof languageId !== 'string') {
    return null;
  }
  
  for (const item of config) {
    if (!item || typeof item !== 'object') {
      continue;
    }
    // 如果没有指定 languages，默认支持所有语言
    if (!item.languages || item.languages.length === 0) {
      return item;
    }
    if (item.languages.includes(languageId)) {
      return item;
    }
  }
  return null;
}

/**
 * 获取所有配置中定义的语言列表
 */
export function getAllLanguagesFromConfig(config: MappingConfig): string[] {
  const languages = new Set<string>();
  for (const item of config) {
    if (item.languages) {
      item.languages.forEach(lang => languages.add(lang));
    }
  }
  // 如果没有任何配置指定语言，返回默认语言列表
  if (languages.size === 0) {
    return ['css', 'scss', 'less', 'javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue'];
  }
  return Array.from(languages);
}

/**
 * 获取所有配置中定义的赋值操作符列表（用于触发补全）
 */
export function getAllAssignmentOperatorsFromConfig(config: MappingConfig): string[] {
  const operators = new Set<string>();
  for (const item of config) {
    if (item.assignmentOperators && Array.isArray(item.assignmentOperators)) {
      item.assignmentOperators.forEach(op => {
        if (op && typeof op === 'string') {
          operators.add(op);
        }
      });
    }
  }
  // 如果没有任何配置指定操作符，返回默认值
  if (operators.size === 0) {
    return [':', '='];
  }
  return Array.from(operators);
}
