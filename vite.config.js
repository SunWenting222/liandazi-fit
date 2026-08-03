import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base =
  process.env.GITHUB_ACTIONS === "true" && repositoryName
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base,
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["pwa-192.png", "pwa-512.png"],
      manifest: {
        name: "Open PWA Framework",
        short_name: "Open PWA",
        description: "一个内容无关、可持续扩展的 Vue 3 PWA 基础框架。",
        theme_color: "#163c3a",
        background_color: "#f3f5ef",
        lang: "zh-CN",
        display: "standalone",
        start_url: ".",
        scope: ".",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: `${base}index.html`,
        globPatterns: ["**/*.{js,css,html,png,ico,svg}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@pwa": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
