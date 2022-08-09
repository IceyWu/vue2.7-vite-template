<template>
  <div class="flex flex-col justify-center items-center">
    <div flex justify-center items-center>
      <h1>
        {{ msg }}
      </h1>
      <div
        class="i-twemoji-cactus text-5xl ml-3 hover:i-twemoji-bright-button"
      />
    </div>
    <h3>Try to hover the emoji</h3>

    <p class="text-green-600">
      piniaData
      <span text-yellow-600 font-bold>{{ animalIndex }}</span>
    </p>
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
