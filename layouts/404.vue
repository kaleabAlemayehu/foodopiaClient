<template>
    <div>
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>

<script setup>

import Footer from "../components/Footer/Footer.vue"
import Navbar from '../components/Navbar/Navbar.vue';


</script>

<style scoped></style>