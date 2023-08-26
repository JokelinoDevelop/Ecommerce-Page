<template>
    <button
        class="mt-4 flex justify-center items-center text-center gap-3 w-full bg-orange hover:bg-black py-3 rounded-lg shadow-md transition-all duration-300">
        <img class="w-[1.1rem]" src="@/assets/icon-cart.svg" alt="">
        <p class="text-white font-[700]">
            <slot></slot>
        </p>
    </button>
</template>

<script setup>

</script>
