<template>
    <div>
        <NavBar>
            <AnonUser />
        </NavBar>
        <ShowCase :recipe="recipe" />
        <Details :recipe="recipe" />
        <div class="w-[60%] mx-auto flex flex-col mb-8">
            <p class="mb-12 text-xl">Comments...</p>
            <div v-for="comment in comments" :key="comment">

                <CommentCard :btn="comment.btn" :dot="comment.dot" />
            </div>

        </div>
        <CommentForm />

        <Footer />
    </div>
</template>

<script setup>
import { ref } from "vue";
import AnonUserVue from "~/components/AnonUser.vue";
import NavBarVue from "~/components/NavBar.vue";
import UserLogedIn from "~/components/UserLogedIn.vue";
import ShowCase from "~/components/ShowCase.vue"
import Details from "~/components/Details.vue";
import Footer from "~/components/Footer.vue";
import CommentForm from "../../components/CommentForm.vue";
import CommentCard from "~/components/CommentCard.vue";
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
const comments = ref([{ btn: "btn1", dot: "dot1" },
{ btn: "btn2", dot: "dot2" },
{ btn: "btn3", dot: "dot3" },
{ btn: "btn4", dot: "dot4" },
{ btn: "btn5", dot: "dot5" },
])
onMounted(() => {
    initFlowbite();
})
const query = gql`query MyQuery($id: Int!, $_eq: Int!, $_eq1: Int!, $_eq2: Int!, $_eq3: Int = 10) {
  recipes_by_pk(id: $id) {
    avg_rating
    category_id
    description
    featured_image_url
    prep_time
    title
    user {
      username
    }
    ingredients(where: {recipe_id: {_eq: $_eq}}) {
      name
      quantity
    }
    comments(where: {recipe_id: {_eq: $_eq1}}) {
      comment
      rating
      user {
        username
      }
    }
    recipe_images(where: {recipe_id: {_eq: $_eq2}}) {
      image_url
    }
    steps(where: {recipe_id: {_eq: $_eq3}}, order_by: {step_order: asc}) {
      step_order
      description
      id
    }
  }
}
`


const route = useRoute();
const recipeId = ref(route.params.id)
const { data } = await useAsyncQuery(query, { id: recipeId, _eq: recipeId, _eq1: recipeId, _eq2: recipeId, _eq3: recipeId })
const recipe = ref(data._rawValue.recipes_by_pk)

</script>

<style></style>
