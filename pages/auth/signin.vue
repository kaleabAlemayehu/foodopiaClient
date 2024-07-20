<template>
    <div class="bg-gray-50 h-screen  flex justify-center items-center overflow-auto">
        <BackRoute class=" self-start pt-24  w-min" />
        <SigninForm />
    </div>
</template>

<script setup>
import BackRoute from '../../components/Food/BackRoute.vue';
import SigninForm from '../../components/Form/SigninForm.vue';
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