<script setup>
defineProps({
  modelValue: { type: String, default: "" },
  options: { type: Array, default: () => [] },
  disabled: Boolean,
  label: { type: String, default: "请选择" },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="field">
    <span>{{ label }}</span>
    <select
      :value="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled>请选择一个选项</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>
