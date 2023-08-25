<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <hr/>
  <h2>Name:{{ fullName }}</h2>
  <h4>firstName:{{ firstName }}</h4>
  <h4>lastName:{{ lastName }}</h4>
  <button @click="changeName('Bob Tom')">修改Name</button>
</template>

<script lang="ts" setup>

import {reactive, computed, ref} from 'vue'

interface authorType {
  name: string,
  books: string[]
}

const author = reactive<authorType>({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const firstName = ref<string>('John')
const lastName = ref<string>('Doe')


const publishedBooksMessage = computed<string>(() => {
  return author.books.length > 0 ? 'Yes' : "No"
})

const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value
  },
  set(newValue: string) {
    console.log('newValue', newValue);
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

const changeName = (name: string) => {
  console.log('name', name)
  fullName.value = name
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
