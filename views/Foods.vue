<template>
    <section class="my-12 max-w-screen-xl mx-auto px-6">
        <!-- food Menu tab -->
        <div class="flex items-center justify-center space-x-6">
            <p :class="menuTab === 'Breakfast' ? 'active_menu_tab poppins bg-primary' : 'menu_tab poppins'"
                @click="handleMenuTabs('Breakfast')">Breakfast</p>
            <p :class="menuTab === 'Lunch' ? 'active_menu_tab poppins bg-primary' : 'menu_tab poppins'"
                @click="handleMenuTabs('Lunch')">Lunch</p>
            <p :class="menuTab === 'Dinner' ? 'active_menu_tab poppins bg-primary' : 'menu_tab poppins'"
                @click="handleMenuTabs('Dinner')">Dinner</p>
        </div>

        <!-- all foods -->
        <div v-if="loading" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
            <Skeleton v-for="n in 3" :key="n" />


        </div>
        <div v-else class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
            <FoodItem v-for="item in filteredFoods" :key="item.id" v-bind="item" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import FoodItem from '../components/Showcase/FoodItem.vue';
import Skeleton from '../components/Showcase/Skeleton.vue';
const foods = ref([{
    "id": 1,
    "image": "./assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
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
    "foodType": "Breakfast"
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
    "foodType": "Breakfast"
},
{
    "id": 6,
    "image": "./static/assets/images/breakfast1.png",
    "title": "shiro wot",
    "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.",
    "price": 60,
    "foodType": "Breakfast"
}


])

const menuTab = ref('Breakfast');
const loading = ref(false);

onMounted(() => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 3000);
});

const handleMenuTabs = (type) => {
    menuTab.value = type;
};

const filteredFoods = computed(() => {
    return foods.value.filter((item) => item.foodType === menuTab.value);
});


</script>

<style scoped>
/* Add your styles here */
</style>