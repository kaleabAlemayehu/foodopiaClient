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
                    <div class="user">
                        <Icon name="fa-regular:user" class=" text-customBlack" />
                        <span class="userName">{{ recipe.author }}</span>
                    </div>
                    <div class="rating">
                        <div class="star">
                            <Icon name="" />
                        </div>
                        <span class="ratingNumber">
                            {{ recipe.rating }}
                        </span>
                    </div>
                    <div class="interactions">
                        <div class="comments">
                            <div class="chat">
                                <Icon name="fa-regular:comment" />
                            </div>
                            <span class="commentNumber">
                                {{ recipe.comments }}
                            </span>
                        </div>
                        <div class="likes">
                            <div class="heart">
                                <Icon name="fa6-regular:heart" />
                            </div>
                            <span class="likeNumber">
                                {{ recipe.likes }}
                            </span>
                        </div>
                        <div class="bookmark">
                            <Icon name="fa6-regular:bookmark" />

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
