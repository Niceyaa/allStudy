<template>
  <div>
    <h3>SuspenseChild01</h3>
    <hr/>
    <p>当前num:{{num}}</p>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue'

let num = ref<number>(1000)

onMounted(()=>{
  setTimeout(()=>{
    num.value = 3000
  },3000)
})

</script>

<style scoped>

</style>
