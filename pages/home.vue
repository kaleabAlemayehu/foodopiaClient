<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <div class="flex   h-[86dvh]">
            <div class="dashboard grid grid-cols-[1fr_3fr] grid-rows-4 w-full h-full m-10 rounded-lg bg-customGray">
                <div
                    class="menu row-span-4  h-full w-full bg-customBlack rounded-lg text-customGolden grid grid-rows-4 text-lg  ">
                    <div class="home flex justify-center items-center text-center">
                        <div v-if="isCurrent"
                            class=" text-4xl border-[0.5px] border-customGolden  p-3 px-[0.85rem] rounded-full text-customWhite absolute left-24 text-current">
                            <Icon name="fa6-solid:check" />
                        </div>
                        <div v-else class="number ">1</div>
                        <span class="menuItem">Home</span>
                    </div>
                    <div class="edit  flex justify-center items-center">
                        <div v-if="isCurrent"
                            class=" text-4xl border-[0.5px] border-customGolden  p-3 px-[0.85rem] rounded-full text-customWhite absolute left-24 text-current">
                            <Icon name="fa6-solid:check" />
                        </div>
                        <div v-else class="number ">2</div>
                        <span class="menuItem">Edit</span>
                    </div>
                    <div class="create  flex justify-center items-center">
                        <div v-if="isCurrent"
                            class=" text-4xl border-[0.5px] border-customGolden  p-3 px-[0.85rem] rounded-full text-customWhite absolute left-24 text-current">
                            <Icon name="fa6-solid:check" />
                        </div>
                        <div v-else class="number ">3</div>
                        <span class="menuItem">Create</span>
                    </div>
                    <div class="bookmarked  flex justify-center items-center">
                        <div v-if="isCurrent"
                            class=" text-4xl border-[0.5px] border-customGolden  p-3 px-[0.85rem] rounded-full text-customWhite absolute left-24 text-current">
                            <Icon name="fa6-solid:check" />
                        </div>
                        <div v-else class="number ">4</div>
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
const isCurrent = ref(true)

</script>

<style>
.number {
    @apply p-5 px-[1.81rem] border-customGolden border-[0.5px] rounded-full absolute left-24;
}
</style>