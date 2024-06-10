<template>
    <div class="filterBox  sticky right-20 top-20 py-5 px-16 w-[20%]">

        <div id="accordion-color" data-accordion="open"
            data-active-classes="bg-customOrang dark:bg-gray-800 text-blue-600 dark:text-white">
            <h2 id="accordion-color-heading-1">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-customBlack border border-b-0 border-customWhitishOrange rounded-t-xl focus:ring-4 focus:ring-customWhitishOrange dark:focus:ring-customWhitishOrange dark:border-gray-700 dark:text-gray-400 hover:bg-customGray dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                    aria-controls="accordion-color-body-1">
                    <span>Filter By Time</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                <div
                    class="p-5 border border-b-0 border-customWhitishOrange dark:border-gray-700 dark:bg-gray-900 list-none">
                    <FilterList parameter="test1" />
                    <FilterList parameter="test1" />
                    <FilterList parameter="test1" />

                </div>
            </div>
            <h2 id="accordion-color-heading-2">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-customBlack border  border-customWhitishOrange  rounded-b-xl focus:ring-4 focus:ring-customWhitishOrange dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-customGray dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-color-body-2" aria-expanded="false"
                    aria-controls="accordion-color-body-2">
                    <span>Filter By Ingredients</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-2" class="hidden " aria-labelledby="accordion-color-heading-2">
                <div
                    class="p-5 border border-t-0 border-customWhitishOrange dark:border-gray-700 list-none rounded-b-xl">
                    <FilterList parameter="test1" />
                    <FilterList parameter="test1" />
                    <FilterList parameter="test1" />

                </div>
            </div>

        </div>




    </div>
</template>

<script setup>
import FilterList from './FilterList.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>

<style scoped></style>