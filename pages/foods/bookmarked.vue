<template>
    <div class=" my-16 py-12 max-w-screen-xl mx-auto px-6">
        <h3 class="text-center  text-2xl ">Your Bookmarked Recipes</h3>
        <div class="mt-24">

            <div v-if="loading" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                <Skeleton v-for="n in 9" :key="n" />
            </div>
            <div v-else class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                <FoodItem v-for="item in foods" :key="item.id" v-bind="item" />
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