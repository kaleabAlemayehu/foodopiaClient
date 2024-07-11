<template>
    <div>
        <article>
            <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <Star class="w-4 h-4 text-yellow-300" aria-hidden="true" />
                <Star class="w-4 h-4 text-yellow-300" aria-hidden="true" />
                <Star class="w-4 h-4 text-yellow-300" aria-hidden="true" />
                <Star class="w-4 h-4 text-yellow-300" aria-hidden="true" />
                <Star class="w-4 h-4 text-gray-300" aria-hidden="true" />
                <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
            </div>
            <Chat />

        </article>

    </div>
</template>

<script setup>
import Chat from './Chat.vue';
import Star from '../icons/Star.vue';

</script>

<style lang="scss" scoped></style>