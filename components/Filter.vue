<template>
    <div class="filterBox  sticky right-20 top-20 py-5 px-16 w-[20%]">

        <button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper"
            class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
            type="button">filters <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownHelper"
            class="z-10 hidden bg-customGray divide-y divide-customGray rounded-lg shadow w-60 dark:bg-customBlack dark:divide-customBlack">
            <ul class="p-3 space-y-1 text-sm text-customBlack dark:text-customWhite"
                aria-labelledby="dropdownHelperButton">
                <li>


                    <button id="timeButton" data-dropdown-toggle="timeFilter"
                        class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
                        type="button">Time <svg class="w-2.5 h-2.5 ms-3" aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <!-- timer drop menu -->
                    <div id="timeFilter"
                        class="z-10 hidden bg-customGray divide-y divide-customGray rounded-lg shadow w-60 dark:bg-customBlack dark:divide-customBlack">
                        <ul class="p-3 space-y-1 text-sm text-customBlack dark:text-customWhite start-0"
                            aria-labelledby="timeButton">
                            <FilterList parameter="kaleab" />

                        </ul>
                    </div>

                </li>
                <li>


                    <button id="ingredientButton" data-dropdown-toggle="ingredientFilter"
                        class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
                        type="button">Ingredients <svg class="w-2.5 h-2.5 ms-3" aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <!-- timer drop menu -->
                    <div id="ingredientFilter"
                        class="z-10 hidden bg-customGray divide-y divide-customGray rounded-lg shadow w-60 dark:bg-customBlack dark:divide-customBlack">
                        <ul class="p-3 space-y-1 text-sm text-customBlack dark:text-customWhite start-0"
                            aria-labelledby="timeButton">
                            <FilterList parameter="kaleab" />

                        </ul>
                    </div>

                </li>

            </ul>
        </div>


    </div>
</template>

<script setup>
import FilterList from './FilterList.vue';


</script>

<style scoped></style>