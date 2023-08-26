<template>
    <button @click.prevent="addProduct(selectedProduct)"
        class="mt-4 flex justify-center items-center text-center gap-3 w-full bg-orange hover:bg-black py-3 rounded-lg shadow-md transition-all duration-300">
        <img class="w-[1.1rem]" src="@/assets/icon-cart.svg" alt="">
        <p class="text-white font-[700]">
            <slot></slot>
        </p>
    </button>
</template>

<script setup>
import { useItemCartStore } from '@/stores/itemCartStore';
import { useProductStore } from '@/stores/productStore'
import cloneDeep from 'lodash/cloneDeep';

const productStore = useProductStore();

const { selectedProduct } = productStore

const itemCartStore = useItemCartStore()

const { addItem, cartItems } = itemCartStore

const addProduct = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id)

    if (existingProduct) {
        existingProduct.quantity += product.quantity
    } else {
        addItem(cloneDeep(product))
    }
}
</script>
