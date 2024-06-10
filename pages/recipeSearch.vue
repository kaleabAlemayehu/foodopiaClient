<template>
    <div>
        <NavBar>
            <UserLogedIn />
        </NavBar>
        <div class="showcase flex justify-center items-center w-full h-[50dvh] bg-customOrang text-customWhite">
            <UserLogedIn class="mr-5" />Neo
        </div>
        <span class="my-14">8 recipes...</span>
        <div class="grid grid-cols-4 my-12 gap-8 mx-20">
            <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe">
                <NotOwned :recipe="recipe" />
            </Card>
        </div>
        <Footer />
    </div>
</template>

<script setup>
const query = gql`
        query MyQuery {
  recipes {
    avg_rating
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

`

const { data } = await useAsyncQuery(query)
const recipes = ref(data._rawValue.recipes)
</script>

<style scoped></style>