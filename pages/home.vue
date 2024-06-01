<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <div class="flex  w-[100vw] h-[90vh]">
            <div class="dashboard grid grid-cols-[1fr_3fr] grid-rows-4 w-full h-full m-10 rounded-lg bg-customGray">
                <div
                    class="menu row-span-4  h-full w-full bg-customBlack rounded-lg text-customWhite grid grid-rows-4 ">
                    <div class="home flex justify-center items-center text-center">
                        <div class="number ">1</div>
                        <span class="menuItem">Home</span>
                    </div>
                    <div class="edit text-center flex justify-center items-center">
                        <div class="number">2</div>
                        <span class="menuItem">Edit</span>
                    </div>
                    <div class="create text-center flex justify-center items-center">
                        <div class="number">3</div>
                        <span class="menuItem">Create</span>
                    </div>
                    <div class="bookmarked text-center flex justify-center items-center">
                        <div class="number">4</div>
                        <span class="menuItem">Bookmarked</span>
                    </div>
                </div>
                <div class="content flex justify-center items-center">
                    content
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import AnonUser from '~/components/AnonUser.vue';

</script>

<style scoped></style>