<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
        <Details />
        <div class="w-[60%] mx-auto flex flex-col mb-8">
            <p class="mb-12 text-xl">Comments...</p>

            <CommentCard v-for="comment in comments" :key="comment" />
        </div>
        <CommentForm />

        <Footer />
    </div>
</template>

<script setup>
import { ref } from "vue";
import AnonUserVue from "~/components/AnonUser.vue";
import NavBarVue from "~/components/NavBar.vue";
import UserLogedIn from "~/components/UserLogedIn.vue";
import ShowCase from "~/components/ShowCase.vue"
import Details from "~/components/Details.vue";
import Footer from "~/components/Footer.vue";
import CommentForm from "../components/CommentForm.vue";
import CommentCard from "~/components/CommentCard.vue";
const comments = ref([
    1, 2, 3, 4, 5, 6,
])
</script>

<style></style>
