<template>
    <div class="relative lg:flex lg:flex-col lg:max-w-[80%] lg:m-auto min-h-screen">
        <MobileMenu v-show="menu" />
        <HeaderPage />
        <RouterView />
    </div>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue"
import MobileMenu from '@/components/MobileMenu.vue'

import { useMenuToggleStore } from '@/stores/menuToggleStore';
import { storeToRefs } from 'pinia'

const store = useMenuToggleStore()

const { menu } = storeToRefs(store)


</script>
