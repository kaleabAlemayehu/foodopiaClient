<template>
    <div class="bg-customWhite">

        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
        <div class="details">

            <div class="socials">
                <div class="iconWrap">
                    <Icon name="fa-brands:twitter" class="icons" />
                </div>
                <div class="iconWrap">
                    <Icon name="fa-brands:facebook" class="icons" />
                </div>
                <div class="iconWrap">
                    <Icon name="fa-brands:instagram" class="icons" />

                </div>

            </div>
            <div class="instructions">
                <p class="insHeader">Instruction</p>
                <ul class="instructionLists">
                    <li v-for="ins, index in instructions" :key="ins" class="list"><span class="index">{{ index
                            }}</span> {{ ins }}
                    </li>
                </ul>

            </div>
            <div class="ingredients">
                <p class="ingHeader">ingredients</p>
                <ul>
                    <li v-for="ing in ingredients" :key="ing">{{ ing }}</li>
                </ul>
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

<style scoped>
.socials {
    @apply relative right-36;
}

.icons {
    @apply text-customGolden text-3xl m-3;
}

.iconWrap {
    @apply p-2 my-2 transition-all duration-700 border-[1px] border-transparent;
}


.iconWrap:hover {
    @apply border-[1px] rounded-full border-customGolden;
}

.details {
    @apply w-full flex justify-around items-center absolute;
}

.instructionLists {
    @apply list-none text-3xl text-customBlack;
}

.list {
    @apply block m-2 py-2 my-8;
}

.index {
    @apply p-2 text-customGolden border-2 border-customGolden rounded-full px-4 mr-5;
}

.insHeader {
    @apply text-5xl;
}

.ingHeader {
    @apply text-2xl text-customBlack
}
</style>
