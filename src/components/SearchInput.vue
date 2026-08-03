<script setup>
defineProps({ modelValue: { type: String, default: "" }, placeholder: String });
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="search-input">
    <span aria-hidden="true">⌕</span>
    <input
      type="search"
      :value="modelValue"
      :placeholder="placeholder || '搜索…'"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
