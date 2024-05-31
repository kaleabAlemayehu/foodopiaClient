<template>
    <li>
        <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
            <div class="flex items-center h-5">
                <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            </div>
            <div class="ms-2 text-sm">
                <label for="helper-checkbox-1" class="font-medium text-gray-900 dark:text-gray-300">
                    <div>{{ parameter }}</div>
                </label>
            </div>
        </div>

    </li>
</template>

<script setup>
defineProps(["parameter"])

</script>

<style scoped></style>