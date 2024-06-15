<template>
    <form class="w-[60vw] mx-auto">
        <div class="my-5">
            <label for="title" class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Title</label>
            <input type="text" id="title" v-model="title" v-bind="titleAttrs"
                class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="err">{{ errors.title }}</div>
        </div>

        <div class="mb-5">
            <label for="description"
                class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Description</label>
            <textarea id="description" rows="4" v-model="description" v-bind="descriptionAttrs"
                class="block p-2.5 w-full text-sm text-gray-900 bg-customWhite rounded-lg border border-customWhite focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-customOrang dark:focus:border-customOrang"
                placeholder="Leave a comment..."></textarea>
            <div class="err">{{ errors.description }}</div>
        </div>
        <div class="mb-5">
            <label for="preparation"
                class="block mb-2 text-sm font-medium text-customBlack dark:text-white">preparation</label>
            <input type="text" id="preparation"
                class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="primaryPicture">Upload
                Primary Picture</label>
            <input
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help" id="primaryPicture" type="file">
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Primary
                Picture</div>
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="addtionalPic">Upload
                Addtional Picture</label>
            <input
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="addtionalOne" id="addtionalPic" type="file">
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="addtionalOne">
                Addtional Picture</div>
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="addtionalPic2">Upload
                Addtional Picture</label>
            <input
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite 50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="addtionalTwo" id="primaryPicture" type="file">
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="addtionalTwo">
                Addtional Picture</div>
        </div>


        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">BreakFast</span>
        </label>
        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="lunch" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lunch</span>
        </label>
        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="dinner" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dinner</span>
        </label>
        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="dessert" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dessert</span>
        </label>
        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="drinks" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Drinks</span>
        </label>
        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="snacks" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Snacks</span>
        </label>
        <label class="inline-flex items-center mb-5 cursor-pointer mx-5">
            <input type="checkbox" value="seasonal" class="sr-only peer">
            <div
                class="relative w-11 h-6 bg-customWhite peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-customWhitishOrange dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-customOrang transition-all">
            </div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Seasonal</span>
        </label>
        <div class="my-5">
            <div class="my-5" v-for="ing in ings" :key="ing">
                <label :for="`ing${ing}`"
                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">ingredient
                    <span class="text-xs text-gray-500 dark:text-gray-300">(separate amount by
                        hyphen)</span></label>
                <input type="text" id="`ing${ing}`"
                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <button type="button" @click="add(ings)"
                class="text-white bg-customOrang hover:bg-customOrang focus:ring-4 focus:outline-none focus:ring-customWhitishOrange font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Icon name="mi:add" />
            </button>
            <button type="button" @click="remove(ings)"
                class="text-white bg-customOrang hover:bg-customOrang focus:ring-4 focus:outline-none focus:ring-customWhitishOrange font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Icon name="mi:remove" />
            </button>
        </div>
        <div class=" mb-5">

            <div class="my-5" v-for="step in steps" :key="step">
                <label :for="`step${step}`"
                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Instruction
                    {{ step }}</label>
                <input type="text" :id="`step${step}`"
                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <button type="button" @click="add(steps)"
                class="text-white bg-customOrang hover:bg-customOrang focus:ring-4 focus:outline-none focus:ring-customWhitishOrange font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Icon name="mi:add" />
            </button>
            <button type="button" @click="remove(steps)"
                class="text-white bg-customOrang hover:bg-customOrang focus:ring-4 focus:outline-none focus:ring-customWhitishOrange font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Icon name="mi:remove" />
            </button>
        </div>
        <button type="button"
            class="text-white bg-customOrang hover:bg-customOrang focus:outline-none focus:ring-4 focus:ring-customWhitishOrange font-medium rounded-full text-sm px-5 py-2.5 text-center mx-auto mt-3 mb-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>



    </form>
</template>

<script setup>
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useForm } from 'vee-validate';
import * as yup from "yup"
import { toTypedSchema } from '@vee-validate/yup';

const schema = toTypedSchema(yup.object({
    title: yup.string().required(),
    description: yup.string().required(),

}))
const { errors, defineField } = useForm(
    {
        validationSchema: schema,
    }
)

const [title, titleAttrs] = defineField("title");
const [description, descriptionAttrs] = defineField("description");

onMounted(() => {
    initFlowbite();
})
const ings = reactive([1, 2, 3])

const steps = reactive([1, 2, 3])
const remove = (value) => {
    value.pop()
}
const add = (value) => {
    value.push(value.length + 1)
}
</script>

<style>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>