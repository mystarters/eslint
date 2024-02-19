<script setup lang="ts">
// const emit = defineEmits<{
//   // 'update:modelValue': () => void
//   (event: 'update:modelValue'): void
// }>()

const emit = defineEmits<{
  'update:modelValue': () => void
}>()
</script>

<template>
  <div @click="emit('update:modelValue')">
    1
  </div>
</template>
