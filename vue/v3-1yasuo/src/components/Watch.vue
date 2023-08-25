<template>
  <div class="watch">
    <h2>Watch 侦听器</h2>
    <p>
      Ask a yes/no question:
      <input v-model="question"/>
    </p>
    <p>{{ answer }}</p>
    <h2>修改xy的值</h2>
    <button class="btn" @click="addX">x++</button>
    <button class="btn" @click="decreaseY">y--</button>
    <h2>修改obj对象的值</h2>
    <button class="smallBtn" @click="changeObj">修改obj.count</button>
  </div>
</template>

<script lang="ts" setup>

import {reactive, ref, watch,watchEffect} from 'vue'

/*
* 总结：
* watch(attr,cb,options)：可以监听单个属性，多个属性，getter函数，对象等
* watchEffect：会追踪到回调函数中书友的响应式属性进行监听，默认会执行一次
* 共同点：都会返回一个函数，可以通过返回回来的函数停止监听，当数据发生改变的时候，监听器和页面刷新会同时触发，在回调函数访问的DOM是更新之前的，如果希望拿到更新之后的，可以通过配置 flush: 'post' 来获取到新的DOM，watchEffect 还可以通过使用 watchPOSTEffect 这个监听器来进行监听
* */

const question = ref<string>('')
const answer = ref<string>('Questions usually contain a question mark. ;-')

const x = ref(0)
const y = ref(0)
const z = ref(0)

const obj = reactive({
  count: 0,
  zs: {
    name: 'zs'
  }
})

// 单个ref
watch(question, async (newV, oldV) => {
  if (newV.indexOf('?')) {
    answer.value = "Thinking..."
  }
  try {
    const res = await fetch('https://yesno.wtf/api')
    answer.value = (await res.json()).answer
    console.log('res', res)
  } catch (err) {
    answer.value = 'Error! Could not reach the API. ' + err
  }
})

// getter函数  sum 参数表示新的getter函数返回的值，old表示上一个值
const unWatch = watch(() => x.value + y.value, (sum, old) => {
  console.log('getter函数', sum, old)
})

// 多个来源组成的数组 当其中一个值改变之后  都会触发该回调函数
watch([x, y, z], () => {
  console.log('多个来源组成的数组', x.value, y.value, z.value)
})

// 监听响应式对象属性
watch(() => obj.count, (newV) => {
  console.log('监听响应式对象', newV)
})

// 监听对象
watch(()=>obj.zs,()=>{
  console.log('直接监听对象')
},{
  deep: true,
})

// watchEffect  watchEffect 会自动执行一次  当回调函数中的依赖项有更改的时候 都会调用该回调 即他会追踪会调用用到的所有响应式属性
watchEffect(()=>{
  let sum = x.value+y.value
  console.log('sum',sum,obj.count)
})

// 修改xy
const addX = () => {
  x.value++
  unWatch()
}
const decreaseY = () => {
  y.value--
}

// 修改obj
const changeObj = () => {
  obj.count++
  obj.zs.name = 'ls'
}


</script>
<style scoped lang="less">
.btn {
  width: 180px;
  height: 80px;
  border-radius: 40px;
  text-align: center;
  line-height: 80px;
  background: #42b983;
  border: none;
  font-size: 40px;
  color: antiquewhite;
}

.smallBtn {
  width: 180px;
  height: 80px;
  border-radius: 40px;
  text-align: center;
  line-height: 80px;
  background: #42b983;
  border: none;
  font-size: 20px;
  color: antiquewhite;
}

</style>
