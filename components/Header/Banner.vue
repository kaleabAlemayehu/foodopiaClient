<template>
    <section class="header-banner h-96 w-full bg-white ">
        <div
            class="flex flex-col items-center justify-center h-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-200">
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-white">
                Best food waiting for your belly
            </h1>

            <div
                class="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300  focus:ring-4 w-96 flex items-center">
                <input type="text" v-model="input"
                    class="rounded-full px-4 focus:!outline-none focus:!border-none focus:ring-0 !border-none !outline-none focus:shadow-none w-full bg-transparent"
                    placeholder="Search here ......." />

                <button @click="handleSearch()"
                    class="text-sm bg-primary py-3 px-6 rounded-full text-white poppins focus:border-none focus:outline-none   ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
                    Search
                </button>
            </div>


        </div>
    </section>
</template>

<script setup>
const input = defineModel()
const handleSearch = () => {
    const router = useRouter()
    router.push({ path: "/foods/search", query: { title: input.value } })
}

// No additional setup needed for this example
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>