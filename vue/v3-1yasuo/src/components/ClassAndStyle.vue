<template>
  <div>
    <h1>绑定class和style</h1>
    <div :class="{active:isActive}">class方式一 动态属性</div>
    <div class="static" :class="{active:isActive}">class方式二 静态class和动态class共存</div>
    <div :class="classObj">class方式三 动态对象</div>
    <div :class="classComputed">class方式四 computed</div>
    <div :class="['active','static']">class方式五 数组</div>
    <div :class="[isActive?'active':'','static']">class方式六 数组三元表达式</div>
    <div :class="[{active:isActive},'static']">class方式七 数组嵌套对象</div>

    <ul ref="ulRef">
      <template v-for="item in items" :key="item.id">
        <li>{{ item.msg }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>

  </div>
</template>

<script lang="ts" setup>

import {computed, reactive, ref,onMounted} from 'vue'

const ulRef = ref()

onMounted(()=>{
  console.log('ref',ulRef.value)
})

const isActive = ref<boolean>(true)
const hasError = ref<boolean>(true)

const classObj = reactive({
  active: true,
  static: false
})

const classComputed = computed(() => (
    {
      active: isActive.value,
      static: hasError.value
    }
))

const items = reactive([
  {id:1,msg:'1'},
  {id:2,msg:'2'},
  {id:3,msg:'3'},
  {id:4,msg:'4'},
])

</script>

<style scoped lang="less">
.active {
  color: #42b983;
  font-size: 20px;
  font-weight: bold;
}

.static {
  font-style: italic;
}

</style>
