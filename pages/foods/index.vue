<template>
    <div class=" my-16 py-12 max-w-screen-xl mx-auto px-6">
        <h3 class="text-center  text-2xl ">My Recipes</h3>
        <div class="mt-24">

            <div v-if="loading" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                <Skeleton v-for="n in 9" :key="n" />
            </div>
            <div v-else class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                <FoodItem v-for="item in foods" :key="item.id" v-bind="item" />
            </div>
            <div class="flex mt-12 justify-center">
                <!-- Previous Button -->
                <a href="#"
                    class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </a>
                <a href="#"
                    class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Skeleton from '~/components/Showcase/Skeleton.vue';
import FoodItem from '~/components/Showcase/FoodItem.vue';
const loading = ref(true)
const foods = ref([{
    "id": 1,
    "image": "./assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Lunch"
},
{
    "id": 2,
    "image": "./static/assets/images/breakfast3.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
},
{
    "id": 3,
    "image": "../static/assets/images/breakfast2.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Dinner"
},
{
    "id": 4,
    "image": "./static/assets/images/breakfast4.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
},
{
    "id": 5,
    "image": "./static/assets/images/breakfast5.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Lunch"
},
{
    "id": 6,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Dinner"
},
{
    "id": 1,
    "image": "./assets/images/breakfast3.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Lunch"
},
{
    "id": 2,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
},
{
    "id": 3,
    "image": "../static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Dinner"
},
{
    "id": 4,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
},
{
    "id": 5,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Lunch"
},
{
    "id": 6,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Dinner"
},
{
    "id": 1,
    "image": "./assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Lunch"
},
{
    "id": 2,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
},
{
    "id": 3,
    "image": "../static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Dinner"
},
{
    "id": 4,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
},
{
    "id": 5,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Lunch"
},
{
    "id": 6,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Dinner"
}])
onMounted(() => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 1500);

})


</script>

<style scoped></style>