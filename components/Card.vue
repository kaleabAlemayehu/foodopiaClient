<template>
    <div>
        <div class="card">
            <div class="thumbnail">
                <!-- TODO: replace placeholder image with fetched one -->
                <img src="../static/assets/images/thumbnail.jpg" :alt="recipe.img">
            </div>
            <div class="description">
                <div class="title">
                    {{ recipe.title }}
                </div>
                <div class="user">
                    <Icon name="fa-regular:user" class=" text-customBlack mr-4" />
                    <span class="userName">{{ recipe.author }}</span>
                </div>
                <div class="rating">
                    <Icon name="fa-regular:star" class="star" />
                    <span class="ratingNumber">
                        {{ recipe.rating }}
                    </span>
                </div>
                <div class="interactions">
                    <div class="comments">
                        <Icon name="fa-regular:comment" class="chat" />
                        <span class="commentNumber">
                            {{ recipe.comments }}
                        </span>
                    </div>
                    <div class="likes">
                        <Icon name="fa6-regular:heart" class="heart" />
                        <span class="likeNumber">
                            {{ recipe.likes }}
                        </span>
                    </div>

                    <div :class="recipe.isBookmarked ? marked : notMarked" class="bookmark">

                        <Icon name="fa6-regular:bookmark" class="" />

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
defineProps(['recipe'])

</script>

<style>
.card {
    @apply grid border-[1px] border-customGray shadow-md p-0 rounded-lg bg-customGray transition-all duration-700;
}

.card:hover {
    @apply shadow-lg;
}

.description {
    @apply grid grid-rows-[h-min] grid-cols-3;
}

.title {
    @apply col-span-3 flex justify-start items-center text-2xl h-min my-6 mx-4 font-medium;
}

.user {
    @apply col-span-2 flex justify-start items-center text-lg h-min my-4 mx-4;
}

.rating {
    @apply flex justify-evenly text-xl font-thin h-min my-4 mx-8;
}

.star {
    @apply text-customGolden my-auto text-xl;
}

.interactions {
    @apply col-span-3 flex justify-around items-center text-base h-min mx-2 my-8;
}

.chat,
.heart,
.bookmark {
    @apply mr-4 text-xl border-[1px];
}

.comments,
.likes,
.bookmark {
    @apply text-xl border-[1px] px-4 py-2 rounded-lg transition-all duration-300;
}

.comments:hover,
.likes:hover,
.bookmark:hover {
    @apply shadow-md;
}

.marked {
    @apply bg-customGolden text-customWhite;
}

/* 
    TODO adding change when it is bookmarked
.bookmark:TODO {
    @apply bg-customGolden text-customWhite;
} */
</style>