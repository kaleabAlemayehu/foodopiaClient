<template>
    <div class=" my-16 py-12  max-w-screen-xl mx-auto px-6">

        <form class="flex items-center max-w-xl mx-auto mb-16 mt-8">
            <ModalFilter @filter="handleFilter" />

            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FoodIcon class="text-primary" />
                </div>
                <input type="text" id="text" name="text" @input="search" v-model="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Search A Recipe By Title..." />
            </div>

            <button type="button" @click="fetchFood"
                class="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-full border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </form>
        <div v-if="loading" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
            <Skeleton v-for="n in 9" :key="n" />
        </div>
        <div v-else>
            <div v-if="foods.length && !loading" class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                <FoodItem v-for="item in foods" :key="item.id" :recipe="item" />
            </div>
            <Empty v-else />
        </div>
        <div class="flex mt-12 justify-center">
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
</template>

<script setup>
import ModalFilter from '../../components/Form/ModalFilter.vue';
import FoodIcon from '../../components/icons/FoodIcon.vue';
import Skeleton from '~/components/Showcase/Skeleton.vue';
import FoodItem from '~/components/Showcase/FoodItem.vue';
import Empty from '~/components/Food/Empty.vue';

import { initModals } from 'flowbite';
import { onMounted } from 'vue';
import { GET_FILTERED_RECIPES } from '~/helpers/queries/food';
const foods = ref([])
const loading = ref(true)
const offset = ref(0)
const page = ref(1)
const pageLimit = ref(0)
const limit = ref(9)
const userIds = ref([])
const ingIds = ref([])
const minTime = ref(0)
const maxTime = ref(300)
const { query } = useRoute()
const title = query.title

const { onResult, onError, refetch } = useQuery(GET_FILTERED_RECIPES, {
    limit: limit.value,
    offset: offset.value,
    userIds: userIds.value,
    maxTime: maxTime.value,
    minTime: minTime.value,
    ingIds: ingIds.value,
    title: title,
})
onResult(({ data }) => {

    foods.value = data?.recipes || []
    pageLimit.value = Math.ceil(data?.recipes_aggregate?.aggregate.count / limit.value)
})
onError(err => {
    console.log(err)
})
refetch({
    limit: limit.value,
    offset: offset.value,
    userIds: userIds.value,
    maxTime: maxTime.value,
    minTime: minTime.value,
    ingIds: ingIds.value,
    title: title,
})

const fetchFood = async () => {

    const { onResult, onError, refetch } = useQuery(GET_FILTERED_RECIPES, {
        limit: limit.value,
        offset: offset.value,
        userIds: userIds.value,
        maxTime: maxTime.value,
        minTime: minTime.value,
        ingIds: ingIds.value,
    })
    onResult(({ data }) => {
        foods.value = data?.recipes || []
        pageLimit.value = Math.ceil(data?.recipes_aggregate?.aggregate.count / limit.value)

    })
    onError(err => {
        console.log(err)
    })
    refetch({
        limit: limit.value,
        offset: offset.value,
        userIds: userIds.value,
        maxTime: maxTime.value,
        minTime: minTime.value,
        ingIds: ingIds.value,
    })


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
        console.log(foods.value)
    } else {
        console.log("not possible")
    }

}
onMounted(() => {
    initModals()
    fetchFood()
})
const handleFilter = (parameter) => {
    ingIds.value = parameter.ingredientsId
    userIds.value = parameter.usersId
    maxTime.value = parameter.maxTime
    minTime.value = parameter.minTime
    fetchFood()
}

watch(offset, () => {
    loading.value = true;
    fetchFood()
    setTimeout(() => {
        loading.value = false;

    }, 1500);
}, { immediate: true })
watch(foods, () => {
    setTimeout(() => {
        loading.value = false;
    }, 1500);
}, { immediate: true })


</script>

<style lang="scss" scoped></style>