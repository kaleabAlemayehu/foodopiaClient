<template>
    <Form class="w-[60vw] mx-auto" v-slot="{ errors, values }" @submit="onSubmit">
        <div class="my-5">
            <label for="title" class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Title</label>
            <Field as="input" type="text" name='title' id="title" rules="required"
                class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title ..." />
            <ErrorMessage class="err" name="title" />
        </div>

        <div class="mb-5">
            <label for="description"
                class="block mb-2 text-sm font-medium text-customBlack dark:text-white">Description</label>
            <Field as='textarea' name='description' rules="required" id="description" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-customWhite rounded-lg border border-customWhite focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-customOrang dark:focus:border-customOrang"
                placeholder="Description ..." />
            <ErrorMessage name="description" class="err" />
        </div>
        <div class=" mb-5">
            <label for="preparation" class="block mb-2 text-sm font-medium text-customBlack dark:text-white">preparation
                time</label>
            <Field as="input" type="text" id="preparation" name="preparation" rules="required|integer"
                class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Preparation time in minutes ..." />
            <ErrorMessage name="preparation" class="err" />
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="featuredImage">Upload
                Featured Picture</label>
            <Field as="input" name="featuredImage" rules="required|image|size:2500"
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help" id="featuredImage" type="file" @change="handleFileChange" />

            <ErrorMessage name="featuredImage" class="err" />
        </div>
        <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-customBlack dark:text-white" for="addtionalPic">Upload
                Addtional Picture</label>
            <Field name='additionalImage' rules="image|size:2500"
                class="block w-full text-sm text-customBlack border border-gray-300 rounded-lg cursor-pointer bg-customWhite dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="addtionalOne" id="addtionalPic" type="file" @change="handleAddtional" />
            <ErrorMessage class="err" name="additionalImage" />
        </div>

        <!-- <div class="my-5">
            <div class="my-5" v-for="ing, index in ings" :key="ing.name">
                <label :for="ing.label"
                    class="block mb-2 text-sm font-medium text-customBlack dark:text-white">ingredient
                    <span class="text-xs text-gray-500 dark:text-gray-300">(separate amount by
                        hyphen)</span></label>
                <input type="text" :id="ing.label"
                    class="block w-full p-4 text-gray-900 border border-customGray rounded-lg bg-customWhite text-base focus:ring-customOrang focus:border-customOrang dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="`ingredient ${index} ...`" v-model="ing.name">
            </div>
            <button type="button" @click="addIng"
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
        </div> -->
        <button type="submit"
            class="text-white bg-customOrang hover:bg-customOrang focus:outline-none focus:ring-4 focus:ring-customWhitishOrange font-medium rounded-full text-sm px-5 py-2.5 text-center mx-auto mt-3 mb-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>

        <h2>VeeValidate Info</h2>
        <div>
            <b>VeeValidate values:</b>
            <pre>{{ values }}</pre>
        </div>
        <div>
            <b>VeeValidate errors:</b>
            <pre>{{ errors }}</pre>
        </div>

    </Form>
</template>

<script>
import { reactive, ref, onMounted, defineComponent } from 'vue';
import { initFlowbite } from 'flowbite';
import { configure, ErrorMessage, Form, Field, defineRule } from 'vee-validate';
import { useMutation } from '#imports';
import { integer, required, image, size, email } from '@vee-validate/rules';
export default defineComponent({
    name: "RecipeForm",
    setup() {


        const imageUpload = gql`mutation MyMutation($base64Str: String !, $name: String!) {
                 imageUpload(name: $name, base64Str: $base64Str) {
                image_url
        }
        }`

        const file = ref(null)
        const addtionalOne = ref(null)
        const fileUrl = ref(null)
        const addtionalUrl = ref(null)
        const base64Str = ref(null)
        const addtionalBase64Str = ref(null)

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
            configure({
                validateOnInput: true,
            });
            defineRule("required", required)
            defineRule("email", email)
            defineRule("size", size)
            defineRule("integer", integer)
            defineRule("image", image)
        })

        const onSubmit = async (value) => {
            alert(JSON.stringify(value, null, " "))
        }
        // const ings = ref([{
        //     name: "ing1",
        //     label: "Ing 1",
        //     rules: { required }
        // }])
        // const ingValues = reactive({
        //     ing1: ''
        // })

        // const addIng = () => {
        //     const newIndex = ings.value.length + 1;
        //     const ingName = `ing${newIndex}`;
        //     ings.value.push({
        //         name: ingName,
        //         label: `Ing ${newIndex}`,
        //         rules: { required }
        //     })
        //     ingValues[ingName] = '';
        //     defineField(ingName, ingValues[ingName], { required })
        // }
        // ings.value.forEach(ing => {
        //     defineField(ing.name, ingValues[ing.name], ing.rules)
        // })

        // const steps = reactive([1, 2, 3])
        // const remove = (value) => {
        //     value.pop()
        // }
        // const add = (value) => {
        //     value.push(value.length + 1)
        // }

        return {
            onSubmit,
            handleAddtional,
            handleFileChange,
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
    }
});

</script>

<style>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>
