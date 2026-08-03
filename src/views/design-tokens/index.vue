<script setup>
import { ref } from "vue";
import BaseButton from "@pwa/components/BaseButton.vue";
import BaseSelect from "@pwa/components/BaseSelect.vue";
import BaseSwitch from "@pwa/components/BaseSwitch.vue";
import BaseDialog from "@pwa/components/BaseDialog.vue";
import ConfirmDialog from "@pwa/components/ConfirmDialog.vue";
import SearchInput from "@pwa/components/SearchInput.vue";

const selected = ref("open");
const enabled = ref(true);
const search = ref("");
const dialogOpen = ref(false);
const confirmOpen = ref(false);
const options = [
  { label: "开放模式", value: "open" },
  { label: "专注模式", value: "focus" },
];

const scales = [
  ["50", "#edf5f2"], ["100", "#d7e8e2"], ["200", "#acd3c8"],
  ["300", "#78b6a7"], ["400", "#4b9587"], ["500", "#2f776d"],
  ["600", "#245f58"], ["700", "#1d4c47"], ["800", "#193d3a"], ["900", "#163431"],
];
</script>

<template>
  <div class="tokens-view">
    <header class="token-header">
      <div><span>DESIGN SYSTEM</span><h1>设计令牌与基础组件</h1></div>
      <div class="token-meta"><strong>v1.0</strong><span>浅色 / 深色模式</span></div>
    </header>

    <section class="token-section">
      <div class="token-title"><span>01</span><h2>品牌色彩</h2></div>
      <div class="color-scale">
        <div v-for="[step, color] in scales" :key="step" :style="{ background: color }">
          <span>{{ step }}</span><code>{{ color }}</code>
        </div>
      </div>
    </section>

    <section class="token-section">
      <div class="token-title"><span>02</span><h2>语义色彩</h2></div>
      <div class="semantic-grid">
        <article class="semantic success"><strong>成功</strong><p>操作已保存，可以继续。</p></article>
        <article class="semantic error"><strong>错误</strong><p>操作未完成，请稍后重试。</p></article>
        <article class="semantic warning"><strong>警告</strong><p>此操作可能影响现有数据。</p></article>
        <article class="semantic info"><strong>信息</strong><p>这里是一条通用提示信息。</p></article>
      </div>
    </section>

    <section class="token-section split">
      <div>
        <div class="token-title"><span>03</span><h2>文字色彩</h2></div>
        <div class="text-samples">
          <p class="text-primary">主要文字承载页面核心信息。</p>
          <p class="text-secondary">次要文字提供补充说明。</p>
          <p class="text-muted">辅助文字更轻、更克制。</p>
          <p class="text-placeholder">占位文字：请输入内容</p>
          <p class="text-disabled">禁用文字不可交互</p>
          <a href="#components">链接文字支持悬停状态</a>
          <p class="text-accent">强调文字突出积极状态。</p>
        </div>
      </div>
      <div>
        <div class="token-title"><span>04</span><h2>表面色彩</h2></div>
        <div class="surface-grid">
          <span class="surface page">页面背景</span>
          <span class="surface panel">卡片面板</span>
          <span class="surface subtle">次级表面</span>
          <span class="surface raised">浮层表面</span>
          <label class="focus-surface">输入框聚焦态<input value="Focus" /></label>
        </div>
      </div>
    </section>

    <section id="components" class="token-section">
      <div class="token-title"><span>05</span><h2>按钮状态</h2></div>
      <div class="button-matrix">
        <BaseButton>主要按钮</BaseButton>
        <BaseButton variant="secondary">次要按钮</BaseButton>
        <BaseButton variant="success">成功按钮</BaseButton>
        <BaseButton variant="danger">危险按钮</BaseButton>
        <BaseButton loading>加载中</BaseButton>
        <BaseButton disabled>禁用按钮</BaseButton>
      </div>
    </section>

    <section class="token-section">
      <div class="token-title"><span>06</span><h2>基础组件</h2></div>
      <div class="component-grid">
        <article><h3>BaseSelect</h3><BaseSelect v-model="selected" :options="options" label="工作模式" /></article>
        <article><h3>BaseSwitch</h3><BaseSwitch v-model="enabled" label="启用离线能力" /><BaseSwitch disabled label="禁用状态" /></article>
        <article><h3>SearchInput</h3><SearchInput v-model="search" placeholder="搜索组件…" /><small>当前输入：{{ search || "无" }}</small></article>
        <article class="component-actions">
          <h3>Dialog</h3>
          <BaseButton variant="secondary" @click="dialogOpen = true">打开弹窗</BaseButton>
          <BaseButton variant="danger" @click="confirmOpen = true">二次确认</BaseButton>
        </article>
      </div>
    </section>

    <BaseDialog :open="dialogOpen" title="通用弹窗" @close="dialogOpen = false">
      <p>标题、内容区和操作区已经按统一结构封装。</p>
      <template #actions><BaseButton @click="dialogOpen = false">知道了</BaseButton></template>
    </BaseDialog>
    <ConfirmDialog :open="confirmOpen" @close="confirmOpen = false" @confirm="confirmOpen = false" />
  </div>
</template>
