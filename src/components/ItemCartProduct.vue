<template>
    <div class="flex justify-between items-center">
        <img :src="img.src" class="w-16 rounded-md shadow-md">
        <div>
            <p class="text-darkGrayishBlue">{{ props.item.name }}</p>
            <p class="text-darkGrayishBlue">${{ calculatedPrice }}.00 x {{ props.item.quantity }} <span
                    class="font-[700] text-black">${{ itemPrice }}.00</span></p>
        </div>
        <img class="hover:cursor-pointer" src="@/assets/icon-delete.svg" alt="" @click="deleteItem(props.item.id)">
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useItemCartStore } from '@/stores/itemCartStore';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore()

const { selectedProduct } = productStore

const img = computed(() => {
    return selectedProduct.thumbnailImages[0]
})

console.log(img.value)

const store = useItemCartStore()

const { deleteItem } = store

const props = defineProps({
    'item': Object,
})

const calculatedPrice = computed(
    () =>
        props.item.price -
        (props.item.price * props.item.salePercentage) / 100
)

const itemPrice = computed(() => {
    return calculatedPrice.value * props.item.quantity
})

</script>
