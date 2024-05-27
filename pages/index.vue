<template>
    <div>
        <NavBar>
            <UserLogedIn />
            <!-- <AnonUser /> -->
        </NavBar>

    </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import UserLogedIn from '~/components/UserLogedIn.vue';
import AnonUser from '~/components/AnonUser.vue';

</script>

<style scoped></style>