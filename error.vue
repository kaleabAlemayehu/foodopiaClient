<template>
    <Navbar />
    <div class=" mt-12 max-w-screen-xl mx-auto px-6">
        <client-only>
            <BackRoute class="w-min" />
            <Vue3Lottie animationLink="https://lottie.host/5b648ae2-e6a5-49bc-ae77-5b7a2e920f03/fBIdIS5FFc.json"
                :height="600" :width="800" />
        </client-only>
    </div>
    <Footer />
</template>

<script setup>
import BackRoute from "./components/Food/BackRoute.vue"
import Navbar from "./components/Navbar/Navbar.vue"
import Footer from "./components/Footer/Footer.vue"

import { Vue3Lottie } from 'vue3-lottie'

</script>

<style scoped></style>