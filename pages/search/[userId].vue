<template>
  <div>
    <NavBar>
      <UserLogedIn :recipe="recipes[0]" />
    </NavBar>
    <NuxtLink :to="`/user/${recipes[0].user.id}`"
      class="showcase flex justify-center items-center w-full h-[50dvh] bg-customOrang text-customWhite">
      <UserLogedIn :recipe="recipes[0]" class="mr-5" />{{ recipes[0].user.username }}
    </NuxtLink>
    <span class="my-14">{{ recipes.length }} recipes...</span>
    <div class="grid grid-cols-4 my-12 gap-8 mx-20">
      <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
        <NotOwned :recipe="recipe" />
      </Card>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const query = gql`query MyQuery($_eq: Int!) {
  recipes(where: {user: {id: {_eq: $_eq}}}) {
    id
    featured_image_url
    description
    category_id
    avg_rating
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
`;
const route = useRoute();
const userId = ref(route.params.userId);
const { data } = await useAsyncQuery(query, { _eq: userId, })
const recipes = ref(data._rawValue.recipes)
console.log(recipes.value[0])
</script>

<style scoped></style>