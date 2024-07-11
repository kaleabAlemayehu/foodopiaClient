<template>
    <div>


        <div id="default-carousel" class="relative h-full w-full " data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-96 overflow-hidden rounded-lg md:h-[600px]">
                <!-- Item 1 -->
                <div v-for="e, index in images" :key="index" class=" hidden duration-700 ease-in-out"
                    data-carousel-item>
                    <img :src="e.url"
                        class="absolute block w-fit h-fit object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="it doesn't show the image">
                </div>
            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button v-for="e, index in images" :key="index" type="button" class="w-3 h-3 rounded-full"
                    aria-current="true" aria-label="Slide 1" :data-carousel-slide-to="`${index}`"></button>

            </div>
            <!-- Slider controls -->
            <button type="button"
                class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev>
                <span
                    class=" inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/30 dark:bg-gray-800/30 group-hover:bg-red-500/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-red-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-primary dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next>
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/30 dark:bg-gray-800/30 group-hover:bg-red-500/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-red-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-primary dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

    </div>
</template>

<script setup>
import { initCarousels } from 'flowbite';
import { onMounted, defineProps } from 'vue';

onMounted(() => {
    initCarousels()
})
const props = defineProps({
    images: Array,
})

</script>

<style scoped></style>