<script setup lang="ts">
  defineProps<{ msg: string }>()
</script>

<template>
  <div class="text-center">
    <button class="btn btn-danger">test registry</button>
  </div>
  <br>
  <div class="text-center">
    <button type="button" class="my-btn">Success</button>
  </div>
</template>

<style>

.my-class {
  color: red;
  background: pink;
}

.my-btn {
  @extend .my-class;
}

</style>
