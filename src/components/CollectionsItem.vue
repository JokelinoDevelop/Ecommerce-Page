<template>
    <div class="relative bg-white rounded-xl shadow-lg hover:cursor-pointer min-[1600px]:hover:scale-105 transition-all duration-300 h-full"
        @click.prevent="navigateToCategoryItem(props.product)">
        <img :src="props.imageThumb" alt="" class="w-[100%] object-cover lg:rounded-t-xl border-b-4 border-orange">


        <div class="px-6 py-4 text-lg text-veryDarkBlue font-[700] flex flex-col gap-2 justify-between">
            <p>{{ props.product.name }}</p>
            <div class="flex justify-between items-center w-full">
                <p class="text-4xl text-orange">${{ calculatePrice(props.product) }}.00</p>
                <p class="text-2xl text-grayishBlue line-through">${{ props.product.price }}.00</p>
            </div>

        </div>


    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useProductStore } from '@/stores/productStore'

const router = useRouter()
const store = useProductStore()

const { selectProduct, calculatePrice } = store

const route = useRoute()

const props = defineProps({
    product: Object,
    imageThumb: String,
})

const navigateToCategoryItem = (product) => {
    selectProduct(product)

    router.push({ path: `${route.path}/${product.id}` })

}

</script>

