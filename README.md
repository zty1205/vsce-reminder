# vsce-reminder - 变量转换提示助手

一个专为 H5 开发设计的 VSCode 扩展，根据配置文件自动提示变量并支持值到变量的转换，帮助开发者快速使用 CSS 变量，提高开发效率。

## 功能特性

1. **自动补全提示**：当你在编写 `margin`、`padding` 或 `fontSize` 等属性时，输入 `:` 后会自动提示可用的变量选项。

2. **快速修复**：当你输入了配置中存在的值时，可以通过快速修复（Quick Fix）一键转换为对应的变量。

3. **手动转换命令**：选中文本后，使用命令面板执行 "转换变量" 命令进行转换。

4. **多语言支持**：支持 CSS、SCSS、Less、JavaScript、TypeScript、Vue、HTML、JSON、Markdown、PHP、Java 等多种文件类型。

5. **灵活配置**：支持项目级和用户级配置，可自定义属性映射、触发操作符、前后缀等。

## 使用方法

### 1. 自动补全

在 CSS、SCSS、Less、JavaScript、TypeScript 等文件中，输入：

```css
margin: ;
```

输入 `:` 后，会自动显示可用的变量选项，例如：

- `15px → var(--spacing_7)`
- `20px → var(--spacing_8)`
- `25px → var(--spacing_9)`
- `30px → var(--spacing_10)`

选择后会自动插入对应的 CSS 变量。

### 2. 快速修复

如果你已经输入了值，例如：

```css
margin: 15px;
```

将光标放在 `15px` 上，按 `Cmd+.` (Mac) 或 `Ctrl+.` (Windows/Linux) 打开快速修复菜单，选择 "转换为 var(--spacing_7)"。

### 3. 手动转换命令

1. 选中要转换的值（例如 `15px`）
2. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows/Linux) 打开命令面板
3. 输入 "转换变量" 并执行
4. 如果对应多个变量，会弹出选择菜单供你选择

## 配置

### 配置文件位置

在项目根目录创建 `reminder.config.json` 文件（默认路径）。

也可以在 VSCode 设置中自定义配置文件路径：

```json
{
  "reminder.configPath": "src/reminder.config.json"
}
```

### 配置文件格式

配置文件支持 JSON 格式，可以是数组或对象。推荐使用数组格式，支持多个配置项。

### 配置文件示例

```json
[
  {
    "description": "间距变量配置",
    "mapping": {
      "margin": {
        "15px": [
          {
            "mapping": "var(--spacing_7)",
            "description": "小间距"
          }
        ],
        "20px": [
          {
            "mapping": "var(--spacing_8)",
            "description": "中间距"
          }
        ],
        "30px": [
          {
            "mapping": "var(--spacing_10)",
            "description": "大间距"
          }
        ]
      },
      "padding": {
        "15px": [
          {
            "mapping": "var(--spacing_7)",
            "description": "小内边距"
          }
        ],
        "20px": [
          {
            "mapping": "var(--spacing_8)",
            "description": "中间距"
          }
        ]
      },
      "fontSize": {
        "14px": [
          {
            "mapping": "var(--body_4)",
            "description": "小号字体"
          }
        ],
        "16px": [
          {
            "mapping": "var(--body_3)",
            "description": "标准字体"
          }
        ]
      }
    },
    "languages": ["css", "scss", "less", "javascript", "typescript", "vue"],
    "assignmentOperators": [":", "="],
    "prefix": "",
    "suffix": ""
  }
]
```

### 配置字段说明

- **description** (可选): 配置项的描述信息
- **mapping** (必需): 属性名到值的映射关系
  - 键为属性名（如 `margin`、`padding`、`fontSize`）
  - 值为对象，键为原始值（如 `15px`），值为变量映射数组
  - 每个变量映射包含 `mapping`（变量名）和 `description`（描述）
- **languages** (可选): 指定支持的文件类型，不指定则支持所有语言
- **assignmentOperators** (可选): 指定触发补全的操作符，默认为 `[":", "="]`
- **prefix** (可选): 变量前缀，默认为空
- **suffix** (可选): 变量后缀，默认为空

### 支持的文件类型

- CSS (`.css`)
- SCSS (`.scss`)
- Less (`.less`)
- JavaScript (`.js`, `.jsx`)
- TypeScript (`.ts`, `.tsx`)
- Vue (`.vue`)
- HTML (`.html`)
- JSON (`.json`)
- Markdown (`.md`)
- PHP (`.php`)
- Java (`.java`)

## 安装

### 从 VSCode Marketplace 安装

1. 打开 VSCode
2. 点击左侧扩展图标（或按 `Cmd+Shift+X` / `Ctrl+Shift+X`）
3. 搜索 "reminder-helper"
4. 点击 "安装" 按钮

### 从 VSIX 文件安装

1. 下载 `reminder-helper-0.0.1.vsix` 文件
2. 在 VSCode 中按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows/Linux)
3. 输入 "Extensions: Install from VSIX..."
4. 选择下载的 `.vsix` 文件

## 开发

```bash
# 安装依赖
npm install

# 编译 TypeScript
npm run compile

# 监听模式（开发时使用）
npm run watch

# 打包插件
npm run package
```

按 `F5` 在扩展开发宿主窗口中测试扩展。

## 项目信息

- **版本**: 0.0.1
- **发布者**: tengyuezhang1205
- **许可证**: MIT
- **仓库**: [https://github.com/zty1205](https://github.com/zty1205)

## 许可证

MIT License

Copyright (c) 2024 tengyuezhang1205
