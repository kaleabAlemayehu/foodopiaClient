<template>
    <div>

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            class=" text-gray-800 transition-colors duration-500 bg-transparent focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  "
            type="button">Recipes <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <NuxtLink to="/foods/create"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create
                        Recipe</Nuxtlink>
                </li>
                <li>
                    <NuxtLink to="/foods"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Recipes
                        By
                        Me</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/foods/bookmarked"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Bookmarked</NuxtLink>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initDropdowns } from 'flowbite';

const props = defineProps({
    changeHeader: Boolean,
})

onMounted(() => {
    initDropdowns()
})

</script>

<style lang="scss" scoped></style>