<template>
    <div>

        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
        <div class="wrapper">
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
                        <div v-for="ins, index in instructions" :key="ins" class="list">
                            <span class="index">{{ index }}</span>
                            <span class="ins">{{ ins }}</span>
                        </div>
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
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur, porro nam non unde dolorum molestiae quos! Rem libero accusamus architecto aspernatur reiciendis distinctio, laboriosam, soluta vel odio ipsa officia magni incidunt iste corrupti? Ipsa corporis eveniet iste vel sed.",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur, porro nam non unde dolorum molestiae quos! Rem libero accusamus architecto aspernatur reiciendis distinctio, laboriosam, soluta vel odio ipsa officia magni incidunt iste corrupti? Ipsa corporis eveniet iste vel sed.",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur, porro nam non unde dolorum molestiae quos! Rem libero accusamus architecto aspernatur reiciendis distinctio, laboriosam, soluta vel odio ipsa officia magni incidunt iste corrupti? Ipsa corporis eveniet iste vel sed.",
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
.wrapper {
    @apply flex justify-center;
}

/* 
.socials {
    @apply ;
} */

.icons {
    @apply text-customGolden text-3xl m-3;
}

.iconWrap {
    @apply p-2 my-2 transition-all duration-700 border-[1px] border-transparent w-[72px];
}


.iconWrap:hover {
    @apply border-[1px] rounded-full border-customGolden;
}

.details {
    @apply w-full mt-6 w-[90%] grid max-w-[90%] grid-cols-[100px_5fr_2fr] gap-x-32;
}

.instructionLists {
    @apply list-none text-3xl text-customBlack mt-20;
}

.list {
    @apply m-2 ml-0 py-2 my-8;
}

.index {
    @apply p-2 text-customGolden border-2 border-customGolden rounded-full px-4 mr-5;
}

.insHeader {
    @apply text-5xl;
}

.ingHeader {
    @apply text-2xl text-customBlack;
}

.ins {
    @apply text-left;
}

/* .ingredients {
    @apply ;
} */
</style>
