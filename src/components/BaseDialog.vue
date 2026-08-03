<script setup>
defineProps({ open: Boolean, title: { type: String, default: "弹窗标题" } });
defineEmits(["close"]);
</script>

<template>
  <div v-if="open" class="dialog-backdrop" @click.self="$emit('close')">
    <section class="dialog" role="dialog" aria-modal="true" :aria-label="title">
      <header><h3>{{ title }}</h3></header>
      <div class="dialog-body"><slot /></div>
      <footer><slot name="actions" /></footer>
    </section>
  </div>
</template>
