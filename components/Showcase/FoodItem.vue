<template>
    <div
        class="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
        <span
            class="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{{
                foodType }}</span>
        <img class="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="../../public/assets/images/breakfast1.png" alt="notdisplayed" />
        <div class="flex flex-col items-center my-3 space-y-2 transform transition duration-300 hover:scale-105">
            <h1 class="text-gray-900 poppins text-lg transform transition duration-300">{{ title }}</h1>
            <p class="text-gray-500 poppins text-sm text-center transform transition duration-300">{{
                truncatedDescription }}</p>
            <div
                class="text-gray-900 poppins text-xs flex justify-evenly  w-full font-bold   py-8 transform transition duration-300">
                <div class="flex justify-center">


                    <Heart class="w-5 h-5 text-primary" />
                    &nbsp;&nbsp;
                    <div class="m-auto">
                        {{ price }}
                    </div>
                </div>
                <div class="flex justify-center">


                    <Comment class="w-5 h-5 text-primary" />
                    &nbsp;&nbsp;
                    <div class="m-auto">
                        {{ price }}
                    </div>

                </div>
                <div class="flex justify-center">


                    <Star class="w-5 h-5 text-yellow-300" />
                    &nbsp;&nbsp;
                    <div class="m-auto">
                        {{ 5.0 }}
                    </div>

                </div>


            </div>
            <button
                class="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                @click="handleRoute">View Details </button>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { defineProps } from 'vue';
import Heart from '../icons/Heart.vue';
import Comment from '../icons/Comment.vue';
import Star from '../icons/Star.vue';

const props = defineProps({
    id: Number,
    image: String,
    title: String,
    description: String,
    price: Number,
    foodType: String,
});

const router = useRouter();

const handleRoute = () => {
    router.push(`/foods/${props.id}`);
};

const truncatedDescription = computed(() => props.description.slice(0, 50));
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>