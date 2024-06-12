<template>

    <NuxtLink :to="`/user/${recipe.user.id}`">
        <div
            class="user w-min h-min p-3 border-customWhite border-[1px] rounded-full flex justify-center hover:shadow-md hover:shadow-customBlack transition-all duration-600 ">
            <Icon name="fa-regular:user" class="m-auto text-customWhite  " />
        </div>
    </NuxtLink>

</template>

<script setup>
defineProps(['recipe'])

</script>

<style scoped></style>