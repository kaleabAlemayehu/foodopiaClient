<template>
    <div
        class="sticky top-0 left-0 flex w-screen h-16 bg-customOrang  justify-center items-center max-w-full overflow-hidden flex-1 z-10">
        <div class="navContent flex h-full min-w-[90%]  max-w-[90%] justify-between items-center">
            <nuxt-link to="/" class="text-customWhite text-3xl  font-bold">Foodopia</nuxt-link>

            <div class="intercation flex justify-between w-[30%] items-center">
                <div
                    class="search flex relative top-0 hover:shadow-md hover:shadow-customBlack focus:shadow-md focus:shadow-customBlack  transition-all duration-1000 ">
                    <div class="searchIcon">
                        <img src="@/static/assets/icons/searchIcon.svg" alt="searchIcon" class="absolute top-2 left-2">
                    </div>
                    <input type="search" placeholder="Search Recipe..."
                        class="px-10 py-2 rounded-lg outline-none border-none text-customBlack focus:shadow-sm bg-customWhite  "
                        id="searchInput">
                </div>

                <slot />
            </div>


        </div>



    </div>
</template>


<script setup>

</script>

<style scoped></style>