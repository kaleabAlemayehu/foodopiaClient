<template>
    <div>
        <Form class="max-w-2xl mx-auto my-16 transition duration-700 poppins">

            <div class="mb-5">
                <label for="title"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white poppins">Title</label>
                <Field as="input" type="text" name='title' id="title" rules="required|alphabetWithSpace"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Recipe Title" />
                <ErrorMessage name="title" class="err" />

            </div>
            <div class="mb-5">


                <label for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <Field id="description" rows="4" as="textarea" type="text" name='description'
                    rules="required|alphabetWithSpace"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe The Recipe..." />
                <ErrorMessage name="description" class="err" />
            </div>



            <div class="mb-5">

                <div v-for="ingredient, index in ingredients" :key="ingredient.id"
                    class=" mb-5 flex justify-evenly items-center gap-3 transition duration-700">
                    <div class="">
                        <label :for="ingredient.name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredients </label>
                        <input type="text" :id="ingredient.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :placeholder="`Ingredient ${index + 1}`">


                    </div>
                    <div class="">
                        <label :for="ingredient.amount"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount </label>
                        <div class="flex gap-4">

                            <input type="text" :id="ingredient.amount"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :placeholder="`Amount ${index + 1}`">
                            <Cross class="inline text-primary w-8 h-8 my-auto " @click="ingredients.pop()" />
                        </div>


                    </div>
                </div>
                <button type="button"
                    @click="ingredients.push({ name: 'test 1', amount: '2cups', id: ingredients.length })"
                    class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <Add class="inline w-6 h-6" /> &nbsp; &nbsp;
                    Add Ingredient
                </button>
            </div>
            <div class="mb-5">
                <div class="flex " v-for="instruction, index in instructions" :key="index">
                    <div class="w-full mb-5">
                        <label :for="index"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instruction
                            {{ index
                                + 1
                            }}</label>
                        <div class="flex gap-4">

                            <input type="text" :id="index"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :placeholder="`Instruction ${index + 1}`">
                            <Cross class="inline text-primary w-8 h-8 my-auto " @click="instructions.pop()" />
                        </div>


                    </div>

                </div>
                <button type="button" @click="instructions.push('')"
                    class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <Add class="inline w-6 h-6" /> &nbsp; &nbsp;
                    Add Instruction
                </button>
            </div>
            <div class="mb-5">
                <label for="preparationTime"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preparation
                    Time</label>
                <Field type="number" id="preparationTime" as="input" name='preparationTime' rules="required|integer"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Preparation Time" />
                <ErrorMessage name="preparationTime" class="err" />


            </div>
            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
                    file</label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" multiple type="file">
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Select Multiple
                    Picutures Of The Food, <span class="font-bold text-xs">The First Image Will Be Taken As ThumbNail
                        Image.</span></div>
            </div>
            <div class="mb-5">
                <label for="catagories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    Recipe Catagories</label>
                <select id="catagories"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Dessert</option>
                    <option>Drink</option>
                    <option>Snacks</option>
                    <option>Seasonal</option>

                </select>
            </div>
            <button type="submit" class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
            dark:focus:ring-red-900"> Submit

            </button>
        </Form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Add from '../icons/Add.vue';
import Cross from '../icons/Cross.vue';
import { configure, Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import { alpha_spaces, alpha_num, alpha_dash, required, integer } from '@vee-validate/rules';

onMounted(() => {
    configure({
        validateOnInput: true,
    })
    defineRule("required", required)
    defineRule("alphabetWithNum", alpha_num)
    defineRule("alphabetWithSpace", alpha_spaces)
    defineRule("alphabetWithDash", alpha_dash)
    defineRule("integer", integer)
})
const ingredients = ref([{
    id: 1,
    name: "test 1",
    amount: "2 cup"
},
{
    id: 2,
    name: "test 1",
    amount: "2 cup"
},
{
    id: 3,
    name: "test 1",
    amount: "2 cup"
},
{
    id: 4,
    name: "test 1",
    amount: "2 cup"
}

])
const instructions = ref(["test this  and this", "test that also"])
</script>

<style scoped>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>