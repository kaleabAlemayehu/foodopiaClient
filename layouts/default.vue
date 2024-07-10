<template>
    <div>
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar/Navbar.vue';
import Footer from '../components/Footer/Footer.vue';

</script>

<style scoped></style>