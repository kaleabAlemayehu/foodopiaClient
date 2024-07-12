<template>
    <div>
        <SigninForm />
    </div>
</template>

<script setup>
import SigninForm from '../../components/Form/SigninForm.vue';
import { definePayloadReviver } from 'nuxt/app';
definePageMeta({
    layout: "auth"
})

</script>

<style scoped></style>