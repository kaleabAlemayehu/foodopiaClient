<template>
    <div>


        <div class="flex items-center">

            <!-- Starts component -->
            <div id="ratingApp" class="flex flex-col gap-4 w-full justify-center mx-auto mt-6  ">
                <!-- Display Stars -->
                <div id="starsContainer" class="flex gap-2" :class="{ 'cursor-not-allowed': !user }">
                    <Star v-for="(star, index) in 5" :key="index" @click="toggleRating(index)"
                        class="w-6 h-6 cursor-not-allowed"
                        :class="{ 'cursor-pointer': user, 'text-yellow-300': index <= rating, 'text-gray-300': index > rating, }" />

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
const user = ref(false)
const props = defineProps(["value"])
const emit = defineEmits(["ratingValue"])
const rating = ref(0)
import { jwtDecode } from 'jwt-decode';
const toggleRating = (index) => {
    if (user.value == false) {
        // TODO add notification to tell first log in to rate
        console.log("login first")
    } else {

        rating.value = rating === index ? -1 : index;
        emit("ratingValue", rating.value + 1)
    }
}
watch(() => props.value, (newValue) => {
    rating.value = newValue - 1;

    emit("ratingValue", rating.value + 1)
}, { immediate: true })

onMounted(() => {
    const token = useCookie("token")
    if (token.value && token.value !== null) {
        user.value = jwtDecode(token.value)
    } else {
        user.value = false;
    }
})
</script>

<style scoped></style>