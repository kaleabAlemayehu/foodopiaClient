<template>
    <header :class="{
        'bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-200': changeHeader
    }" class='bg-transparent fixed z-50 top-0 left-0 w-full transition duration-700'>
        <nav class=" flex items-center max-w-screen-xl mx-auto px-6 py-3">
            <!-- left -->
            <div class="flex flex-grow">
                <img class="w-36 cursor-pointer" :src="logo" alt="  logo" @click="navigateTo('/')" />
            </div>
            <!-- right -->
            <div v-if="user">
                <div class="flex items-center justify-end space-x-4">
                    <div class="relative flex cursor-pointer">
                        <Dropdown :change-header="changeHeader" />
                    </div>
                    <NuxtLink to="/foods" class="cursor-pointer">


                        <User class="text-gray-800  w-10 h-10 rounded-full transition-colors duration-500" />

                    </NuxtLink>
                    <NuxtLink to="/foods" class="cursor-pointer">

                        <p class=' text-gray-800 poppins hidden md:block lg:block transition-colors duration-500'>
                            {{ user.username }} </p>

                    </NuxtLink>
                    <Logout class="cursor-pointer text-primary my-auto" @click="signOutUser" />
                </div>
            </div>
            <div v-else>
                <div class="flex items-center justify-end space-x-6">
                    <button class=" text-gray-800 poppins ransition duration-500"
                        @click="navigateTo('/auth/signin')">Sign In</button>
                    <button
                        class="bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                        @click="navigateTo('/auth/signup')">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Logout from '../icons/Logout.vue';
import User from '../icons/User.vue';
import Dropdown from './Dropdown.vue';
import logo from '@/static/assets/images/logo.png';
import { jwtDecode } from 'jwt-decode';
const changeHeader = ref(false);
const router = useRouter();
const { path } = useRoute();
const user = ref(false)

const isHome = ref(true)

if (path == '/') {
    isHome.value = true

} else {
    isHome.value = false
}
const signOutUser = () => {
    const token = useCookie("token")
    token.value = null;
    user.value = false;
    console.log("It clicked")
    navigateTo("/")
}

const handleScroll = () => {
    let bodyPosition = document.body.getBoundingClientRect().top;

    if (bodyPosition < -70) {
        changeHeader.value = true;
    } else {
        changeHeader.value = false;
    }
};

onMounted(() => {
    document.addEventListener("scroll", handleScroll);
    const token = useCookie("token")
    if (token.value && token.value !== null) {
        user.value = jwtDecode(token.value)
    } else {
        user.value = false;
    }

});

onBeforeUnmount(() => {
    document.removeEventListener("scroll", handleScroll);
});




</script>

<style scoped>
/* Add any necessary styles */
</style>