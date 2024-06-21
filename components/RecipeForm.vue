<template>
    <form class="w-[60vw] mx-auto" @submit.prevent="onSubmit">
        <div class="my-5">
            <label for="title" class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Title</label>
            <input type="text" id="title" v-model="title" v-bind="titleAttrs"
                class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title ...">
            <div class="err">{{ errors.title }}</div>
        </div>

        <div class="mb-5">
            <label for="description"
                class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Description</label>
            <textarea id="description" rows="4" v-model="description" v-bind="descriptionAttrs"
                class="block p-2.5 w-full text-sm text-gray-900 bg-customWhite rounded-lg border border-customWhite focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-customOrang dark:focus:border-customOrang"
                placeholder="Description ..."></textarea>
            <div class="err">{{ errors.description }}</div>
        </div>
        <div class="mb-5">
            <label for="preparation" class="block mb-2 text-sm font-medium text-customBlack dark:text-white">preparation
                time</label>
            <input type="text" id="preparation" v-model="preparation" v-bind="preparationAttrs"
                class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Preparation time in minutes ...">
            <div class="err">{{ errors.preparation }}</div>
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="featuredImage">Upload
                Featured Picture</label>
            <input
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help" id="featuredImage" type="file" @change="handleFileChange">

            <div class="err">{{ errors.featureImage }}</div>
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="addtionalPic">Upload
                Addtional Picture</label>
            <input
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="addtionalOne" id="addtionalPic" type="file" @change="handleAddtional">
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="addtionalOne">
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
                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="`ingredient ${ing} ...`">
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
                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="`Instruction ${step} ...`">
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
        <button type="submit"
            class="text-white bg-customOrang hover:bg-customOrang focus:outline-none focus:ring-4 focus:ring-customWhitishOrange font-medium rounded-full text-sm px-5 py-2.5 text-center mx-auto mt-3 mb-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>



    </form>
</template>

<script setup>
const imageUpload = gql`mutation MyMutation($base64Str: String !, $name: String!) {
  imageUpload(name: $name, base64Str: $base64Str) {
    image_url
  }
}

`
import { reactive, ref } from 'vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useForm } from 'vee-validate';
import { useMutation } from '#imports';
import * as yup from "yup"
import { toTypedSchema } from '@vee-validate/yup';
const featuredImage = ref("");
const file = ref(null)
const addtionalOne = ref(null)
const fileUrl = ref(null)
const addtionalUrl = ref(null)
const base64Str = ref(null)
const addtionalBase64Str = ref(null)


const schema = toTypedSchema(yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    preparation: yup.number().required().positive().integer(),



}))
const { errors, defineField } = useForm(
    {
        validationSchema: schema,
    }
)

const [title, titleAttrs] = defineField("title");
const [description, descriptionAttrs] = defineField("description")
const [preparation, preparationAttrs] = defineField("preparation")


const uploadImage = async (image, base64Str) => {
    try {
        const variables = { name: image.name, base64Str: base64Str }
        const { mutate } = useMutation(imageUpload, { variables })
        const { data } = await mutate()
        if (data && data.imageUpload && data.imageUpload.image_url) {
            return data.imageUpload.image_url;
        } else {
            console.log('No image URL found in the response');
            return null;
        }
    } catch (er) {
        console.log(er)
        return null
    }
}


const handleFileChange = (event) => {
    file.value = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file.value);
    reader.onload = () => {
        base64Str.value = reader.result.split(',')[1]; // Remove the data URL part
    };
    reader.onerror = () => {
        console.log('Unable to parse file');
    };
}

const handleAddtional = (event) => {
    addtionalOne.value = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(addtionalOne.value);
    reader.onload = () => {
        addtionalBase64Str.value = reader.result.split(',')[1]; // Remove the data URL part
    };
    reader.onerror = () => {
        console.log('Unable to parse file');
    };
}


onMounted(() => {

    initFlowbite();
})

const onSubmit = async () => {
    fileUrl.value = await uploadImage(file.value, base64Str.value)
    addtionalUrl.value = await uploadImage(addtionalOne.value, addtionalBase64Str.value)
    console.log(fileUrl.value);
    console.log(addtionalUrl.value);
}

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
