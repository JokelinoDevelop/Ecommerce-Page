<template>
    <div class="flex mt-3 justify-between rounded-lg items-center py-4 px-5 bg-lightGrayishBlue">
        <img class="hover:cursor-pointer" src="@/assets/icon-minus.svg" alt="" @click.prevent="substractQuantity">
        <p class="font-[700] text-black">{{ selectedProduct.quantity }}</p>
        <img class="hover:cursor-pointer" src="@/assets/icon-plus.svg" alt="" @click.prevent="addQuantity">
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore();

const selectedProduct = productStore.getSelectedProduct;

const substractQuantity = () => {
    if (selectedProduct.quantity < 2) {
        selectedProduct.quantity = 1
        return
    }
    selectedProduct.quantity--
}

const addQuantity = () => {
    selectedProduct.quantity++
}

</script>

