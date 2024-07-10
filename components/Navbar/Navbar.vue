<template>
    <header :class="{
        'bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-200': changeHeader
    }" class='bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500'>
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
                    <User :class='changeHeader ? "text-gray-700" : "text-white"'
                        class=" w-10 h-10 rounded-full ransition duration-500" />
                    <p :class="changeHeader ? 'text-gray-700' : 'text-white'"
                        class=' poppins hidden md:block lg:block ransition duration-500'>
                        username </p>
                    <Logout class="cursor-pointer text-primary my-auto" @click="signOutUser" />
                </div>
            </div>
            <div v-else>
                <div class="flex items-center justify-end space-x-6">
                    <button :class="changeHeader ? 'text-gray-700' : 'text-white'"
                        class="poppins ransition duration-500" @click="navigateTo('/')">Sign In</button>
                    <button
                        class="bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                        @click="navigateTo('/')">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Logout from '../icons/Logout.vue';
import User from '../icons/User.vue';
import Dropdown from './Dropdown.vue';
import logo from '@/static/assets/images/logo.png';

const changeHeader = ref(false);
const router = useRouter();
const user = ref(false)



const signOutUser = () => {
    console.log()
}

const handleScroll = () => {
    let bodyPosition = document.body.getBoundingClientRect().top;
    console.log(bodyPosition)

    if (bodyPosition < -50) {
        changeHeader.value = true;
    } else {
        changeHeader.value = false;
    }
};

onMounted(() => {
    document.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    document.removeEventListener("scroll", handleScroll);
});


const navigateTo = (path) => {
    router.push(path);
};
</script>

<style scoped>
/* Add any necessary styles */
</style>