<template>
    <main class="max-w-screen-xl mx-auto px-6 my-16">
        <BackRoute />
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
                        <!-- 
                        Price and quantity 
                        <div class="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
                            <h1 class="text-3xl font-bold text-black poppins select-none">${ calculatePrice().toFixed(2)
                                }</h1>
                            Quantity 
                            <div class="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                                <AiOutlineMinus @click="decrementQuantity"
                                    class="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                                <span class="text-lg text-gray-700 poppins select-none">{{ quantity }}</span>
                                <AiOutlinePlus @click="incrementQuantity"
                                    class="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                            </div>
                        </div>
                        Add button
                        <div class="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                            <button :disabled="disabled" @click="addToCart" :class="{ 'opacity-30': disabled }"
                                class="flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">
                                <BsCart2 class="text-xl" />
                                <span>{{ disabled ? 'Added' : 'Add to Cart' }}</span>
                            </button>
                        </div>
                        -->
                    </div>

                    <!-- Right side -->
                    <div class="order-1 md:order-2 lg:order-2">
                        <img src="/home/neocipher/Documents/vueProjects/foodopiaClient/public/assets/images/breakfast4.png"
                            class="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                    </div>
                </div>
                <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
                <div class="mt-8 self-start ">
                    <h3 class="font-fancy text-3xl text-primary">Ingredients</h3>
                    <ul class="list-disc marker:text-gray-800 mt-4 ml-6 text-gray-800 marker:align-middle poppins">
                        <li class="pl-4">2-3 large eggs</li>
                        <li class="pl-4 mt-2">Salt, to taste</li>
                        <li class="pl-4 mt-2">Pepper, to taste</li>
                        <li class="pl-4 mt-2">1 tablespoon of butter or oil</li>
                        <li class="pl-4 mt-2">
                            Optional fillings: cheese, diced vegetables, cooked meats, herbs
                        </li>
                    </ul>
                </div>
                <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
                <div class="mt-8">
                    <h3 class="font-fancy text-3xl text-primary">Instructions</h3>
                    <ol class="marker:text-gray-800 marker:font-semibold marker:poppins list-decimal mt-4 ml-6">
                        <li class="pl-4">

                            <p>
                                <span class="font-bold">Beat the eggs: </span>In a bowl, beat
                                the eggs with a pinch of salt and pepper until they are well
                                mixed. You can add a tablespoon of water or milk for a
                                fluffier texture.
                            </p>
                        </li>
                        <li class="pl-4 mt-2">
                            <p>
                                <span class="font-bold">Heat the pan: </span>Place a non-stick
                                frying pan over medium heat and add butter or oil.
                            </p>
                        </li>
                        <li class="pl-4 mt-2">
                            <p>
                                <span class="font-bold">Cook the omelette: </span>Once the
                                butter is melted and bubbling, pour in the eggs. Tilt the pan
                                to ensure the eggs evenly coat the surface.
                            </p>
                        </li>
                        <li class="pl-4 mt-2">
                            <p>
                                <span class="font-bold">Add fillings (optional): </span>When
                                the eggs begin to set at the edges but are still slightly
                                runny in the middle, sprinkle your chosen fillings over one
                                half of the omelette.
                            </p>
                        </li>
                        <li class="pl-4 mt-2">
                            <p>
                                <span class="font-bold">Fold and serve: </span>As the omelette
                                continues to cook, carefully lift one edge and fold it over
                                the fillings. Let it cook for another minute, then slide it
                                onto a plate.
                            </p>
                        </li>
                        <li class="pl-4 mt-2">
                            <p>
                                <span class="font-bold">Enjoy: </span>Serve hot, with
                                additional salt and pepper if needed.
                            </p>
                        </li>
                    </ol>
                </div>
                <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>

            </div>

        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BackRoute from '~/components/Food/BackRoute.vue';
// import Back from '../routes/Back.vue';


const quantity = ref(1);
const disabled = ref(false);
const { params } = useRoute();
const router = useRouter();
const foods = ref([
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