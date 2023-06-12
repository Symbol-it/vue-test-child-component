<script setup lang="ts">
defineProps<{
  myMsg: string
}>()
</script>
<template>
  <span id="footer">{{ myMsg }}</span>
</template>