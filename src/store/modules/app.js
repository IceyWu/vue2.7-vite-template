import { defineStore } from 'pinia'

export const mainStore = defineStore({
  id: 'app',
  state: () => ({
    animalIndex: 1,
  }),
  getters: {
    getAnimalIndex() {
      return this.animalIndex
    },
  },
  actions: {
    changeAnimalIndex(index) {
      this.animalIndex = index
    },
  },
})
