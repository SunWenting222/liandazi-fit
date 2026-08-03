<script setup>
defineProps({
  variant: { type: String, default: "primary" },
  loading: Boolean,
  disabled: Boolean,
  type: { type: String, default: "button" },
});
</script>

<template>
  <button
    class="base-button"
    :class="`base-button--${variant}`"
    :type="type"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="button-spinner" aria-hidden="true" />
    <slot>{{ loading ? "处理中" : "按钮" }}</slot>
  </button>
</template>
