<template>
    <div>

        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
        <div class="wrapper  flex justify-center">
            <div class="details  w-full mt-6 w-[90%] grid max-w-[90%] grid-cols-[100px_5fr_2fr] gap-x-32">


                <div class="socials h-min w-min;">
                    <div
                        class="iconWrap p-2 my-2 transition-all duration-700 border-[1px] border-transparent w-[72px]  hover:border-[1px] hover:rounded-full hover:border-customGolden">
                        <Icon name="fa-brands:twitter" class="icons  text-customGolden text-3xl m-3" />
                    </div>
                    <div
                        class="iconWrap p-2 my-2 transition-all duration-700 border-[1px] border-transparent w-[72px]  hover:border-[1px] hover:rounded-full hover:border-customGolden">
                        <Icon name="fa-brands:facebook" class="icons  text-customGolden text-3xl m-3" />
                    </div>
                    <div
                        class="iconWrap p-2 my-2 transition-all duration-700 border-[1px] border-transparent w-[72px]  hover:border-[1px] hover:rounded-full hover:border-customGolden">
                        <Icon name="fa-brands:instagram" class="icons  text-customGolden text-3xl m-3" />

                    </div>

                </div>
                <div class="instructions">
                    <p class="insHeader text-5xl">Instruction</p>
                    <ul class="instructionLists list-none text-3xl text-customBlack mt-20 h-min">
                        <div v-for="ins, index in instructions" :key="ins" class="list m-2 ml-0 py-2 my-8 flex">
                            <div>
                                <span
                                    class="index p-2 text-customGolden border-2 border-customGolden rounded-full px-4 mr-5">{{
                                    index }}</span>
                            </div>
                            <div class="ins text-justify">{{ ins }}</div>
                        </div>
                    </ul>

                </div>
                <div class="ingredients rounded-lg px-8 py-4 h-min shadow-md shadow-customBlack">
                    <p class="ingHeader text-4xl text-customBlack mb-8 border-b-[0.1px] pb-8 border-customBlack">
                        Ingredients</p>
                    <div
                        class="ingredientList rounded-lg p-3 border-customGolden border-[1px] mb-8 px-4 leading-relaxed text-lg px-8">
                        <div v-for="ing in ingredients" :key="ing" class="">{{ ing }}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import AnonUserVue from "~/components/AnonUser.vue";
import NavBarVue from "~/components/NavBar.vue";
import UserLogedIn from "~/components/UserLogedIn.vue";
import ShowCase from "~/components/ShowCase.vue"
const instructions = ref([
    "hi there is instruction",
    "hi there is instruction",
    "boil water and grid onions",
    "put onions on the pan",
    "add some oil",
    "hi there is instruction",
    "boil water and grid onions",
    "put onions on the pan",
    "add some oil",
]);
const ingredients = ref([
    "onions",
    "salt",
    "pepper",
    "olive oil",
    "spagetti",
    "onions",
    "salt",
    "pepper",
    "olive oil",
    "spagetti",

])
</script>

<style scoped></style>
