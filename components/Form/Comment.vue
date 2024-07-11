<template>
    <div>

        <Stars />
        <div
            class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 max-w-[700px]">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="4"
                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..." required></textarea>
            </div>
            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-red-600">
                <button type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                    Post comment
                </button>

            </div>
        </div>
    </div>
</template>

<script setup>
import Stars from './Stars.vue';

</script>

<style scoped></style>