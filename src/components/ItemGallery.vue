<template>
    <div>
        <div
            class="w-full lg:w-[75%] relative lg:flex lg:flex-col lg:justify-center lg:items-center h-[23rem] overflow-hidden z-10 lg:h-[28rem]">
            <img @click="screenSize > 1024 ? galleryPop = true : galleryPop = false" :key="index" :src="currentImage"
                class="w-full max-h-full object-cover lg:rounded-lg lg:cursor-pointer">

            <img v-if="screenSize < 1024" src="@/assets/icon-previous.svg"
                class="absolute top-1/2 left-0 -translate-y-1/2 ml-6 bg-white px-4 py-3 rounded-full hover:cursor-pointer"
                @click="prevImage">
            <img v-if="screenSize < 1024" src="@/assets/icon-next.svg"
                class="absolute top-1/2 right-0 -translate-y-1/2 mr-6 bg-white px-4 py-3 rounded-full hover:cursor-pointer"
                @click="nextImage">
        </div>

        <div v-if="screenSize > 1024" class="flex justify-center gap-3 mt-4 items-center">
            <div v-for="image in thumnailImages" :key="image.src"
                class="relative lg:w-28 rounded-xl border-2 border-transparent hover:border-orange transition-all duration-500 overflow-hidden">
                <img :src="image.src" class="w-full h-full" alt="" />
                <div @click="index = image.index"
                    class="absolute inset-0 bg-white opacity-0 hover:opacity-60 transition-opacity"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import { useMenuToggleStore } from '@/stores/menuToggleStore'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'


const store = useMenuToggleStore()

const productStore = useProductStore();

const selectedProduct = productStore.getSelectedProduct;

const { galleryPop } = storeToRefs(store)

const images = computed(() => selectedProduct.images || [])

const thumnailImages = computed(() => selectedProduct.thumbnailImages || [])

const index = ref(0)

const currentImage = computed(() => {
    return images.value[index.value]
})

const prevImage = () => {
    index.value = (index.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
    index.value = (index.value + 1) % images.value.length;
};

const screenSize = ref(0)

onMounted(() => {
    screenSize.value = window.innerWidth
})

window.addEventListener('resize', () => {
    screenSize.value = window.innerWidth
})

</script>






