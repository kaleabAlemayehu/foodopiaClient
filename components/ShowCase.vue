<template>
    <div>
        <div class="showcase flex justify-center items-center h-full w-full relative top-0 pb-10">
            <div class="prompt w-[80%]  mt-12">
                <div class="image  inline-block relative min-w-[80vw] max-h-[30%] ">
                    <!-- TODO : whenFetch add asset here -->
                    <img src="@/static/assets/images/showcase.jpg" alt="showcaseImage"
                        class="block w-full h-[40rem] object-cover rounded-2xl shadow-md">
                    <!-- end:TODO -->
                </div>
                <div class="title">
                    <span class="recipeTitle">Lorem ipsum dolor sit amet consectetur</span>

                </div>
                <div class="user">
                    <UserLogedIn />
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
:root {
    @apply box-border;
}

.recipeTitle {
    @apply text-6xl bg-customWhite text-customBlack break-all font-medium;
}

.title {
    @apply absolute top-80 left-32 w-[30rem];
}

.user {
    @apply absolute top-20 right-64 flex justify-center items-center;
}
</style>