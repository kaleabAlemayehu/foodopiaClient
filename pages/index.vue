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
                <div class="choice all">All</div>
                <div class="choice breakfast">Breakfast</div>
                <div class="choice lunch">Lunch</div>
                <div class="choice dinner">Dinner</div>
                <div class="choice  current dessert">Dessert</div>
                <div class="choice drinks">Drinks</div>
                <div class="choice snacks">Snacks</div>
                <div class="choice seasonal">Seasonal</div>
            </div>
        </div>
        <div class="cards">
            <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
    </div>
</template>
<style scoped>
.choice {
    @apply px-8 py-4 mx-2 rounded-xl;
}

.current {
    @apply bg-customBlack text-customWhite;
}

.catagories {
    @apply flex relative top-[10.5rem] w-min justify-around text-2xl bg-customGray px-8 py-3 rounded-xl shadow-md font-bold;
}

.showcase {
    @apply flex w-full h-[70dvh] bg-customOrang justify-center items-center flex-col;
}

.showcaseText {
    @apply text-7xl text-center leading-relaxed text-customWhite w-1/2 font-semibold mt-20;
}

.cards {
    @apply grid grid-cols-3 gap-x-8 gap-y-10 w-[70%] px-8 mx-6 my-48;
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

</script>
