<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase />
        <Details />
    </div>
</template>

<script setup>
import AnonUserVue from "~/components/AnonUser.vue";
import NavBarVue from "~/components/NavBar.vue";
import UserLogedIn from "~/components/UserLogedIn.vue";
import ShowCase from "~/components/ShowCase.vue"
import Details from "~/components/Details.vue";

</script>

<style></style>
