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
                <div class="filters">
                    <div class="time currentFilter">Time</div>
                    <div class="ingredients">ingredients</div>
                </div>
                <div class="checkboxs">
                    <div><input type="checkbox" name="" id=""><span class="parameter"> less 10 min</span>
                    </div>
                    <div><input type="checkbox" name="" id=""><span class="parameter">11 - 30 min</span></div>
                    <div><input type="checkbox" name="" id=""><span class="parameter">31 - 40 min</span></div>
                    <div><input type="checkbox" name="" id=""><span class="parameter">41 - 50 min</span></div>
                    <div><input type="checkbox" name="" id=""><span class="parameter">51 min +</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.filterBox {
    @apply sticky right-20 top-20 py-32 px-16 bg-customGray leading-relaxed w-[20%] rounded-lg text-xl;
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

<script setup>
import NavBar from '~/components/NavBar.vue';
// import UserLogedIn from '~/components/UserLogedIn.vue';
import AnonUser from '~/components/AnonUser.vue';
import Card from '~/components/Card.vue';
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
