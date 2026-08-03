<script setup>
defineProps({ modelValue: Boolean, disabled: Boolean, label: String });
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="switch-row">
    <button
      class="switch"
      :class="{ 'is-on': modelValue }"
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span />
    </button>
    <span>{{ label }}</span>
  </label>
</template>
