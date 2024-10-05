<script setup lang="ts">
import { ref } from 'vue'

import { SOMETHING } from '../something'

const v = ref(SOMETHING)
</script>

<template>
  <div>
    {{ v }}
  </div>
</template>
