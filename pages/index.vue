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
const query = gql`query MyQuery($_in: [Int!]) {
  recipes(where: {category_id: {_in: $_in}}) {
    avg_rating
    category_id
    created_at
    description
    featured_image_url
    id
    prep_time
    title
    total_comments
    total_likes
    updated_at
    user {
      username
      id
    }
  }
}
`
const ingredientQuery = gql`query MyQuery( $_in: [Int!]) {
  recipes(where: {id: {_in: $_in}}) {
    avg_rating
    category_id
    created_at
    description
    featured_image_url
    id
    prep_time
    title
    total_comments
    total_likes
    updated_at
    user {
      id
      username
    }
  }
}

`
const categories = ref([])
const ingredientRecipe = ref([])
const recipes = ref([]);
const fetchRecipes = async (query, variables) => {
    const { data } = await useAsyncQuery(query, variables);
    recipes.value = data._rawValue.recipes || [];
};

// var { data } = await useAsyncQuery(query, { _in: catagories.value })
// const recipes = ref(data._rawValue.recipes)

const changeCurrent = (e) => {
    const categoryId = parseInt(e.target.dataset.id);
    if (!categories.value.includes(categoryId)) {
        categories.value.push(categoryId);
    } else {
        categories.value.splice(categories.value.indexOf(categoryId), 1);
    }
    e.target.classList.toggle('current');
    fetchRecipes(query, { _in: categories.value });
};

watch(categories, fetchRecipes, { immediate: true });

const filterBy = (id, type) => {
    if (type == "time") {
        switch (id) {
            case 1:
                recipes.value = recipes.value.filter(r => r.prep_time <= 10)
                break
            case 2:
                recipes.value = recipes.value.filter(r => (r.prep_time > 10 && r.prep_time <= 30))
                break
            case 3:
                recipes.value = recipes.value.filter(r => (r.prep_time > 30 && r.prep_time <= 45))
                break
            case 4:
                recipes.value = recipes.value.filter(r => (r.prep_time > 45 && r.prep_time <= 60))
                break
            case 5:
                recipes.value = recipes.value.filter(r => (r.prep_time > 60))
                break
        }
    } else if (type == "ingredient") {
        if (!ingredientRecipe.value.includes(id)) {
            ingredientRecipe.value.push(id);
        } else {
            ingredientRecipe.value.splice(ingredientRecipe.value.indexOf(id), 1);
        }
        fetchRecipes(ingredientQuery, { _in: ingredientRecipe.value })
    }

}
watch(ingredientRecipe, fetchRecipes, { immediate: true });
</script>



<template>
    <div>
        <NavBar>
            <!-- <UserLogedIn /> -->
            <AnonUser />
        </NavBar>
        <div class="showcase">
            <div class="showcaseText">
                Explore our huge selection of delicious recipe ideas
            </div>
            <div class="catagories">
                <div data-id="5" class="choice breakfast" @click="changeCurrent">Breakfast</div>
                <div data-id="6" class="choice  lunch" @click="changeCurrent">Lunch</div>
                <div data-id="7" class="choice  dinner" @click="changeCurrent">Dinner</div>
                <div data-id="8" class="choice   dessert" @click="changeCurrent">Dessert</div>
                <div data-id="9" class="choice drinks" @click="changeCurrent">Drinks</div>
                <div data-id="10" class="choice snacks" @click="changeCurrent">Snacks</div>
                <div data-id="11" class="choice seasonal" @click="changeCurrent">Seasonal</div>
            </div>
        </div>
        <div class="contents">

            <div class="cards">
                <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                    <NotOwned :recipe="recipe" />
                </Card>
            </div>
            <Filter @filterIt="filterBy" />
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
