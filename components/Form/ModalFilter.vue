<template>
    <div>


        <!-- Modal toggle -->
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button"
            class=" text-white bg-red-600 border hover:border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-800">
            <Filter class="text-white" /> Filters
        </button>

        <!-- Main modal -->
        <!-- Main modal -->
        <div id="crud-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-8 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Filter Recipes
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4 ">
                        <h4 class="text-md font-semibold text-gray-900 dark:text-white">
                            Filter By Ingredients
                        </h4>
                        <ul class="h-36 overflow-y-auto" v-if="!loading">

                            <div v-for="ing, index in ingredients" :key="index"
                                class="flex px-4 py-2 items-center me-4">
                                <input checked :id="`red-checkbox-${index}`" type="checkbox" value=""
                                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="`red-checkbox-${index}`"
                                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ ing.name
                                    }} - {{ ing.quantity }}</label>
                            </div>
                        </ul>
                    </div>
                    <div class="p-4 md:p-5 space-y-4 ">
                        <h4 class="text-md font-semibold text-gray-900 dark:text-white">
                            Filter By User
                        </h4>
                        <ul class="h-36 overflow-y-auto">

                            <div v-for="user in users" :key="user.email" class="flex px-4 py-2 items-center me-4">
                                <input checked :id="`red-checkbox-${user.email}`" type="checkbox" value=""
                                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="`red-checkbox-${user.email}`"
                                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ user.username
                                    }}</label>
                            </div>
                        </ul>
                    </div>
                    <div class="p-4 md:p-5 space-y-4 border-t border-gray-200">
                        <h4 class="text-md font-semibold text-gray-900 dark:text-white">
                            Filter By Preparation Time
                        </h4>
                        <div class="flex flex-col">
                            <RangeSlider :min="0" :max="1000" />
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="crud-modal" type="button"
                            class="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <Filter class="inline" /> Filter
                        </button>

                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<script setup>
import { initModals } from 'flowbite';
import { onMounted } from 'vue';
import Filter from '../icons/Filter.vue';
import RangeSlider from './RangeSlider.vue';
import { GET_ALL_INGREDIENT, GET_ALL_USERS } from '~/helpers/queries/food';
const ingredients = ref([])
const users = ref([])
const { data: ings } = await useAsyncQuery(GET_ALL_INGREDIENT)
ingredients.value = ings?._value?.ingredients
const { data: usrs } = await useAsyncQuery(GET_ALL_USERS)
users.value = usrs?._value?.users



onMounted(() => {
    initModals()
})
watch(() => ingredients.value, (newvalue) => {
    if (!newvalue) {
        initModals()
        console.log(ingredients)
        // fetchIngredient()
    }
}, { immediate: true })
</script>

<style scoped></style>