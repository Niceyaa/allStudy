<template>
  <div>
    <h2>Suspense</h2>
    <AsyncSuspenseChild01></AsyncSuspenseChild01>

  </div>
</template>

<script lang="ts" setup>
import Loading from '../component-child/Loading.vue'
import {defineAsyncComponent} from 'vue'
const AsyncSuspenseChild01 = defineAsyncComponent({
  loader: ()=>import('../component-child/SuspenseChild01.vue'),
  loadingComponent: Loading,
  timeout: 4000
})
console.log(AsyncSuspenseChild01);
</script>

<style scoped>

</style>
