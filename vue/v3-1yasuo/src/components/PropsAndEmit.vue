<template>
  <div>PropsAndEmit</div>
  <PropsChild :name="propsName" :age="propsAge" :hobby="propsHobby" @changeName="changeName"></PropsChild>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue"
import PropsChild from '../component-child/PropsChild.vue'

const propsName = ref<string>('张三丰')
const propsAge = ref<number>(99)
const propsHobby = reactive<string[]>([
    "唱",
    "跳",
    "rap",
    "打篮球",
])

const changeName = (name:string)=>{
  propsName.value = name
}

</script>

<style scoped>

</style>
