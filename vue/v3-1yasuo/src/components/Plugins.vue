<template>
  <div>
    <h2>插件</h2>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, getCurrentInstance} from 'vue'

const {appContext: {config: {globalProperties}}} = getCurrentInstance()

onMounted(() => {
  console.log('app', globalProperties.$translate('greetings.hello'))
})

</script>

<style scoped>

</style>
