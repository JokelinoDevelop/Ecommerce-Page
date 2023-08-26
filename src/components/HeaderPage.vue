<template>
    <div class="relative flex justify-between items-center px-6 py-4 border-b-2" :class="{ 'py-8': screenSize > 1024 }">
        <div class="left flex gap-5 items-center">
            <img v-if="screenSize < 1024" class="hover:cursor-pointer" src="@/assets/icon-menu.svg" alt=""
                @click.prevent="menu = true">
            <router-link :to="{ path: '/collections' }"><img src="@/assets/logo.svg" alt=""
                    class="hover:cursor-pointer"></router-link>

            <DesktopMenu v-if="screenSize > 1024" />
        </div>

        <div class="right flex gap-5 items-center">
            <div class="relative">
                <img src="@/assets/icon-cart-gray.svg" class="hover:cursor-pointer" @click.prevent="cart = !cart">
                <p v-if="cartItems.length > 0"
                    class="absolute bg-orange text-[12px] rounded-full text-white top-0 w-[22px] text-center right-0 -translate-y-[70%] translate-x-[35%]">
                    {{ cartItems.length }}</p>
            </div>

            <img src="@/assets/image-avatar.png" alt=""
                class="w-[2.3rem] border-2 border-transparent rounded-full hover:border-orange transition-all duration-300">
        </div>
    </div>
    <ItemCart v-if="screenSize > 1024" :class="'mt-16 right-0 translate-y-[0%] shadow-xl w-[30%]'" v-show="cart" />

    <hr v-if="screenSize > 1024" class="mb-10 opacity-5">
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMenuToggleStore } from '@/stores/menuToggleStore';
import { useItemCartStore } from '@/stores/itemCartStore';
import { storeToRefs } from 'pinia'
import DesktopMenu from '@/components/DesktopMenu.vue'
import ItemCart from '@/components/ItemCart.vue'

const itemCartStore = useItemCartStore()

const { cartItems } = storeToRefs(itemCartStore)

const store = useMenuToggleStore()

const { menu, cart } = storeToRefs(store)

const screenSize = ref(0)

onMounted(() => {
    screenSize.value = window.innerWidth
})

window.addEventListener('resize', () => {
    screenSize.value = window.innerWidth
})

</script>
