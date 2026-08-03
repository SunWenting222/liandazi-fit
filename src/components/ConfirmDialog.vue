<script setup>
import BaseButton from "./BaseButton.vue";
import BaseDialog from "./BaseDialog.vue";

defineProps({ open: Boolean });
defineEmits(["close", "confirm"]);
</script>

<template>
  <BaseDialog :open="open" title="确认执行此操作？" @close="$emit('close')">
    <p>这是一个通用二次确认组件，业务内容可在后续替换。</p>
    <template #actions>
      <BaseButton variant="secondary" @click="$emit('close')">取消</BaseButton>
      <BaseButton variant="danger" @click="$emit('confirm')">确认</BaseButton>
    </template>
  </BaseDialog>
</template>
