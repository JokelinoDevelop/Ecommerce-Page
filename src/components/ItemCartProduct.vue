<template>
    <div class="flex justify-between items-center gap-4">
        <div class="flex items-center gap-4">
            <img :src="props.item.thumbnailImages[0].src" class="w-16 rounded-md shadow-md">
            <p class="text-darkGrayishBlue">{{ props.item.name }}</p>

        </div>

        <div class="flex items-center justify-center">
            <div>
                <p class="text-darkGrayishBlue">${{ calculatedPrice }}.00 x {{ props.item.quantity }}</p>
                <p class="font-[700] text-black block">${{ itemPrice }}.00</p>
            </div>

            <img class="hover:cursor-pointer ml-4" src="@/assets/icon-delete.svg" alt="" @click="deleteItem(props.item.id)">
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useItemCartStore } from '@/stores/itemCartStore';

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
