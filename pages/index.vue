<script setup>
import NavBar from '~/components/NavBar.vue';
// import UserLogedIn from '~/components/UserLogedIn.vue';
import AnonUser from '~/components/AnonUser.vue';
import Card from '~/components/Card.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
const recipes = ref([
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 2, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 3, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 2, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 3, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 2, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 3, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
])
const changeCurrent = (e) => {
    e.target.classList.toggle("current");
}
</script>



<template>
    <div>
        <NavBar>
            <UserLogedIn />
            <!-- <AnonUser /> -->
        </NavBar>
        <div class="showcase">
            <div class="showcaseText">
                Explore our huge selection of delicious recipe ideas
            </div>
            <div class="catagories">
                <div class="choice all" @click="changeCurrent">All</div>
                <div class="choice breakfast" @click="changeCurrent">Breakfast</div>
                <div class="choice current lunch" @click="changeCurrent">Lunch</div>
                <div class="choice  dinner" @click="changeCurrent">Dinner</div>
                <div class="choice   dessert" @click="changeCurrent">Dessert</div>
                <div class="choice drinks" @click="changeCurrent">Drinks</div>
                <div class="choice snacks" @click="changeCurrent">Snacks</div>
                <div class="choice seasonal" @click="changeCurrent">Seasonal</div>
            </div>
        </div>
        <div class="contents">

            <div class="cards">
                <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
            </div>
            <div class="filterBox">

                <button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper"
                    class="text-customBlack bg-customGray hover:bg-customGray focus:ring-4 focus:outline-none focus:ring-customGray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-customGray dark:hover:bg-customGray dark:focus:ring-customGray"
                    type="button">filters <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
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
                            <div class="flex p-2 rounded hover:bg-customWhite dark:hover:bg-gray-600">
                                <div class="flex items-center h-5">
                                    <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1"
                                        type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                </div>
                                <div class="ms-2 text-sm">
                                    <label for="helper-checkbox-1" class="font-medium text-gray-900 dark:text-gray-300">
                                        <div>Enable notifications</div>
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
                                    <label for="helper-checkbox-2" class="font-medium text-gray-900 dark:text-gray-300">
                                        <div>Enable 2FA auth</div>
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
                                    <label for="helper-checkbox-3" class="font-medium text-gray-900 dark:text-gray-300">
                                        <div>Subscribe newsletter</div>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
.filterBox {
    @apply sticky right-20 top-20 py-5 px-16 w-[20%];
}

.contents {
    @apply flex justify-between items-baseline my-48;
}

.choice {
    @apply px-8 py-4 mx-2 rounded-xl transition-all duration-300 cursor-pointer;
}

.current {
    @apply bg-customBlack text-customWhite;
}

.catagories {
    @apply flex relative top-[11.25rem] w-min justify-around text-2xl bg-customGray px-8 py-3 rounded-xl shadow-md font-bold;
}

.showcase {
    @apply flex w-full h-[70dvh] bg-customOrang justify-center items-center flex-col;
}

.showcaseText {
    @apply text-7xl text-center leading-relaxed text-customWhite w-1/2 font-semibold mt-20;
}

.cards {
    @apply grid grid-cols-3 gap-x-8 gap-y-10 w-[70%] px-8 mx-6;
}
</style>
