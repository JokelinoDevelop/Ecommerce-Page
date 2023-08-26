import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useItemCartStore = defineStore('itemCart', () => {
  const cartItems = ref([])

  const addItem = (item) => {
    cartItems.value.push(item)
  }

  const deleteItem = (itemId) => {
    const index = cartItems.value.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
    }
  }

  return { cartItems, addItem, deleteItem }
})
