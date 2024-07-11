<template>
    <div>


        <div class="flex items-center">

            <!-- Starts component -->
            <div id="ratingApp" class="flex flex-col gap-4 w-full justify-center mx-auto mt-6  ">
                <!-- Display Stars -->
                <div id="starsContainer" class="flex gap-2">
                    <Star v-for="(star, index) in 5" :key="index" @click="toggleRating(index)"
                        :class="{ 'text-yellow-300': index <= rating, 'text-gray-300': index > rating }"
                        class="w-6 h-6 cursor-pointer" />

                </div>
                <!-- Display Current Rating -->
                <div class="mt-2">
                    <span id="currentRating" class="text-gray-500">{{ rating === -1 ? '0 stars' : rating + 1 + ' stars'
                        }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
// text-yellow-300
// text-gray-300
import Star from '../icons/Star.vue';
const rating = ref(-1)
const toggleRating = (index) => {
    rating.value = rating === index ? -1 : index;
}



</script>

<style scoped></style>