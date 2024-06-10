<template>
    <div class="authBtns flex items-center justify-center ">
        <NuxtLink to="/login">
            <button class="btn">Login</button>
        </NuxtLink>
        <NuxtLink to="/signUp">
            <button class="btn">SignUp</button>
        </NuxtLink>

    </div>
</template>

<script setup>


</script>

<style scoped>
.btn {
    @apply outline-none py-[0.4rem] px-3 text-customWhite border-customGray border-[0.4px] outline-[0.4px] rounded-2xl mx-3 hover:shadow-md hover:shadow-customBlack transition-all duration-1000 hover:border-customWhite;
}
</style>