<template>
    <div class="bg-gray-50 h-screen overflow-hidden ">
        <BackRoute class="w-min absolute left-1/3 top-[8rem] m-0 p-0 " />
        <SignupForm class="" />

    </div>
</template>

<script setup>
import SignupForm from '~/components/Form/SignupForm.vue';
import BackRoute from '~/components/Food/BackRoute.vue';
import { definePageMeta } from '#imports';
definePageMeta({
    layout: "auth"
})
onMounted(() => {
    const token = useCookie("token")

    if (token.value && token.value !== "") {
        navigateTo('/')
    }
})

</script>

<style scoped></style>