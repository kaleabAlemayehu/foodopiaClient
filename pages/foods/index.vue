<template>
    <div class=" my-16 py-12  max-w-screen-xl mx-auto px-6">

        <form class="flex items-center max-w-xl mx-auto mb-8 mt-8">
            <ModalFilter />

            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FoodIcon />
                </div>
                <input type="text" id="text" name="text" v-model="text" @input="search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Search event title..." />
            </div>

            <button type="button" @click="search"
                class="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-full border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
            </button>


        </form>



    </div>
</template>

<script setup>
import ModalFilter from '../../components/Form/ModalFilter.vue';
import Filter from '../../components/icons/Filter.vue';
import FoodIcon from '../../components/icons/FoodIcon.vue';


</script>

<style lang="scss" scoped></style>