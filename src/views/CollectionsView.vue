<template>
    <div class="grid min-[1600px]:grid-cols-4 md:grid-cols-2 md:mb-4 grid-cols-1 gap-4 items-center h-full">
        <template v-for="product in products" :key="product.id">
            <CollectionsItem :product="product" :imageThumb="product.images[0]" />
        </template>
    </div>
</template>

<script setup>
import CollectionsItem from '@/components/CollectionsItem.vue'
import { useProductStore } from '@/stores/productStore.js'

const store = useProductStore()

const { products } = store

</script>

