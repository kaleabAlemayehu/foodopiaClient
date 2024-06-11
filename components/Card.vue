<template>
    <div>
        <div
            class="card grid border-[1px] border-customGray shadow-md p-0 rounded-lg bg-customGray transition-all duration-300 hover:shadow-lg">
            <NuxtLink :to="`/recipe/${recipe.id}`" class="thumbnail">
                <!-- TODO: replace placeholder image with fetched one -->
                <img :src="recipe.featured_image_url" :alt="recipe.featured_image">
            </NuxtLink>
            <div class="description grid grid-rows-[h-min] grid-cols-3">
                <NuxtLink :to="`/recipe/${recipe.id}`"
                    class="title col-span-3 flex justify-start items-center text-2xl h-min my-6 mx-4 font-medium">
                    {{ recipe.title }}
                </NuxtLink>

                <NuxtLink :to="`/recipeSearch/${recipe.user.username}`"
                    class="user col-span-2 flex justify-start items-center text-lg h-min my-4 mx-4">
                    <Icon name="fa-regular:user" class=" text-customBlack mr-4" />
                    <span class="userName">{{ recipe.user.username }}</span>
                </NuxtLink>
                <div class="rating flex justify-evenly text-xl font-thin h-min my-4 mx-8">
                    <Icon name="fa-regular:star" class="sta text-customGolden my-auto text-xl" />
                    <span class="ratingNumber">
                        {{ recipe.avg_rating }}username
                    </span>
                </div>
                <div class="interactions col-span-3 flex justify-around items-center text-base h-min mx-2 my-8">

                    <slot />
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
defineProps(['recipe'])

</script>

<style>
/* 
    TODO adding change when it is bookmarked
.bookmark:TODO {
    @apply bg-customGolden text-customWhite;
} */
</style>