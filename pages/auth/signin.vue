<template>
    <div class="bg-gray-50 h-screen  flex justify-center items-center overflow-auto">
        <BackRoute class=" self-start pt-24 " />
        <SigninForm />
    </div>
</template>

<script setup>
import BackRoute from '../../components/Food/BackRoute.vue';
import SigninForm from '../../components/Form/SigninForm.vue';
definePageMeta({
    layout: "auth"
})

</script>

<style scoped></style>