<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
        <Details />
        <div class="w-[60%] mx-auto flex flex-col mb-8">
            <p class="mb-12 text-xl">Comments...</p>
            <div v-for="comment in comments" :key="comment">

                <CommentCard :btn="comment.btn" :dot="comment.dot" />
            </div>

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
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
const comments = ref([{ btn: "btn1", dot: "dot1" },
{ btn: "btn2", dot: "dot2" },
{ btn: "btn3", dot: "dot3" },
{ btn: "btn4", dot: "dot4" },
{ btn: "btn5", dot: "dot5" },
])
onMounted(() => {
    initFlowbite();
})
</script>

<style></style>
