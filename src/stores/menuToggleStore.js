import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuToggleStore = defineStore('menu', () => {
  const menu = ref(false)
  const cart = ref(false)
  const galleryPop = ref(false)

  return { menu, cart, galleryPop }
})
