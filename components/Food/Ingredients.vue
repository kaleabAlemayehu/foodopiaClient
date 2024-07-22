<template>
    <div>
        <div class="mt-8 self-start ">
            <h3 class="font-fancy text-3xl text-primary">Ingredients</h3>
            <ul class="list-disc marker:text-gray-800 mt-4 ml-6 text-gray-800 marker:align-middle poppins">

                <li v-for="ingredient, index in ingredients" :key="index" class="pl-4 mt-2">{{ ingredient.name }} - {{
                    ingredient.quantity }}</li>

            </ul>
        </div>

    </div>
</template>

<script setup>
const ingredients = ref([])
import { FETCH_INGREDIENT } from '~/helpers/queries/food';
const props = defineProps({
    id: Number
})

onMounted(async () => {
    const { data } = await useAsyncQuery(FETCH_INGREDIENT, { _eq: props.id })
    ingredients.value = data?._value?.ingredients || []
})
</script>

<style scoped></style>