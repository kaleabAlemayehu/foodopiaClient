<template :data-id="recipe.id">
    <NuxtLink :to="`/recipe/${recipe.id}`" class="comments">
        <Icon name="fa-regular:comment" class="chat" />
        <span class="commentNumber">
            {{ recipe.total_comments }}
        </span>
    </NuxtLink>
    <div class="likes" :class="{ marked: like.marked }" @click="addLike">
        <Icon name="fa6-regular:heart" class="heart" />
        <span class="likeNumber">
            {{ recipe.total_likes }}
        </span>
    </div>

    <div :class="{ marked: bookmark.marked }" class="bookmark" @click="addBookmark">

        <Icon name="fa6-regular:bookmark" class="" />

    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps(["recipe"])
defineEmits(["interaction"])
const bookmark = ref({ marked: false })
const addBookmark = (e) => {
    e.preventDefault();
    console.log(e)
    bookmark.value.marked = !(bookmark.value.marked)
    console.log(bookmark.value)
    emit("interaction", "bookmark", { recipe_id: recipe.recipe_id, user_id: recipe.user.id })
}
const like = ref({ marked: false })
const addLike = (e) => {
    e.preventDefault();
    console.log(e)
    like.value.marked = !(like.value.marked)
    console.log(like.value)
    emit("interaction", "like", { recipe_id: recipe.recipe_id, user_id: recipe.user.id })
}
</script>

<style>
.chat,
.heart,
.bookmark {
    @apply mr-4 text-xl;
    ;
}

.comments,
.likes,
.bookmark {
    @apply text-xl border-[1px] px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer;
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