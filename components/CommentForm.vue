<template>
    <div class="w-[60%] mx-auto">

        <form>
            <div
                class="max-w-[900px] mb-4 border border-x-customGray rounded-lg bg-customGray dark:bg-gray-700 dark:border-gray-600">
                <div class="px-4 py-2 bg-customGray rounded-t-lg dark:bg-gray-800">
                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea id="comment" rows="4"
                        class="w-full px-0 text-sm text-customBlack bg-customGray border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write a comment..." required></textarea>
                </div>
                <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit"
                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-customOrang rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-customOrang hover:bg-customOrang">
                        Post comment
                    </button>
                    <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    </div>
                </div>
            </div>
        </form>


    </div>
</template>

<script setup>

</script>

<style scoped></style>