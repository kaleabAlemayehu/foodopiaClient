<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <div class="flex   h-[86dvh]">
            <div class="dashboard grid grid-cols-[1fr_3fr] grid-rows-4 w-full h-full m-10 rounded-lg bg-customGray">
                <div
                    class="menu row-span-4  h-full w-full bg-customBlack rounded-lg text-customWhite grid grid-rows-4 text-lg  ">
                    <div class="home flex justify-center items-center text-center"
                        :class="{ isCurrent: isCurrent == 1 ? true : false }" @click="changeCurrent">

                        <span class="menuItem">Home</span>
                    </div>
                    <div class="edit  flex justify-center items-center"
                        :class="{ isCurrent: isCurrent == 2 ? true : false }" @click="changeCurrent">

                        <span class="menuItem">Edit</span>
                    </div>
                    <div class="create  flex justify-center items-center"
                        :class="{ isCurrent: isCurrent == 3 ? true : false }" @click="changeCurrent">

                        <span class="menuItem">Create</span>
                    </div>
                    <div class="bookmarked  flex justify-center items-center"
                        :class="{ isCurrent: isCurrent == 4 ? true : false }" @click="changeCurrent">

                        <span class="menuItem ml-9">Bookmarked</span>
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
import { ref } from "vue"
import NavBar from '~/components/NavBar.vue';
import AnonUser from '~/components/AnonUser.vue';
const isCurrent = ref(1);
const changeCurrent = (e) => {
    isCurrent.value = 3;
}
</script>

<style>
.number {
    @apply p-5 px-[1.81rem] border-customGolden border-[0.5px] rounded-full absolute left-24;
}

.isCurrent {
    @apply text-customGolden;
}
</style>