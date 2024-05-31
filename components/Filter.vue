<template>
    <div class="filterBox  sticky right-20 top-20 py-5 px-16 w-[20%]">

        <button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper"
            class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
            type="button">filters <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownHelper"
            class="z-10 hidden bg-customGray divide-y divide-customGray rounded-lg shadow w-60 dark:bg-customBlack dark:divide-customBlack">
            <ul class="p-3 space-y-1 text-sm text-customBlack dark:text-customWhite"
                aria-labelledby="dropdownHelperButton">
                <li>


                    <button id="timeButton" data-dropdown-toggle="timeFilter"
                        class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
                        type="button">Time <svg class="w-2.5 h-2.5 ms-3" aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <!-- timer drop menu -->
                    <div id="timeFilter"
                        class="z-10 hidden bg-customGray divide-y divide-customGray rounded-lg shadow w-60 dark:bg-customBlack dark:divide-customBlack">
                        <ul class="p-3 space-y-1 text-sm text-customBlack dark:text-customWhite start-0"
                            aria-labelledby="timeButton">
                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-1"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>less than 15 min</div>
                                        </label>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-2" aria-describedby="helper-checkbox-text-2"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-2"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>16 - 30 min</div>
                                        </label>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-3" aria-describedby="helper-checkbox-text-3"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-3"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>31 - 45 min</div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-3" aria-describedby="helper-checkbox-text-3"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-3"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>46 - 60 min</div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-3" aria-describedby="helper-checkbox-text-3"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-3"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>60 min + </div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </li>
                <li>


                    <button id="ingredientButton" data-dropdown-toggle="ingredientFilter"
                        class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
                        type="button">Ingredients <svg class="w-2.5 h-2.5 ms-3" aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <!-- ingredient drop menu -->
                    <div id="ingredientFilter"
                        class="z-10 hidden bg-customGray divide-y divide-customGray rounded-lg shadow w-60 dark:bg-customBlack dark:divide-customBlack">
                        <ul class="p-3 space-y-1 text-sm text-customBlack dark:text-customWhite start-0"
                            aria-labelledby="timeButton">
                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-1"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>mango</div>
                                        </label>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-2" aria-describedby="helper-checkbox-text-2"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-2"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>Spaghetti</div>
                                        </label>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox-3" aria-describedby="helper-checkbox-text-3"
                                            type="checkbox" value=""
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="helper-checkbox-3"
                                            class="font-medium text-gray-900 dark:text-gray-300">
                                            <div>Tomato</div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </li>

            </ul>
        </div>


    </div>
</template>

<script setup>

</script>

<style scoped></style>