<template>
  <div flex justify-center item-center>
    <img
      h-40
      w-40
      alt="Vue logo"
      :src="animalIndex === 1 ? animal1 : animal2"
    />
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { mainStore } from '/@/store/modules/app'
import animal1 from '/@/assets/animal1.png'
import animal2 from '/@/assets/animal2.png'

const store = mainStore()
const { animalIndex } = storeToRefs(store)
</script>

<style scoped></style>
