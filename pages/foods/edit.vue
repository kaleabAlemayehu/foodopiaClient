<template>
    <div class="mt-24 mb-36 max-w-screen-xl mx-auto px-6 poppins">
        <h2 class="text-center font-bold text-2xl">Edit A Recipe</h2>
        <BackRoute class="w-min" />

        <FoodForm v-if="recipe && recipe.id" class="self-start" :recipe="recipe" />
        <Loading v-else />

    </div>
</template>

<script setup>
import BackRoute from '~/components/Food/BackRoute.vue';
import FoodForm from '~/components/Form/FoodForm.vue';
import Loading from '~/components/Form/Loading.vue';
import { useRoute, useRouter } from 'vue-router';
import { FETCH_RECIPE_BY_ID } from '~/helpers/queries/food';

const route = useRoute();
const recipeId = route.query.recipeId;
const recipe = ref({})

const { onResult, onError, loading } = useQuery(FETCH_RECIPE_BY_ID, {
    id: recipeId
})
onResult(({ data }) => {
    setTimeout(() => { recipe.value = data?.recipes_by_pk }, 1000);
})



</script>

<style scoped></style>