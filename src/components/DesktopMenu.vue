<template>
    <div class="flex items-center gap-6 ml-6 mt-2">
        <router-link to="/collections">
            <div class="relative">
                <p :class="styleText">Collections</p>
                <hr :class="styleHr" />
            </div>
        </router-link>

        <router-link to="/men">
            <div class="relative">
                <p :class="styleText">Men</p>
                <hr :class="styleHr" />
            </div>
        </router-link>

        <router-link to="/women">
            <div class="relative">
                <p :class="styleText">Women</p>
                <hr :class="styleHr" />
            </div>
        </router-link>

        <router-link to="/about">
            <div class="relative">
                <p :class="styleText">About</p>
                <hr :class="styleHr" />
            </div>
        </router-link>

        <router-link to="/contact">
            <div class="relative">
                <p :class="styleText">Contact</p>
                <hr :class="styleHr" />
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const styleText = ref('font-[700] text-md text-darkGrayishBlue hover:cursor-pointer hover:text-black transition-all duration-200 peer')
const styleHr = ref('absolute -bottom-9 h-[0.25rem] w-full bg-orange hidden peer-hover:block')
</script>

