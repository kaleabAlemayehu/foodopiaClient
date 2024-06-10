<template>
    <div class="authBtns flex items-center justify-center ">
        <NuxtLink to="/login" class="my-auto mx-auto">
            <button type="button"
                class="text-customWhite bg-customOrang hover:bg-[#f7734b] focus:ring-4 focus:ring-customWhitishOrange font-medium rounded-lg  px-5 py-2.5  mx-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">LogIn</button>
        </NuxtLink>
        <NuxtLink to="/signUp">
            <button type="button"
                class="text-customWhite bg-customOrang hover:bg-[#f7734b] focus:ring-4 focus:ring-customWhitishOrange font-medium rounded-lg  px-5 py-2.5  mx-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">SignUp</button>
        </NuxtLink>

    </div>
</template>

<script setup>


</script>

<style scoped></style>