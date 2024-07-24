<template>
    <div class=" flex justify-center items-center">
        <div class="relative max-w-xl w-full">
            <div>
                <input type="range" step="1" :min="min" :max="max" @input="minTrigger" v-model="minTime"
                    class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">

                <input type="range" step="1" :min="min" :max="max" @input="maxTrigger" v-model="maxTime"
                    class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">

                <div class="relative z-10 h-2">
                    <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                    <div class="absolute z-20 top-0 bottom-0 rounded-md bg-red-300"
                        :style="{ right: maxThumb + '%', left: minThumb + '%' }"></div>
                    <div class="absolute z-30 w-6 h-6 top-0 left-0 bg-red-300 rounded-full -mt-2 -ml-1"
                        :style="{ left: minThumb + '%' }"></div>
                    <div class="absolute z-30 w-6 h-6 top-0 right-0 bg-red-300 rounded-full -mt-2 -mr-3"
                        :style="{ right: maxThumb + '%' }"></div>
                </div>
            </div>

            <div class="flex justify-between items-center py-5">
                <div>
                    <input type="text" maxlength="5" @input="minTrigger" v-model="minTime"
                        class="px-3 py-2 border border-gray-200 rounded w-24 text-center">
                </div>
                <div>
                    <input type="text" maxlength="5" @input="maxTrigger" v-model="maxTime"
                        class="px-3 py-2 border border-gray-200 rounded w-24 text-center">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const minTime = ref(0);
const maxTime = ref(300);
const min = ref(0);
const max = ref(300);
const minThumb = ref(0);
const maxThumb = ref(0);

const minTrigger = () => {
    if (minTime.value < 0) {
        minTime.value = 0
    }
    minTime.value = Math.min(minTime.value, maxTime.value - 1);
    minThumb.value = ((minTime.value - min.value) / (max.value - min.value)) * 100;
    console.log("(min, max)", minTime._value, maxTime._value)
};

const maxTrigger = () => {
    if (maxTime.value > 300) {
        maxTime.value = 300
    }
    maxTime.value = Math.max(maxTime.value, minTime.value + 1);
    maxThumb.value = 100 - (((maxTime.value - min.value) / (max.value - min.value)) * 100);
    console.log("(min, max)", minTime._value
        , maxTime._value)
};

onMounted(() => {
    minTrigger();
    maxTrigger();
});
</script>

<style>
input[type=range]::-webkit-slider-thumb {
    pointer-events: all;
    width: 24px;
    height: 24px;
    -webkit-appearance: none;
}
</style>