<template>
    <div>
        <div
            class="card grid border-[1px] border-customGray shadow-md p-0 rounded-lg bg-customGray transition-all duration-300 hover:shadow-lg">
            <div class="thumbnail">
                <!-- TODO: replace placeholder image with fetched one -->
                <img src="../static/assets/images/thumbnail.jpg" :alt="recipe.img">
            </div>
            <div class="description grid grid-rows-[h-min] grid-cols-3">
                <div class="title col-span-3 flex justify-start items-center text-2xl h-min my-6 mx-4 font-medium">
                    {{ recipe.title }}
                </div>
                <div class="user col-span-2 flex justify-start items-center text-lg h-min my-4 mx-4">
                    <Icon name="fa-regular:user" class=" text-customBlack mr-4" />
                    <span class="userName">{{ recipe.author }}</span>
                </div>
                <div class="rating flex justify-evenly text-xl font-thin h-min my-4 mx-8">
                    <Icon name="fa-regular:star" class="sta text-customGolden my-auto text-xl" />
                    <span class="ratingNumber">
                        {{ recipe.rating }}
                    </span>
                </div>
                <div class="interactions col-span-3 flex justify-around items-center text-base h-min mx-2 my-8">
                    <NotOwend :recipe="recipe" />
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import NotOwend from './NotOwend.vue';
defineProps(['recipe'])

</script>

<style>
/* 
    TODO adding change when it is bookmarked
.bookmark:TODO {
    @apply bg-customGolden text-customWhite;
} */
</style>