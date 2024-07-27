<script setup lang="ts">
// import { f } from './bad-import-declaration'

const badEmit = defineEmits<{
  'update:modelValue': () => true
  // (e: 'update:modelValue'): void
}>()

type E = {
  'update:modelValue': () => true
}

type F = {
  (e: 'update:modelValue'): void
}

// const goodEmit = defineEmits<{
//   (e: 'update:modelValue'): void
// }>()

// const foo = 'baz'
//
// const emit = defineEmits<{
//   // 'update:modelValue': () => void
//   (event: 'update:modelValue'): void
// }>()

// console.log('f', f)
</script>

<template>
  <div>1</div>
  <!-- <div @click="goodEmit('update:modelValue')"> -->
  <!-- 1 -->
  <!-- </div> -->
</template>
