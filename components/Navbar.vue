<template>
    <header
        :class="changeHeader ? 'bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500' : 'bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500'">
        <nav class="flex items-center max-w-screen-xl mx-auto px-6 py-3">
            <!-- left -->
            <div class="flex flex-grow">
                <img class="w-36 cursor-pointer" :src="logo" alt="  logo" @click="navigateTo('/')" />
            </div>
            <!-- right -->
            <div v-if="user">
                <div class="flex items-center justify-end space-x-4">
                    <div class="relative flex cursor-pointer">
                        <Dropdown />
                    </div>
                    <User class="text-gray-700  w-10 h-10 rounded-full" />
                    <p class="text-gray-700 poppins hidden md:block lg:block">username</p>
                    <Logout class="cursor-pointer text-primary my-auto" @click="signOutUser" />
                </div>
            </div>
            <div v-else>
                <div class="flex items-center justify-end space-x-6">
                    <button class="poppins" @click="navigateTo('/signin')">Sign In</button>
                    <button
                        class="bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                        @click="navigateTo('/signup')">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Logout from './icons/Logout.vue';
import User from './icons/User.vue';
import Dropdown from './Dropdown.vue';
import logo from '@/static/assets/images/logo.png';

const changeHeader = ref(false);
const router = useRouter();
const user = ref(true)

const onChangeHeader = () => {
    if (window.scrollY >= 50) {
        changeHeader.value = true;
    } else {
        changeHeader.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', onChangeHeader);
});

const navigateTo = (path) => {
    router.push(path);
};
</script>

<style scoped>
/* Add any necessary styles */
</style>