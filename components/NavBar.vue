<template>
    <div
        class="sticky top-0 left-0 flex w-screen h-16 bg-customOrang  justify-center items-center max-w-full overflow-hidden flex-1 z-10">
        <div class="navContent flex h-full min-w-[80%]  max-w-[80%] justify-between items-center">
            <nuxt-link to="/" class="text-customWhite text-3xl  font-bold">Foodopia</nuxt-link>

            <div class="intercation flex justify-between w-[30%] items-center">
                <div class="search flex relative top-0  group  transition-all duration-1000 ">
                    <div class="searchIcon">
                        <Icon name="fa6-solid:magnifying-glass" alt="searchIcon"
                            class="absolute top-3 left-2 text-customOrang" />
                    </div>
                    <input type="search" placeholder="Search Recipe..."
                        class="px-10 py-2 rounded-lg outline-none border-none text-customBlack focus:shadow-sm bg-customWhite  group-hover:shadow-md group-hover:shadow-customBlack group-focus:shadow-md group-focus:shadow-customBlack "
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