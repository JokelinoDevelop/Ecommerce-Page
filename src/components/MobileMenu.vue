<template>
    <transition name="slide">
        <div v-if="screenSize < 1024" class="p-7 fixed inset-y-0 left-0 z-50 bg-white w-[70%] shadow-lg">
            <img @click.prevent="menu = false" class="mb-11 hover:cursor-pointer" src="@/assets/icon-close.svg" alt="">
            <div class="grid gap-6">
                <router-link @click="menu = false" v-for="link in links" :key="link" :to="{ path: `/${link}` }">
                    <p class="font-[700] text-xl hover:cursor-pointer hover:text-orange transition-all duration-300">{{
                        link }}</p>
                </router-link>
            </div>

        </div>
    </transition>
</template>

<script setup>
import { useMenuToggleStore } from '@/stores/menuToggleStore';
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = useMenuToggleStore()

const { menu } = storeToRefs(store)

const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];

const screenSize = ref(0)

onMounted(() => {
    screenSize.value = window.innerWidth
})

window.addEventListener('resize', () => {
    screenSize.value = window.innerWidth
})

</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
