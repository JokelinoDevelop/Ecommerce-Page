<template>
    <div class="fixed inset-0 z-20 bg-black opacity-50"></div>
    <div class="absolute z-30">
        <div class="w-full flex justify-end">
            <img src="@/assets/icon-close-white.svg" class="w-[1.5rem] fill-orange mb-4 hover:cursor-pointer"
                @click="galleryPop = false">
        </div>

        <div class="lg:w-[37rem] relative lg:flex lg:flex-col lg:justify-center lg:items-center h-[32rem] z-10">
            <img :key="index" :src="currentImage" class="w-full max-h-full object-cover lg:rounded-xl">

            <img src="@/assets/icon-previous.svg"
                class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-full border-2 border-black hover:cursor-pointer"
                @click="prevImage">
            <img src="@/assets/icon-next.svg"
                class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white px-4 py-3 rounded-full border-2 border-black  hover:cursor-pointer"
                @click="nextImage">
        </div>

        <div class="flex justify-center gap-5 mt-4 items-center">
            <div v-for="image in thumnailImages" :key="image.src"
                class="relative lg:w-[5rem] rounded-xl border-2 border-transparent hover:border-orange transition-all duration-500 overflow-hidden">
                <img :src="image.src" class="w-full h-full" alt="" />
                <div @mouseover="index = image.index"
                    class="absolute inset-0 bg-white opacity-0 hover:opacity-60 transition-opacity"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMenuToggleStore } from '@/stores/menuToggleStore'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'

const productStore = useProductStore();

const selectedProduct = productStore.getSelectedProduct;

const store = useMenuToggleStore()

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
</script>
