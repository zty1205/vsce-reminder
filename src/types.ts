/**
 * 类型定义
 */

import { PresetName } from "./presets/types";

/**
 * 变量映射项
 */
export interface VariableMappingItem {
  /** CSS 变量名 */
  mapping: string;
  /** 变量描述 */
  description?: string;
}

/**
 * 单个映射配置项
 */
export interface MappingConfigItem {
  /** 描述 */
  description?: string;
  /** 映射对象，键为 CSS 属性名，值为该属性对应的值到变量的映射
   * 一个值可以对应一个或多个变量映射项（包含 mapping 和 description）
   */
  presets?: PresetName[];
  mapping: {
    [key: string]: {
      [value: string]: VariableMappingItem[];
    };
  };
  /** 转换后的字符串前缀，默认为空字符串 */
  prefix?: string;
  /** 转换后的字符串后缀，默认为空字符串 */
  suffix?: string;
  /** 赋值操作符数组，默认为 [':', '=']（匹配 : 或 =） */
  assignmentOperators?: string[];
  /** 支持的文件类型列表 */
  languages?: string[];
}

/**
 * 完整配置类型（数组形式）
 */
export type MappingConfig = MappingConfigItem[];
