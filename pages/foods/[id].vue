<template>
    <main class="max-w-screen-xl mx-auto px-6 my-16">
        <BackRoute />
        <span
            class="bg-red-100 border border-red-500 rounded-full text-primary relative top-32 text-sm poppins px-4 py-1 inline-block mb-4 w-max">10
            min
        </span>
        <div v-if="foods">
            <div v-for="food in filteredFoods" :key="food.id" class="flex flex-col justify-center items-center ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

                    <!-- Left side -->

                    <div class="order-2 md:order-1 lg:order-1 flex flex-col justify-center">

                        <h1
                            class="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
                            {{ food.title }}</h1>
                        <p
                            class="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
                            {{ food.description }}</p>


                        <button type="button"
                            class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-max my-16">
                            <Bookmark class="inline text-lg" /> &nbsp; &nbsp; Add Bookmark
                        </button>
                    </div>

                    <!-- Right side -->
                    <div class="order-1 md:order-2 lg:order-2 flex flex-col">

                        <Heart class="text-primary text-4xl self-end " />

                        <img src="/home/neocipher/Documents/vueProjects/foodopiaClient/public/assets/images/breakfast4.png"
                            class="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                    </div>
                </div>

            </div>
            <!-- <div class="w-full h-px bg-gray-200 mx-auto my-8"></div> -->
            <Carousel :images="images" />
            <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
            <Ingredients />
            <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
            <Instructions />
            <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>


        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BackRoute from '~/components/Food/BackRoute.vue';
import Bookmark from '~/components/icons/Bookmark.vue';
import Heart from '~/components/icons/Heart.vue';
import Ingredients from '~/components/Food/Ingredients.vue';
import Instructions from '~/components/Food/Instructions.vue';
import Carousel from '~/components/Food/Carousel.vue';

const quantity = ref(1);
const disabled = ref(false);
const { params } = useRoute();
const router = useRouter();
const foods = ref([
    {
        "id": 1,
        "image": "./assets/images/breakfast1.png",
        "title": "shiro wot",
        "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it. delicious common food for the common people of ethiopia and it is so easy to prepare it. delicious common food for the common people of ethiopia and it is so easy to prepare it. delicious common food for the common people of ethiopia and it is so easy to prepare it.",
        "price": 60,
        "foodType": "Lunch"
    },
    {
        "id": 2,
        "image": "./static/assets/images/breakfast1.png",
        "title": "shiro wot",
        "description": "delicious common food for the common people of ethiopia and it is so easy to prepare it.delicious common food for the common people of ethiopia and it is so easy to prepare it. delicious common food for the common people of ethiopia and it is so easy to prepare it. delicious common food for the common people of ethiopia and it is so easy to prepare it. delicious common food for the common people of ethiopia and it is so easy to prepare it.",
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


])
const images = ref([
    {
        url: "/assets/images/additional1.jpg"
    },
    {
        url: "/assets/images/additional2.jpg"
    },
    {
        url: "/assets/images/breakfast2.png"
    },
    {
        url: "/assets/images/breakfast3.png"
    },
    {
        url: "/assets/images/breakfast4.png"
    },
])
const filteredFoods = computed(() => {
    return foods.value.filter(item => item.id == params.id);
});

const calculatePrice = computed(() => {
    const food = filteredFoods.value[0];
    return food ? food.price * quantity.value : 0;
});

const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const addToCart = () => {
    const food = filteredFoods.value[0];
    if (food) {
        food.quantity = quantity.value;
        food.price = food.price * quantity.value;
        handleOrder(food);
        disabled.value = true;
        swal("Wow!!!", "Your order has been added to the cart", "success");
        router.push('/orders');
        console.log(food);
    }
};

</script>

<style scoped>
/* Add any additional styles here */
</style>