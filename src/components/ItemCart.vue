<template>
    <transition name="slide">
        <div class="absolute top-3 bg-white z-[45] rounded-lg p-4">
            <p class="mb-3 font-[700]">Cart</p>
            <hr>
            <div class="mt-3 grid gap-2 max-h-[200px] overflow-y-auto pr-2"
                :class="{ 'py-12': cartItems.length < 1, 'py-4': cartItems.length > 0 }">
                <template v-if="cartItems.length > 0">
                    <div v-for="item in cartItems" :key="item.name">
                        <ItemCartProduct :item=item />
                    </div>
                </template>
                <p v-else class="font-[700] text-center text-darkGrayishBlue">Your cart is empty</p>
            </div>
            <CheckoutButton v-if="cartItems.length > 0">
                Checkout
            </CheckoutButton>
        </div>
    </transition>
</template>

<script setup>
import ItemCartProduct from '@/components/ItemCartProduct.vue';
import CheckoutButton from '@/components/CheckoutButton.vue';
import { useItemCartStore } from '@/stores/itemCartStore';
import { storeToRefs } from 'pinia';

const itemCartStore = useItemCartStore()

const { cartItems } = storeToRefs(itemCartStore)
</script>


<style scoped>
.slide-top-enter-active,
.slide-top-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-top-enter-from,
.slide-top-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.slide-top-enter-to,
.slide-top-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
