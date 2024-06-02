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
                    <div class="homeContent grid grid-cols-[350px_350px_350px] gap-10 my-auto ">
                        <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                            <Owned :recipe="recipe" />
                        </Card>
                    </div>

                </div>


            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from "vue"
import NavBar from '~/components/NavBar.vue';
import AnonUser from '~/components/AnonUser.vue';
import Owned from "~/components/Owned.vue";
import Card from "~/components/Card.vue";
import Footer from "~/components/Footer.vue";
const isCurrent = ref(1);
const changeCurrent = (e) => {
    isCurrent.value = e.target.dataset.id;
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
    @apply text-customBlack bg-customWhitishGolden;
}
</style>