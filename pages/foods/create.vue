<template>
    <div class="mt-24 mb-36 max-w-screen-xl mx-auto px-6">
        <h2 class="text-center font-bold text-2xl">Create A Recipe</h2>
        <BackRoute />

        <FoodForm />
    </div>

</template>

<script setup>
import BackRoute from '~/components/Food/BackRoute.vue';
import FoodForm from '~/components/Form/FoodForm.vue';

</script>

<style scoped></style>