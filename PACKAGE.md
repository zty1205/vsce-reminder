# VSCode 插件打包指南

## 前置要求

1. 确保已安装 Node.js 和 npm/yarn
2. 安装 VSCode Extension Manager (vsce)

## 安装 vsce

### 方式一：全局安装（推荐）
```bash
npm install -g @vscode/vsce
```

### 方式二：本地安装
```bash
npm install --save-dev @vscode/vsce
# 或使用 yarn
yarn add -D @vscode/vsce
```

## 打包步骤

### 1. 编译 TypeScript 代码
```bash
npm run compile
# 或
yarn compile
```

### 2. 打包插件

如果使用 npm：
```bash
npm run package
```

如果使用 yarn：
```bash
npm run package:yarn
# 或直接使用
vsce package --yarn
```

### 3. 打包结果

打包成功后，会在项目根目录生成一个 `.vsix` 文件，例如：
- `reminder-0.0.1.vsix`

## 安装打包的插件

### 方式一：通过命令行安装
```bash
code --install-extension reminder-0.0.1.vsix
```

### 方式二：通过 VSCode UI 安装
1. 打开 VSCode
2. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows/Linux)
3. 输入 "Extensions: Install from VSIX..."
4. 选择生成的 `.vsix` 文件

## 注意事项

1. **版本号**：每次打包前记得更新 `package.json` 中的 `version` 字段
2. **编译检查**：确保所有 TypeScript 代码已正确编译到 `out/` 目录
3. **文件排除**：`.vscodeignore` 文件会排除不需要的文件（如 `src/`、`.ts` 文件等）
4. **发布者信息**：如果要发布到 VSCode Marketplace，需要设置正确的 `publisher` 字段

## 发布到 Marketplace（可选）

如果需要发布到 VSCode Marketplace：

1. 创建发布者账号：访问 https://marketplace.visualstudio.com/manage
2. 获取 Personal Access Token
3. 使用 vsce 发布：
```bash
vsce publish
```

