<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <div class="flex   h-[86dvh] mb-28">
            <div class="dashboard grid grid-cols-[1fr_3fr] grid-rows-4 w-full h-full m-10 rounded-lg bg-customGray">
                <div
                    class="menu row-span-4  h-full w-full bg-customBlack rounded-lg text-customWhite grid grid-rows-4 text-lg  ">
                    <div class="home flex justify-center items-center text-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 1 ? true : false }" @click="changeCurrent" data-id="1">

                        <span class="menuItem " data-id="1">Home</span>
                    </div>
                    <div class="edit  flex justify-center items-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 2 ? true : false }" @click="changeCurrent" data-id="2">

                        <span class="menuItem" data-id="2">Edit</span>
                    </div>
                    <div class="create  flex justify-center items-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 3 ? true : false }" @click="changeCurrent" data-id="3">
                        <span class="menuItem" data-id="3">Create</span>
                    </div>
                    <div class="bookmarked  flex justify-center items-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 4 ? true : false }" @click="changeCurrent" data-id="4">

                        <span class="menuItem ml-9" data-id="4">Bookmarked</span>
                    </div>
                </div>
                <div class="content row-span-4 flex justify-center items-center overflow-auto">
                    <div v-if="isCurrent == 1" class="homeContent grid grid-cols-[350px_350px_350px] gap-10 my-auto ">
                        <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                            <Owned :recipe="recipe" />
                        </Card>
                    </div>
                    <div class="my-auto" v-else-if="isCurrent == 2">

                        <form class="w-[60vw] mx-auto">
                            <div class="my-5">
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Title</label>
                                <input type="text" id="title"
                                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>

                            <div class="mb-5">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Description</label>
                                <textarea id="description" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-customWhite rounded-lg border border-customWhite focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-customOrang dark:focus:border-customOrang"
                                    placeholder="Leave a comment..."></textarea>
                            </div>
                            <div class="mb-5">
                                <label for="preparation"
                                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">preparation</label>
                                <input type="text" id="preparation"
                                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-5">
                                <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white"
                                    for="primaryPicture">Upload Primary Picture</label>
                                <input
                                    class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="user_avatar_help" id="primaryPicture" type="file">
                                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Primary
                                    Picture</div>
                            </div>
                            <div class="mb-5">
                                <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white"
                                    for="addtionalPic">Upload Addtional Picture</label>
                                <input
                                    class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="addtionalOne" id="addtionalPic" type="file">
                                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="addtionalOne">
                                    Addtional Picture</div>
                            </div>
                            <div class="mb-5">
                                <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white"
                                    for="addtionalPic2">Upload Addtional Picture</label>
                                <input
                                    class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite 50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="addtionalTwo" id="primaryPicture" type="file">
                                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="addtionalTwo">
                                    Addtional Picture</div>
                            </div>


                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">BreakFast</span>
                            </label>
                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="lunch" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lunch</span>
                            </label>
                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="dinner" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dinner</span>
                            </label>
                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="dessert" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dessert</span>
                            </label>
                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="drinks" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Drinks</span>
                            </label>
                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="snacks" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Snacks</span>
                            </label>
                            <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
                                <input type="checkbox" value="seasonal" class="sr-only peer">
                                <div
                                    class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
                                </div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Seasonal</span>
                            </label>
                            <div class="my-5">
                                <label for=" ingredient"
                                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">ingredient
                                    <span class="text-xs text-gray-500 dark:text-gray-300">(separate them by
                                        comma)</span></label>
                                <input type="text" id="ingredient"
                                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="">

                                <div class="my-5" v-for="step in steps" :key="step">
                                    <label :for="step"
                                        class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Instruction
                                        {{ step }}</label>
                                    <input type="text" :id="step"
                                        class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>
                                <button type="button" @click="addStep"
                                    class="text-white bg-customOrang hover:bg-customOrang focus:ring-4 focus:outline-none focus:ring-customWhitishOrange font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <Icon name="mi:add" />
                                </button>
                                <button type="button" @click="removeStep"
                                    class="text-white bg-customOrang hover:bg-customOrang focus:ring-4 focus:outline-none focus:ring-customWhitishOrange font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <Icon name="mi:remove" />
                                </button>
                            </div>



                        </form>


                    </div>

                </div>


            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import NavBar from '~/components/NavBar.vue';
import AnonUser from '~/components/AnonUser.vue';
import Owned from "~/components/Owned.vue";
import Card from "~/components/Card.vue";
import Footer from "~/components/Footer.vue";
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})
const isCurrent = ref(2);
const steps = reactive([1, 2, 3, 4, 5])
const changeCurrent = (e) => {
    isCurrent.value = e.target.dataset.id;
}
const removeStep = () => {
    steps.pop()
}
const addStep = () => {
    steps.push(steps.length + 1)
}
const recipes = ref([
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 2, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 3, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 4, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
    { id: 5, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 6, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 7, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 8, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
    { id: 9, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 10, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 11, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 12, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
])

</script>

<style>
.number {
    @apply p-5 px-[1.81rem] border-customGolden border-[0.5px] rounded-full absolute left-24;
}

.isCurrent {
    @apply text-customGray bg-customOrang;
}
</style>