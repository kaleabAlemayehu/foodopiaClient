<template>
    <div class="flex pb-8">
        <!-- logo -->
        <div class="flex flex-grow">
            <Brand />
        </div>
        <!-- footer links -->
        <div class="flex space-x-12">
            <div class="flex flex-col space-y-2">
                <span v-for="item in footerLinks1" :key="item.id" class="text-white poppins">{{ item.text }}</span>
            </div>
            <div class="flex flex-col space-y-2">
                <span v-for="item in footerLinks2" :key="item.id" class="text-white poppins">{{ item.text }}</span>
            </div>
            <div class="flex flex-col space-y-2">
                <span v-for="item in footerLinks3" :key="item.id" class="text-white poppins">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Brand from '../Form/Brand.vue';
import { reactive, computed } from 'vue';

const footerLinks = reactive([
    { id: 1, text: 'About Online Food' },
    { id: 2, text: 'Read our blog' },
    { id: 3, text: 'Sign up to Enjoy More' },
    { id: 4, text: 'Add your Recipe' },
    { id: 5, text: 'Get Help' },
    { id: 6, text: 'Ask any question' },
    { id: 7, text: 'Suggest Modification' },
    { id: 8, text: 'Contact' },
    { id: 9, text: 'Facebook' },
    { id: 10, text: 'Instagram' },
    { id: 11, text: 'Twitter' },
    { id: 12, text: 'Youtube' }
])

const footerLinks1 = computed(() => {
    return footerLinks.slice(0, 4);
});
const footerLinks2 = computed(() => {
    return footerLinks.slice(4, 8);
})
const footerLinks3 = computed(() => {
    return footerLinks.slice(8, 12);
})
</script>

<style scoped>
/* Add any additional styles here */
</style>