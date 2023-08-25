<template>
  <div>
    <h2>子组件</h2>
    <ol>
      <li>姓名：{{ name }}</li>
      <li>年龄：{{ age }}</li>
      <li>
        爱好：
        <p v-for="(hobbyItem,idx) in hobby" :key="idx">{{ hobbyItem }}</p>
      </li>
    </ol>
    <button class="btn" @click="changeName">修改name</button>
  </div>
</template>

<script lang="ts" setup>
interface PropsType {
  name: string,
  age: number,
  hobby: string[]
}

// 通过 interface 定义类型
// const props = defineProps<PropsType>()

// 通过字面量定义类型
/*const props = defineProps<{
  name: { type: string, required: true },
  age: { type: number },
  hobby: { type: string[] }
}>()*/

// 使用 withDefaults 编译器宏 定义默认值
const props = withDefaults(defineProps<PropsType>(), {
  name: '匿名用户',
  age: 99
})

interface EmitType {
  (e: 'changeName', name: string): void,
}

const emit = defineEmits<EmitType>()


const changeName = () => {
  emit('changeName','李四强')
}

</script>

<style scoped>

</style>
