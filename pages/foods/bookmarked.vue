<template>
    <div class=" my-16 py-12 max-w-screen-xl mx-auto px-6">
        <h3 class="text-center  text-2xl ">Your Bookmarked Recipes</h3>
        <div class="mt-24">

            <div v-if="Loading" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                <Skeleton v-for="n in 9" :key="n" />
            </div>
            <div v-else>

                <div v-if="foods.length > 0" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                    <FoodItem v-for="item in foods" :key="item.id" :recipe="item.recipe" />
                </div>
                <Empty v-else />
            </div>
            <div class="flex justify-center mt-12">
                <!-- Previous Button -->
                <button @click="handlePrev"
                    :class="page == 1 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100 hover:text-gray-700'"
                    :disabled="page == 1 ? true : false"
                    class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </button>
                <button @click="handleNext"
                    :class="pageLimit <= page ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100 hover:text-gray-700'"
                    :disabled="pageLimit <= page ? true : false"
                    class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Skeleton from '~/components/Showcase/Skeleton.vue';
import FoodItem from '~/components/Showcase/FoodItem.vue';
import Empty from '~/components/Food/Empty.vue';
import { GET_BOOKMARKED_RECIPES } from '~/helpers/queries/food';
const Loading = ref(true);
const offset = ref(0)
const page = ref(1)
const pageLimit = ref(0)
const limit = ref(9)

const foods = ref([])
const fetchFood = async () => {
    const { data } = await useAsyncQuery(GET_BOOKMARKED_RECIPES, { offset: offset.value, limit: limit.value })
    foods.value = data?._value?.bookmarks || []
    pageLimit.value = Math.ceil(data?._value?.bookmarks_aggregate?.aggregate.count / limit.value)
    console.log(data)

}
const handlePrev = () => {
    if (page.value >= 1) {
        offset.value -= limit.value;
        page.value--;
    } else {
        console.log("just clicked")
    }
}
const handleNext = () => {
    if (pageLimit.value > page.value) {
        offset.value += limit.value;
        page.value++;
    } else {
        console.log("not possible")
    }

}
onMounted(() => {
    fetchFood()
})
watch(offset, fetchFood, { immediate: true })
watch(foods, () => {
    setTimeout(() => {
        Loading.value = false;
    }, 1500);
}, { immediate: true })

</script>

<style scoped></style>