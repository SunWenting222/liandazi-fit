# Open PWA Framework

一个可直接在本地开发、构建并部署到 GitHub Pages 的 Vue 3 PWA 模板。它不依赖任何站点生成或托管功能；以后也可以接入 Java / Spring Boot API。

## 技术栈

- Vue 3 + JavaScript + Vite
- Vue Router（Hash 模式，适配 GitHub Pages 刷新）
- Pinia
- vite-plugin-pwa（Manifest、Service Worker、离线缓存和自动更新）
- GitHub Actions + GitHub Pages

## 本地开发

需要 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

打开终端显示的本地地址。修改 `src` 目录中的代码后，页面会自动刷新。

## 构建与检查

```bash
npm run build
npm test
```

构建产物位于 `dist`，可部署到任意静态服务器。PWA 的安装和 Service Worker 功能需要 HTTPS；`localhost` 是浏览器允许的开发例外。

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库并把本项目推送到 `main` 分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中将 Source 设为 **GitHub Actions**。
4. 每次推送到 `main`，`.github/workflows/deploy-pages.yml` 会自动测试、构建并发布。

工作流会根据 GitHub 仓库名自动设置 Vite 的部署子路径，因此仓库无需固定名称。

## 接入 Java API

复制 `.env.example` 为 `.env.local`，填写后端地址：

```dotenv
VITE_API_BASE_URL=https://api.example.com
```

通用请求封装位于 `src/api/http.js`。开发新功能时：

- 页面放在 `src/views/<module>/index.vue`
- 可复用组件放在 `src/components`
- 状态放在 `src/stores`
- API 方法放在 `src/api`
- 页面路由登记在 `src/router/index.js`

PWA 不限制功能必须写在同一个文件或同一个页面中；它仍然是标准 Vue 项目，可以持续拆分模块和接入后端服务。
