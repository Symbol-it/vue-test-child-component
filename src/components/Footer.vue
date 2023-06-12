<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
<template>
  <span id="footer">{{ msg }}</span>
</template>