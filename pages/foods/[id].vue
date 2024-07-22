<template>
    <main class="max-w-screen-xl mx-auto px-6 my-16" v-if="food">
        <BackRoute class="w-min" />
        <span
            class="bg-red-100 border border-red-500 rounded-full text-primary relative top-32 text-sm poppins px-4 py-1 inline-block mb-4 w-max">{{
                food.prep_time }} minutes
        </span>
        <div>
            <div class="flex flex-col justify-center items-center ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

                    <!-- Left side -->

                    <div class="order-2 md:order-1 lg:order-1 flex flex-col justify-center">

                        <h1
                            class="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
                            {{ food.title }}</h1>
                        <p
                            class="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
                            {{ food.description }}</p>

                        <div v-if="user && user.id == food.user_id" class="flex mt-8 gap-8">
                            <button type="button"
                                class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-max my-16">
                                <Edit class="inline text-sm" /> &nbsp; &nbsp; Edit
                            </button>
                            <DeleteModal @confirmed="deleteRecipe()" />
                            <!-- live update on the delete -->

                        </div>
                        <div v-else class="mt-8">

                            <button type="button" @click="addBookmark()" :disabled="disabled"
                                :class="{ 'cursor-not-allowed bg-red-100': disabled }"
                                class=" focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-max my-16">
                                <Bookmark class="inline text-lg" /> &nbsp; &nbsp; Add Bookmark
                            </button>
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="order-1 md:order-2 lg:order-2 flex flex-col">

                        <Heart class="text-gray-400 text-4xl self-end cursor-pointer" :class="{ 'text-red-600': liked }"
                            @click="toggleHeart" />

                        <img :src="food.featured_image_url" class="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                    </div>
                </div>

            </div>
            <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>
            <Carousel :id="id" />
            <div class="flex justify-center flex-col mb-5">

                <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
                <Ingredients :id="id" />
                <div class="w-full h-px bg-gray-200 mx-auto mt-8"></div>
                <Instructions :id="id" />
                <div v-if="reviews.length > 0" class="w-full h-px bg-gray-200 mx-auto my-8"></div>
                <div :key="keyValue">

                    <Rating v-for="review, index in reviews" :key="index" :review="review" />
                </div>

                <div class="w-full h-px bg-gray-200 mx-auto my-8"></div>
                <!-- TODO: live update on the comment show area -->
                <Comment :id="id" @comment-submited="fetchComment()" />

            </div>


        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BackRoute from '~/components/Food/BackRoute.vue';
import Bookmark from '~/components/icons/Bookmark.vue';
import Heart from '~/components/icons/Heart.vue';
import Ingredients from '~/components/Food/Ingredients.vue';
import Instructions from '~/components/Food/Instructions.vue';
import Carousel from '~/components/Food/Carousel.vue';
import Rating from '~/components/Food/Rating.vue';
import Comment from '~/components/Form/Comment.vue';
import Stars from '~/components/Form/Stars.vue';
import Edit from '~/components/icons/Edit.vue';
import DeleteModal from '~/components/Form/DeleteModal.vue';
import { jwtDecode } from 'jwt-decode';
import { FETCH_RECIPE_BY_ID, FETCH_COMMENT, DELETE_RECIPE, ADD_BOOKMARK, IS_BOOKMARKED, ADD_LIKE, IS_LIKED, DELETE_LIKE } from '~/helpers/queries/food';
const user = ref(true)
const food = ref({});
const liked = ref(false)
const likes = ref([])
const reviews = ref([])
const keyValue = ref(0)
const disabled = ref(false);
const { params } = useRoute();
const bookmarked = ref([0])
const router = useRouter();
const id = params.id;
const fetchComment = async () => {
    const { data } = await useAsyncQuery(FETCH_COMMENT, { _eq: id })
    reviews.value = data?._value?.comments || []
    keyValue.value += 1;
}

const toggleHeart = () => {

    if (liked.value) {
        const { mutate, onDone, onError } = useMutation(DELETE_LIKE, () => ({
            variables: {
                _eq: id
            }
        }))
        mutate({
            variables: {
                _eq: id
            }
        })
        onDone(result => {
            console.log("unliked")
            liked.value = false
            // TODO add notification with toastify
        })
        onError(err => {
            console.log(err)
        })

    } else {
        const { mutate, onDone, onError } = useMutation(ADD_LIKE, () => ({
            variables: {
                recipe_id: id
            }
        }))
        mutate({
            variables: {
                recipe_id: id
            }
        })
        onDone(result => {
            console.log("liked")
            liked.value = true
            // TODO add notification with toastify

        })
        onError(err => {
            console.log(err)
        })

    }
}
const isLiked = () => {
    const { onResult, onError, loading } = useQuery(IS_LIKED, {
        _eq: id
    })
    onResult(({ data }) => {
        likes.value = data?.likes
    })
    onError(err => {
        console.log(err)
    })
}
const fetchFood = async () => {
    const { data } = await useAsyncQuery(FETCH_RECIPE_BY_ID, { id: id })
    food.value = data?._value?.recipes_by_pk || {}

}

const isBookmarked = () => {

    const { onResult, onError, loading } = useQuery(IS_BOOKMARKED, {
        _eq: user.value.id,
        _eq1: id
    })


    onResult(({ data }) => {
        bookmarked.value = data?.bookmarks
    })

    onError(err => {
        console.log(err)
    })

}

onMounted(() => {
    const token = useCookie("token")
    if (token.value && token.value !== null) {
        user.value = jwtDecode(token.value)
    } else {
        user.value = false;
    }
    fetchFood()
    fetchComment()
    isBookmarked()
    isLiked()

})

const deleteRecipe = () => {
    // TODO adding conformation modal
    const { mutate, onDone, onError } = useMutation(DELETE_RECIPE, {
        variables: {
            id: id
        }
    })
    mutate({
        variables: {
            id: id
        }
    })
    onDone(result => {
        console.log(result)
        navigateTo("/")
    })
    onError(err => {
        console.log(err)
    })
}

const addBookmark = () => {
    const { mutate, onDone, onError } = useMutation(ADD_BOOKMARK, {
        variables: {
            recipe_id: id
        }
    })
    mutate({
        variables: {
            recipe_id: id
        }
    })
    onDone(result => {
        console.log("result", result)
        disabled.value = true
        // TODO add toastify notification
    })
    onError(err => {
        console.error(err)
    })
}
watch(() => bookmarked.value, () => {
    if (bookmarked.value) {

        disabled.value = bookmarked.value.length == 0 ? false : true;

    }

})
watch(() => likes.value, () => {
    if (likes.value) {

        liked.value = likes.value.length == 0 ? false : true;

    }

})
</script>

<style scoped>
/* Add any additional styles here */
</style>