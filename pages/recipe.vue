<template>
    <div class="bg-customWhite">

        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
    </div>
</template>

<script setup>
import AnonUserVue from "~/components/AnonUser.vue";
import NavBarVue from "~/components/NavBar.vue";
import UserLogedIn from "~/components/UserLogedIn.vue";
import ShowCase from "~/components/ShowCase.vue"


</script>

<style scoped></style>