<script setup>
import NavBar from '~/components/NavBar.vue';
// import UserLogedIn from '~/components/UserLogedIn.vue';
import AnonUser from '~/components/AnonUser.vue';
import Card from '~/components/Card.vue';
import Filter from '~/components/Filter.vue';
import Footer from '~/components/Footer.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
const query = gql`
        query MyQuery {
  recipes {
    avg_rating
    description
    featured_image_url
    id
    prep_time
    title
    total_comments
    total_likes
    user {
      username
      id
    }
  }
}

`

const { data } = await useAsyncQuery(query)
console.log(data._rawValue.recipes)
const recipes = ref(data._rawValue.recipes)
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
                <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                    <NotOwned :recipe="recipe" />
                </Card>
            </div>
            <Filter />
        </div>
        <Footer />
    </div>
</template>

<style scoped>
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
