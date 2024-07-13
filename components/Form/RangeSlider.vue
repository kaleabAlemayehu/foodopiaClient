<!-- MultiRangeSlider.vue -->
<template>
    <div class="flex flex-col">

        <div class="relative max-w-xl w-full">
            <div>
                <!-- TODO: fix make the min reponsive to click -->
                <input type="range" step="100" :min="min" :max="max" v-model="minPrice" @input="minTrigger"
                    class="absolute appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                    :class="{ 'pointer-events-none': !minActive }">
                <input type="range" step="100" :min="min" :max="max" v-model="maxPrice" @input="maxTrigger"
                    class="absolute appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                    :class="{ 'pointer-events-none': !maxActive }">
                <div class="relative z-10 h-2">
                    <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                    <div class="absolute z-20 top-0 bottom-0 rounded-md bg-red-300"
                        :style="{ right: maxThumb + '%', left: minThumb + '%' }"></div>
                    <div class="absolute z-30 w-6 h-6 top-0 left-0 bg-red-700 rounded-full -mt-2 -ml-1"
                        :style="{ left: minThumb + '%' }"></div>
                    <div class="absolute z-30 w-6 h-6 top-0 right-0 bg-red-700 rounded-full -mt-2 -mr-3"
                        :style="{ right: maxThumb + '%' }"></div>
                </div>
            </div>
            <div class="flex justify-between items-center py-5">
                <div>
                    <input type="text" maxlength="5" @input="minTrigger" v-model="minPrice"
                        class="px-3 py-2 border border-gray-200 rounded w-24 text-center">
                </div>
                <div>
                    <input type="text" maxlength="5" @input="maxTrigger" v-model="maxPrice"
                        class="px-3 py-2 border border-gray-200 rounded w-24 text-center">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const min = ref(0);
const max = ref(10000);
const minPrice = ref(0);
const maxPrice = ref(1000);
const minThumb = ref(0);
const maxThumb = ref(0);
const minActive = ref(true)
const maxActive = ref(true)
const minTrigger = () => {
    minActive.value = true;
    maxActive.value = false;
    minThumb.value = Math.min(minPrice.value, maxPrice.value - 500);
    minThumb.value = ((minPrice.value - min.value) / (max.value - min.value)) * 100;
}

const maxTrigger = () => {
    maxActive.value = true;
    minActive.value = false;
    maxThumb.value = Math.max(maxPrice.value, minPrice.value + 500);
    maxThumb.value = 100 - (((maxPrice.value - min.value) / (max.value - min.value)) * 100);
}
minTrigger();
maxTrigger();
</script>

<style scoped>
/* Additional custom styles if needed */
</style>