<template>
    <div class="grid min-[1600px]:grid-cols-4 lg:gap-4 md:grid-cols-2 grid-cols-1 gap-4 items-center h-full">
        <template v-for="product in filteredProducts" :key="product.id">
            <CollectionsItem :product="product" :imageThumb="product.images[0]" />
        </template>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import CollectionsItem from '@/components/CollectionsItem.vue'
import { useProductStore } from '@/stores/productStore.js'

const store = useProductStore()
const { products } = store

const filteredProducts = computed(() => {
    return products.filter(product => product.category === 'Woman')
})
</script>
