<template>
    <div>
        <article>
            <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <Star v-for="(star, index) in 5" :key="index"
                    :class="{ 'text-yellow-300': index <= props.review.rating - 1, 'text-gray-300': index > props.review.rating - 1 }"
                    class="w-6 h-6 cursor-pointer" />

            </div>
            <Chat :review="props.review" />

        </article>

    </div>
</template>

<script setup>
import Chat from './Chat.vue';
import Star from '../icons/Star.vue';
const props = defineProps(["review"])

</script>

<style lang="scss" scoped></style>