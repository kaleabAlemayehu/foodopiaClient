<template>
    <div>
        <SignupForm />

    </div>
</template>

<script setup>
import SignupForm from '~/components/Form/SignupForm.vue';
import { definePageMeta } from '#imports';
definePageMeta({
    layout: "auth"
})
</script>

<style scoped></style>