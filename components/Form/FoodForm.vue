<template>
    <div>
        <Form class="max-w-2xl mx-auto my-16 transition duration-700 poppins" :initial-values="initialValues">

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
                <FieldArray name="ingredients" v-slot="{ fields, push, remove }">
                    <div v-for="entry, index in fields" :key="index"
                        class=" mb-5 flex justify-evenly items-center gap-3 transition duration-700">
                        <div class="">
                            <label :for="`ingredient${index}.name`"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredient {{ index
                                    + 1
                                }}
                            </label>
                            <Field type="text" :id="`ingredient${index}.name`" :name="`ingredients[${index}].name`"
                                as="input" rules="required"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :placeholder="`Ingredient ${index + 1}`" />
                            <ErrorMessage :name="`ingredients[${index}].name`" class="err" />
                        </div>
                        <div class="">
                            <label :for="`ingredients[${index}].amount`"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount {{ index + 1
                                }}
                            </label>
                            <div class="flex gap-4">

                                <Field as="input" :name="`ingredients[${index}].amount`" type="text"
                                    :id="`ingredients[${index}].amount`" rules="required"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="`Amount ${index + 1}`" />
                                <Cross class="inline text-primary w-8 h-8 my-auto " @click="remove(index)" />
                            </div>
                            <ErrorMessage :name="`ingredients[${index}].amount`" class="err" />


                        </div>
                    </div>
                    <button type="button" @click="push({})"
                        class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <Add class="inline w-6 h-6" /> &nbsp; &nbsp;
                        Add Ingredient
                    </button>
                </FieldArray>
            </div>
            <div class="mb-5">
                <FieldArray name="instructions" v-slot="{ fields, push, remove }">

                    <div class="flex " v-for="entry, index in fields" :key="index">
                        <div class="w-full mb-5">
                            <label :for="`instructions[${index}].name`"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instruction
                                {{ index
                                    + 1
                                }}</label>
                            <div class="flex gap-4">

                                <Field type="text" :id="`instructions[${index}].name`" as="textarea"
                                    :name="`instructions[${index}].name`" rules="required"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="`Instruction ${index + 1}`" />
                                <Cross class="inline text-primary w-8 h-8 my-auto " @click="remove(index)" />
                            </div>
                            <ErrorMessage :name="`instructions[${index}].name`" class="err" />

                        </div>

                    </div>
                    <button type="button" @click="push({})"
                        class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <Add class="inline w-6 h-6" /> &nbsp; &nbsp;
                        Add Instruction
                    </button>
                </FieldArray>
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
                <Field as="input" name="images" rules="required|image|size:1500"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" multiple type="file" />
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Select Multiple
                    Picutures Of The Food, <span class="font-bold text-xs">The First Image Will Be Taken As
                        ThumbNail
                        Image.</span></div>
                <ErrorMessage name="images" class="err" />
            </div>
            <div class="mb-5">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    Recipe Catagory</label>
                <Field id="category" as="select" name="category" rules="required"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" disabled>Select Food Category</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drink">Drink</option>
                    <option value="Snack">Snack</option>
                    <option value="Seasonal">Seasonal</option>

                </Field>
                <ErrorMessage name="category" class="err" />
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
import { configure, Form, Field, ErrorMessage, defineRule, FieldArray } from 'vee-validate';
import { alpha_spaces, alpha_num, alpha_dash, required, integer, image, size } from '@vee-validate/rules';
import Ingredients from '../Food/Ingredients.vue';

onMounted(() => {
    configure({
        validateOnInput: true,
    })
    defineRule("required", required)
    defineRule("alphabetWithNum", alpha_num)
    defineRule("alphabetWithSpace", alpha_spaces)
    defineRule("alphabetWithDash", alpha_dash)
    defineRule("integer", integer)
    defineRule("image", image)
    defineRule("size", size)
})
const initialValues = {

    ingredients: [{
        name: '',
        amount: ''
    }, {
        name: '',
        amount: ''
    },],
    instructions: [
        {
            name: ""
        },
        {
            name: ""
        }
    ]
}
const instructions = ref(["test this  and this", "test that also"])
</script>

<style scoped>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>