<template>
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
</template>

<script setup>
import { defineProps } from 'vue';
defineProps(["recipe"])
</script>

<style>
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
</style>