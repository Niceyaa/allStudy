<template>
  <div class="outer">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <MyModal/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyModal from '../component-child/MyModal.vue'
</script>

<style scoped>
.outer {
  transform: translateX(100px);
  transition: all 30s ease;
}
</style>
