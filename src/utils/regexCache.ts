/**
 * 正则表达式缓存
 * 缓存构建好的正则表达式，避免重复构建
 */

import { MappingConfigItem } from '../types';
import { getSupportedPropertyNamesFromConfig, getAssignmentOperatorsPattern } from './utils';

interface RegexCacheEntry {
  propertyPattern: string;
  fullPattern: RegExp;
  timestamp: number;
}

class RegexCache {
  private cache: Map<string, RegexCacheEntry> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5分钟缓存时间

  /**
   * 生成缓存键
   */
  private getCacheKey(configItem: MappingConfigItem): string {
    const properties = getSupportedPropertyNamesFromConfig(configItem).sort().join(',');
    const operators = (configItem.assignmentOperators || [':', '=']).sort().join(',');
    return `${properties}|${operators}`;
  }

  /**
   * 获取或构建正则表达式
   */
  getRegex(configItem: MappingConfigItem, patternType: 'completion' | 'codeAction'): RegExp {
    const cacheKey = `${this.getCacheKey(configItem)}|${patternType}`;
    const cached = this.cache.get(cacheKey);
    const now = Date.now();

    // 检查缓存是否有效
    if (cached && (now - cached.timestamp) < this.CACHE_TTL) {
      return cached.fullPattern;
    }

    // 构建新的正则表达式
    const supportedProperties = getSupportedPropertyNamesFromConfig(configItem);
    if (supportedProperties.length === 0) {
      // 返回一个不匹配任何内容的正则表达式
      return /(?!)/;
    }

    // 转义特殊字符并构建正则表达式模式
    const escapedProperties = supportedProperties.map(prop => 
      prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const propertyPattern = `(${escapedProperties.join('|')})`;
    const assignmentOperatorsPattern = getAssignmentOperatorsPattern(configItem.assignmentOperators);

    // 根据类型构建不同的正则表达式
    let fullPattern: RegExp;
    if (patternType === 'completion') {
      // 补全模式：匹配属性、操作符和值（可能为空）
      fullPattern = new RegExp(`${propertyPattern}\\s*${assignmentOperatorsPattern}([^;]*?)(?:;|$)`, 'i');
    } else {
      // 代码操作模式：匹配属性、操作符和值（必须有值）
      fullPattern = new RegExp(`${propertyPattern}${assignmentOperatorsPattern}([^;]+)`, 'i');
    }

    // 更新缓存
    this.cache.set(cacheKey, {
      propertyPattern,
      fullPattern,
      timestamp: now
    });

    return fullPattern;
  }

  /**
   * 清除缓存
   */
  clear() {
    this.cache.clear();
  }

  /**
   * 清除过期的缓存项
   */
  clearExpired() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= this.CACHE_TTL) {
        this.cache.delete(key);
      }
    }
  }
}

// 导出单例实例
export const regexCache = new RegexCache();

