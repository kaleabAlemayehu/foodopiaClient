<template>
    <div>
        <NavBar>
            <UserLogedIn />
        </NavBar>
        <div class="showcase flex justify-center items-center w-full h-[50dvh] bg-customOrang text-customWhite">
            <UserLogedIn class="mr-5" />Neo
        </div>
        <span class="my-14">8 recipes...</span>
        <div class="grid grid-cols-4 my-12 gap-8 mx-20">
            <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                <NotOwned :recipe="recipe" />
            </Card>
        </div>
        <Footer />
    </div>
</template>

<script setup>
const recipes = ref([
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 2, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 3, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
])
</script>

<style scoped></style>