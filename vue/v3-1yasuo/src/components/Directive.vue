<template>
  <div>
    <h2>自定义指令</h2>
    <input type="text" v-focus>
    <button v-color:selfColor="{color:'red'}">指令按钮</button>
  </div>
</template>

<script lang="ts" setup>
const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

const vColor = {
  // el: 使用指定的当前 html 元素
  // binding：包含了 oldValue 和 当前 value ，动态的参数 等等
  created(el,binding,vnode,prevVnode){
    console.log('created', el, binding, vnode, prevVnode)
  },
  mounted(el, binding, vnode, prevVnode) {
    const {value} = binding
    const {color} = value
    el.style.color = color
    console.log('mounted', el, binding, vnode, prevVnode)
  }
}
</script>

<style scoped>

</style>
