<template>
    <div class="lg:relative lg:flex lg:justify-center lg:items-center lg:gap-10">
        <ItemGallery class="flex-1 flex flex-col justify-center items-center" />
        <ItemDescription class="relative flex-1 max-w-[1000px]" />
        <ItemGalleryPop v-if="galleryPop" />

    </div>
</template>

<script setup>
import ItemGallery from '@/components/ItemGallery.vue'
import ItemDescription from '@/components/ItemDescription.vue'
import ItemGalleryPop from '@/components/ItemGalleryPop.vue'
import { useMenuToggleStore } from '@/stores/menuToggleStore'
import { storeToRefs } from 'pinia'

const store = useMenuToggleStore()

const { galleryPop } = storeToRefs(store)

</script>
