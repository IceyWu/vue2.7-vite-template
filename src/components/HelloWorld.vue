<template>
  <div class="flex flex-col justify-center items-center">
    <h1>{{ msg }}</h1>
    <p>当前动物索引{{ animalIndex }}</p>
    <button
      @click="changeIndex"
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    >
      Click me
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { mainStore } from '/@/store/modules/app'

const store = mainStore()
const { animalIndex } = storeToRefs(store)
defineProps({
  msg: String,
})

const flag = ref(true)
const changeIndex = () => {
  flag.value = !flag.value
  if (flag.value) {
    store.changeAnimalIndex(1)
  } else {
    store.changeAnimalIndex(2)
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
