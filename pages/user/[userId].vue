<template>
    <div>
        <NavBar>
            <UserLogedIn :recipe="recipes[0]" />
            <button type="button"
                class="relative top-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ">Logout</button>
        </NavBar>
        <div class="flex   h-[86dvh] mb-28">
            <div class="dashboard grid grid-cols-[1fr_3fr] grid-rows-4 w-full h-full m-10 rounded-lg bg-customGray">
                <div
                    class="menu row-span-4  h-full w-full bg-customBlack rounded-lg text-customWhite grid grid-rows-4 text-lg  ">
                    <div class="home flex justify-center items-center text-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 1 ? true : false }" @click="changeCurrent" data-id="1">

                        <span class="menuItem " data-id="1">Home</span>
                    </div>
                    <div class="edit  flex justify-center items-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 2 ? true : false }" @click="changeCurrent" data-id="2">

                        <span class="menuItem" data-id="2">Edit</span>
                    </div>
                    <div class="create  flex justify-center items-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 3 ? true : false }" @click="changeCurrent" data-id="3">
                        <span class="menuItem" data-id="3">Create</span>
                    </div>
                    <div class="bookmarked  flex justify-center items-center cursor-pointer transition-colors duration-600"
                        :class="{ isCurrent: isCurrent == 4 ? true : false }" @click="changeCurrent" data-id="4">

                        <span class="menuItem ml-9" data-id="4">Bookmarked</span>
                    </div>
                </div>


                <div class="content row-span-4 flex justify-center items-center overflow-auto">
                    <div v-if="isCurrent == 1" class="homeContent grid grid-cols-[350px_350px_350px] gap-10 my-auto ">
                        <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                            <Owned :recipe="recipe" />
                        </Card>
                    </div>
                    <div class="my-auto" v-else-if="isCurrent == 2">
                        <Form />
                    </div>
                    <div class="my-auto" v-else-if="isCurrent == 3">
                        <Form />
                    </div>
                    <div v-if="isCurrent == 4" class="homeContent grid grid-cols-[350px_350px_350px] gap-10 my-auto ">
                        <Card v-for="bookmarked in bookmarkedRecipe" :key="bookmarked.recipe.id"
                            :recipe="bookmarked.recipe">
                            <NotOwned :recipe="bookmarked.recipe" />
                        </Card>
                    </div>

                </div>



            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from "vue"
import NavBar from '~/components/NavBar.vue';
import AnonUser from '~/components/AnonUser.vue';
import Owned from "~/components/Owned.vue";
import Card from "~/components/Card.vue";
import Form from "~/components/Form.vue";
import Footer from "~/components/Footer.vue";
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})
const isCurrent = ref(1);
const changeCurrent = (e) => {
    isCurrent.value = e.target.dataset.id;
}
const query = gql`query MyQuery($_eq: Int!) {
  recipes(where: {user_id: {_eq: $_eq}}) {
        id
        featured_image_url
        description
        title
        prep_time
        user_id
        total_likes
        total_comments
        avg_rating
        user {
          username
          id
        }
  }
}`;
const bookmarkedQuery = gql`query MyQuery($_eq: Int!) {
  bookmarks(where: {user_id: {_eq: $_eq}}) {
    recipe {
      avg_rating
      category_id
      description
      featured_image_url
      id
      prep_time
      title
      total_comments
      total_likes
      user {
        username
        id
      }
    }
  }
}

`


onMounted(async () => {
    initFlowbite();

})
const route = useRoute();
const userId = ref(route.params.userId)
const { data } = await useAsyncQuery(query, { _eq: userId, })
const { data: bookmarkedData } = await useAsyncQuery(bookmarkedQuery, { _eq: userId, });
// // console.log(data._rawalue.recipes);
// console.log(bookmarkedData._rawValue.bookmarks);
const bookmarkedRecipe = ref(bookmarkedData._rawValue.bookmarks)
const recipes = ref(data._rawValue.recipes)

</script>

<style>
.number {
    @apply p-5 px-[1.81rem] border-customGolden border-[0.5px] rounded-full absolute left-24;
}

.isCurrent {
    @apply text-customGray bg-customOrang;
}
</style>