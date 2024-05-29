<template>
    <div>
        <NavBar>
            <UserLogedIn />
            <!-- <AnonUser /> -->
        </NavBar>
        <div class="cards">
            <div class="card" v-for="recipe in recipes" :key="recipe.id">
                <div class="thumbnail">
                    <!-- TODO: replace placeholder image with fetched one -->
                    <img src="@/static/assets/images/thumbnail.jpg" :alt="recipe.img">
                </div>
                <div class="description">
                    <div class="title">
                        {{ recipe.title }}
                    </div>
                    <div class="user">
                        <Icon name="fa-regular:user" class=" text-customBlack" />
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
                        <div class="bookmark">
                            <Icon name="fa6-regular:bookmark" class="bg-customGolden" />

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<style scoped>
.cards {
    @apply grid grid-cols-3 gap-x-8 gap-y-10 w-[70%] px-8 mx-6 my-48;
}

.card {
    @apply grid border-[1px] border-customGray shadow-md p-0 rounded-lg bg-customGray;
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


.interactions {
    @apply col-span-3 flex justify-around items-center text-base h-min;
}
</style>

<script setup>
import NavBar from '~/components/NavBar.vue';
// import UserLogedIn from '~/components/UserLogedIn.vue';
import AnonUser from '~/components/AnonUser.vue';
const recipes = ref([
    { id: 1, isBookmarked: true, title: 'Chocolate Cake', author: "Neo", comments: 60, likes: 30, rating: 4.5 },
    { id: 2, isBookmarked: true, title: 'Spaghetti Carbonara', author: "Neo", comments: 30, likes: 30, rating: 4.5 },
    { id: 3, isBookmarked: true, title: 'Bruschetta', author: "Neo", comments: 15, likes: 30, rating: 4.5 },
    { id: 1, isBookmarked: true, title: 'Mango Smoothie', author: "Neo", comments: 10, likes: 30, rating: 4.5 },
])

</script>
