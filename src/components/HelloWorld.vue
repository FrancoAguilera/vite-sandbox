<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="text-center">
    <button type="button" class="btn btn-success">Success</button>
  </div>
</template>

<style scoped>
.unused-class {
  color: #888;
}
</style>
