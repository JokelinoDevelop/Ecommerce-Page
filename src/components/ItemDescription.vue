<template>
    <div class="px-8 py-6">
        <p class="text-orange font-[700] tracking-widest text-sm mb-2 lg:mb-4">SNEAKER COMPANY</p>
        <h1 class="text-black text-4xl font-[700] mb-2 lg:text-6xl lg:mb-6">{{ selectedProduct.name }}</h1>

        <p class="leading-6 text-base text-left text-darkGrayishBlue tracking-wide mb-6 lg:text-lg">{{
            selectedProduct.itemDesc
        }}
        </p>

        <div class="flex justify-between items-center lg:mb-6 lg:flex-col lg:justify-start lg:items-start">
            <div class="flex justify-between items-center gap-1 lg:mb-1">
                <p class="font-[700] text-3xl">${{ calculatedPrice }}.00</p>
                <p class="ml-2 px-[0.4rem] py-1 bg-[#ffedd5] rounded-md text-orange text-[1rem] font-[700]">
                    {{ selectedProduct.salePercentage }}%</p>
            </div>

            <p class="font-[700] text-grayishBlue line-through">${{ selectedProduct.price }}.00</p>
        </div>

        <div class="lg:flex justify-center items-center gap-4">
            <QuantityButton class="flex-1" />

            <AddToCart class="lg:max-w-[65%]" @click="cart = true">
                Add to Cart
            </AddToCart>
        </div>


    </div>
</template>

<script setup>
import QuantityButton from '@/components/QuantityButton.vue'
import AddToCart from '@/components/AddToCart.vue'
import { useMenuToggleStore } from '@/stores/menuToggleStore'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'

const cartStore = useMenuToggleStore()

const { cart } = storeToRefs(cartStore)

const productStore = useProductStore();

const { calculatedPrice } = productStore

const selectedProduct = productStore.getSelectedProduct;


</script>
