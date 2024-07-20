<template>
    <div class="mt-24 mb-36 max-w-screen-xl mx-auto px-6">
        <h2 class="text-center font-bold text-2xl">Create A Recipe</h2>
        <BackRoute class="w-min" />

        <FoodForm />
    </div>

</template>

<script setup>
import BackRoute from '~/components/Food/BackRoute.vue';
import FoodForm from '~/components/Form/FoodForm.vue';
import { jwtDecode } from 'jwt-decode';
const user = ref(false)
onMounted(() => {
    const token = useCookie("token");
    if (token.value && token.value != null) {
        user.value = jwtDecode(token.value)
    } else {
        navigateTo('/')
    }
})

</script>

<style scoped></style>