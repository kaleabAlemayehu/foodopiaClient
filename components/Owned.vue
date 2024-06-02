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

</script>

<style></style>