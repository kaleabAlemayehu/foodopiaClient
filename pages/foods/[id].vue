<template>
    <main class="max-w-screen-xl mx-auto px-6 my-16" v-if="food">
        <BackRoute class="w-min" />
        <span
            class="bg-red-100 border border-red-500 rounded-full text-primary relative top-32 text-sm poppins px-4 py-1 inline-block mb-4 w-max">{{
                food.prep_time }} minutes
        </span>
        <div>
            <div class="flex flex-col justify-center items-center ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

                    <!-- Left side -->

                    <div class="order-2 md:order-1 lg:order-1 flex flex-col justify-center">

                        <h1
                            class="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
                            {{ food.title }}</h1>
                        <p
                            class="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
                            {{ food.description }}</p>

                        <div v-if="user && user.id == food.user_id" class="flex mt-8 gap-8">
                            <button type="button"
                                class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-max my-16">
                                <Edit class="inline text-sm" /> &nbsp; &nbsp; Edit
                            </button>
                            <button type="button"
                                class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-max my-16">
                                <Trash class="inline text-sm" /> &nbsp; &nbsp; Delete
                            </button>

                        </div>
                        <div v-else class="mt-8">

                            <button type="button"
                                class=" focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-max my-16">
                                <Bookmark class="inline text-lg" /> &nbsp; &nbsp; Add Bookmark
                            </button>
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="order-1 md:order-2 lg:order-2 flex flex-col">

                        <Heart class="text-primary text-4xl self-end " />

                        <img :src="food.featured_image_url" class="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                    </div>
                </div>

            </div>
            <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>
            <Carousel :id="id" />
            <div class="flex justify-center flex-col mb-5">

                <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
                <Ingredients />
                <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
                <Instructions />
                <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>
                <Rating />
                <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>
                <Comment />

            </div>


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
import Rating from '~/components/Food/Rating.vue';
import Comment from '~/components/Form/Comment.vue';
import Stars from '~/components/Form/Stars.vue';
import Edit from '~/components/icons/Edit.vue';
import Trash from '~/components/icons/Trash.vue';
import { jwtDecode } from 'jwt-decode';
import { FETCH_RECIPE_BY_ID, FETCH_ADDITIONAL_IMAGES } from '~/helpers/queries/food';
import { image } from '@vee-validate/rules';
const user = ref(true)
const food = ref({});
const disabled = ref(false);
const { params } = useRoute();
const router = useRouter();
const id = params.id;
const fetchFood = async () => {
    const { data } = await useAsyncQuery(FETCH_RECIPE_BY_ID, { id: id })
    food.value = data?._value?.recipes_by_pk || {}
}

onMounted(() => {
    const token = useCookie("token")
    if (token.value && token.value !== null) {
        user.value = jwtDecode(token.value)
    } else {
        user.value = false;
    }
    fetchFood()

    console.log("uservalue: ", user.value)
})


</script>

<style scoped>
/* Add any additional styles here */
</style>