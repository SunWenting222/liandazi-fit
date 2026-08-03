<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useAppStore } from "@pwa/stores/app";

const appStore = useAppStore();
onMounted(() => appStore.applyTheme());
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="返回首页">
        <span class="brand-mark" aria-hidden="true">O</span>
        <span>
          <strong>Open PWA</strong>
          <small>Vue 3 Framework</small>
        </span>
      </RouterLink>
      <nav class="site-nav" aria-label="主导航">
        <RouterLink to="/">框架</RouterLink>
        <RouterLink to="/design-tokens">设计令牌</RouterLink>
        <button class="theme-toggle" type="button" @click="appStore.toggleTheme">
          {{ appStore.theme === "light" ? "深色" : "浅色" }}
        </button>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="site-footer">
      <span>Open PWA Framework · v1.0</span>
      <span>Vue 3 · Pinia · Router · Offline-ready</span>
    </footer>
  </div>
</template>
