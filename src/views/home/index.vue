<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import BaseButton from "@pwa/components/BaseButton.vue";

const online = ref(navigator.onLine);
const installEvent = ref(null);
const installed = ref(window.matchMedia("(display-mode: standalone)").matches);

function syncConnection() {
  online.value = navigator.onLine;
}

function captureInstall(event) {
  event.preventDefault();
  installEvent.value = event;
}

async function installApp() {
  if (!installEvent.value) return;
  installEvent.value.prompt();
  const result = await installEvent.value.userChoice;
  installed.value = result.outcome === "accepted";
  installEvent.value = null;
}

onMounted(() => {
  window.addEventListener("online", syncConnection);
  window.addEventListener("offline", syncConnection);
  window.addEventListener("beforeinstallprompt", captureInstall);
});

onBeforeUnmount(() => {
  window.removeEventListener("online", syncConnection);
  window.removeEventListener("offline", syncConnection);
  window.removeEventListener("beforeinstallprompt", captureInstall);
});

const capabilities = [
  ["离线壳", "核心资源自动缓存，弱网或离线时仍可打开应用。", "01"],
  ["可安装", "支持添加到手机或桌面主屏，以独立窗口运行。", "02"],
  ["状态管理", "Pinia 已接入，可按业务模块扩展本地和远程状态。", "03"],
  ["路由系统", "Vue Router 已配置，页面与模块可自由增加。", "04"],
  ["API 边界", "统一请求封装已预留，后续可连接 Java 服务。", "05"],
  ["设计系统", "令牌与基础组件统一管理，避免样式持续漂移。", "06"],
];
</script>

<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">
          <span class="status-dot" :class="{ offline: !online }" />
          {{ online ? "在线 · 已准备同步" : "离线 · 本地模式" }}
        </div>
        <h1>先把底座搭好，<br /><em>内容以后再决定。</em></h1>
        <p>
          一套轻量、开放的 Vue 3 PWA 框架。今天可以是健身记录，
          明天也可以变成个人工具、内容库或轻量协作应用。
        </p>
        <div class="hero-actions">
          <BaseButton v-if="installEvent && !installed" @click="installApp">
            安装到设备
          </BaseButton>
          <BaseButton v-else variant="primary" disabled>
            {{ installed ? "已作为应用运行" : "可通过浏览器安装" }}
          </BaseButton>
          <RouterLink class="text-link" to="/design-tokens">查看设计令牌 →</RouterLink>
        </div>
      </div>
      <aside class="framework-card" aria-label="框架状态">
        <span class="card-kicker">FRAMEWORK / 1.0</span>
        <div class="card-orbit"><span>VUE</span></div>
        <dl>
          <div><dt>运行模式</dt><dd>PWA</dd></div>
          <div><dt>内容模型</dt><dd>开放</dd></div>
          <div><dt>数据策略</dt><dd>本地优先</dd></div>
        </dl>
      </aside>
    </section>

    <section class="capability-section">
      <div class="section-heading">
        <span>FOUNDATION</span>
        <h2>已经就位的基础能力</h2>
        <p>保持核心简单，把复杂度留给真正出现的需求。</p>
      </div>
      <div class="capability-grid">
        <article v-for="[title, description, number] in capabilities" :key="title">
          <span>{{ number }}</span>
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </article>
      </div>
    </section>

    <section class="architecture-strip">
      <div><strong>现在</strong><span>Vue PWA + 本地状态</span></div>
      <i>→</i>
      <div><strong>需要同步时</strong><span>接入 Spring Boot API</span></div>
      <i>→</i>
      <div><strong>需要增长时</strong><span>按业务拆分模块</span></div>
    </section>
  </div>
</template>
