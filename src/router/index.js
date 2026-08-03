import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@pwa/views/home/index.vue";
import DesignTokens from "@pwa/views/design-tokens/index.vue";

export default createRouter({
  // Hash 路由无需服务器重写规则，刷新 GitHub Pages 上的任意页面都不会 404。
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/design-tokens",
      name: "design-tokens",
      component: DesignTokens,
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
});
