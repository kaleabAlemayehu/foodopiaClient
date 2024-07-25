<template>
    <div>
        <Form class="max-w-2xl mx-auto my-16 transition duration-700 poppins" :initial-values="initialValues"
            @submit="onSubmit">

            <div class=" mb-5">
                <label for="title"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white poppins">Title</label>
                <Field as="input" type="text" name='title' id="title" rules="required"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Recipe Title" />
                <ErrorMessage name="title" class="err" />

            </div>
            <div class="mb-5">


                <label for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <Field id="description" rows="4" as="textarea" type="text" name='description' rules="required"
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
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">In Minutes</div>
                <ErrorMessage name="preparationTime" class="err" />
            </div>
            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="thumbnail">Upload
                    ThumbNail
                    Image</label>
                <Field as="input" name="thumbnail" rules="required" @change="handleThumbNail"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="thumbnail" type="file" accept="image/*" />
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">ThumbNail Image </div>
                <ErrorMessage name="thumbnail" class="err" />
                <div class="flex flex-wrap justify-center items-center" id="image_preview"
                    v-if="thumbnailImage && thumbnailImage.length > 0">
                    <div v-for="(image, index) in thumbnailImage" :key="index" class="relative w-1/2 p-2">
                        <img :src="image.url" class="w-full h-auto object-cover rounded" :alt="image.name" />

                        <div
                            class="absolute inset-0 flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  opacity-0 hover:opacity-100 transition-opacity duration-500">
                            <button class="text-white bg-trasparent p-2 rounded" @click="removeThumbNail(index)">
                                <Cancle class="w-8 h-8 bg-transparent" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
                    Image</label>
                <Field as="input" name="images" rules="required" @change="handleFileChange"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" multiple type="file" accept="image/*" />
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Select Multiple
                    Picutures Of The Food As You Want!</div>
                <ErrorMessage name="images" class="err" />
                <div class="flex flex-wrap" id="image_preview" v-if="images && images.length > 0">
                    <div v-for="(image, index) in images" :key="index" class="relative w-1/2 p-2">
                        <img :src="image.url" class="w-full h-auto object-cover rounded" :alt="image.name" />

                        <div
                            class="absolute inset-0 flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  opacity-0 hover:opacity-100 transition-opacity duration-500">
                            <button class="text-white bg-trasparent p-2 rounded" @click="removeImage(index)">
                                <Cancle class="w-8 h-8 bg-transparent" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-5">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    Recipe Catagory</label>
                <Field id="category" as="select" name="category" rules="required"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" disabled>Select Food Category</option>
                    <option :value="1">Breakfast</option>
                    <option :value="2">Lunch</option>
                    <option :value="3">Dinner</option>
                    <option :value="4">Dessert</option>
                    <option :value="5">Snack</option>
                    <option :value="6">Drink</option>
                    <option :value="7">Seasonal</option>

                </Field>
                <ErrorMessage name="category" class="err" />
            </div>
            <div v-if="error" class="mb-5 err text-center">
                {{ error }}

            </div>
            <button type="submit" @click="legit = true" class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300
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
import Cancle from '../icons/Cancle.vue';
import { jwtDecode } from 'jwt-decode';
import { CREATE_FOOD, UPLOAD_IMAGE, INSERT_INGREDIENT, INSERT_INSTRUCTION, INSERT_IMAGE, DELETE_RECIPE } from '~/helpers/queries/food';
import { image } from '@vee-validate/rules';
const props = defineProps(["recipe"])


const legit = ref(false)
const temparedThumb = ref(false)
const temparedImages = ref(false)
const imageUrls = ref([])
const thumbnailUrl = ref()
const error = ref(false)
const count = ref(0)
const initialValues = {
    title: props?.recipe?.title || "",
    description: props?.recipe?.description || "",
    preparationTime: props?.recipe?.prep_time || "",
    category: props?.recipe?.category_id || "",

    ingredients: props?.recipe?.ingredients?.map((ingredient => {
        return {
            name: ingredient.name,
            amount: ingredient.quantity
        }
    })) || [{ name: "", quantity: "" }, { name: "", quantity: "" }],
    instructions: props?.recipe?.steps?.map((instruction) => {
        return {
            name: instruction.description
        }
    }) || [{ name: "" }, { name: "" }],
    images: props?.recipe ? "image" : "",
    thumbnail: props?.recipe ? "image" : "",

}
const user = ref(false)
const images = ref(props?.recipe?.recipe_images?.filter((image) => !image.is_featured).map((image) => {
    if (!image.is_featured) {
        return {
            name: image.image_url,
            url: image.image_url,
        }
    }
}) || [])
const thumbnailImage = ref(props?.recipe?.featured_image_url ? [{ name: props.recipe.featured_image_url, url: props.recipe.featured_image_url }] : [])
const handleThumbNail = (event) => {
    temparedThumb.value = true
    const files = Array.from(event.target.files);
    thumbnailImage.value = files.map((file) => {
        const obj = {
            name: file.name,
            url: URL.createObjectURL(file),
            file,
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            obj.base64 = reader.result.split(',')[1]; // Remove the data URL part
        };
        reader.onerror = () => {
            console.log('Unable to parse file');
        };

        return obj;

    });
    console.log("conditon", Object.keys(thumbnailImage.value[0]).includes("base64"))
}
const handleFileChange = (event) => {
    temparedImages.value = true
    const files = Array.from(event.target.files);
    images.value = files.map((file) => {
        const obj = {
            name: file.name,
            url: URL.createObjectURL(file),
            file,
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            obj.base64 = reader.result.split(',')[1]; // Remove the data URL part
        };
        reader.onerror = () => {
            console.log('Unable to parse file');
        };

        return obj;

    })
};
const removeImage = (index) => {
    console.log("imagebefore", images.value)
    console.log("image", images.value[index])
    images.value.splice(index, 1);

    console.log("imageafter", images.value)
};
const removeThumbNail = (index) => {
    thumbnailImage.value.splice(index, 1);
};
const route = useRoute();
const recipeId = route.query.recipeId;



const onSubmit = async (values, { resetForm }) => {
    const route = useRoute()
    const page = route.path
    if (page == "/foods/create") {




        if (values.instructions.length && values.ingredients.length) {
            thumbnailImage.value.forEach(img => {
                const { mutate, onDone, onError } = useMutation(UPLOAD_IMAGE, () => ({
                    variables: {
                        fileName: img.name,
                        base64Str: img.base64,
                    }
                }))
                mutate({
                    variables: {
                        fileName: img.name,
                        base64Str: img.base64,
                    }
                })
                onDone(result => {
                    thumbnailUrl.value = result.data.imageUpload
                    thumbnailImage.value = []

                    // create a recipe
                    const { mutate, onDone, onError } = useMutation(CREATE_FOOD, () => ({
                        variables: {
                            title: values.title,
                            description: values.description,
                            featured_image_url: thumbnailUrl.value.imageUrl,
                            prep_time: values.preparationTime,
                            category_id: values.category,
                        }
                    }))
                    mutate({
                        variables: {
                            title: values.title,
                            description: values.description,
                            featured_image_url: thumbnailUrl.value.imageUrl,
                            prep_time: values.preparationTime,
                            category_id: values.category,
                        }
                    })
                    onDone(result => {
                        const recipeId = result.data.insert_recipes_one.id;
                        console.log(result.data.insert_recipes_one.featured_image_url)
                        // add ingredient
                        values.ingredients.forEach(ingredient => {
                            const { mutate, onDone, onError } = useMutation(INSERT_INGREDIENT, () => ({
                                variables: {
                                    name: ingredient.name,
                                    quantity: ingredient.amount,
                                    recipe_id: recipeId,
                                }
                            }))
                            mutate({
                                variables: {
                                    name: ingredient.name,
                                    quantity: ingredient.amount,
                                    recipe_id: recipeId,
                                }
                            })
                            onDone(result => {
                                // TODO   add notification popups ( here or down there ↓)
                                // reset the values
                                resetForm()

                            })
                            onError(err => {
                                error.value = err.message;
                            })
                        })
                        // add instruction 
                        values.instructions.forEach((instruction, index) => {
                            const { mutate, onDone, onError } = useMutation(INSERT_INSTRUCTION, () => ({
                                variables: {
                                    description: instruction.name,
                                    recipe_id: recipeId,
                                    step_order: index,
                                }
                            }))
                            mutate({
                                variables: {
                                    description: instruction.name,
                                    recipe_id: recipeId,
                                    step_order: index,
                                }
                            })
                            onDone((result) => {
                                // TODO add notification popups (here or up there ↑)
                                resetForm()

                            })
                            onError(err => {
                                error.value = err.message;

                            })
                        })


                        const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                            variables: {
                                is_featured: true,
                                image_url: thumbnailUrl.value.imageUrl,
                                recipe_id: recipeId,
                            }
                        }))
                        mutate({
                            variables: {
                                is_featured: true,
                                image_url: thumbnailUrl.value.imageUrl,
                                recipe_id: recipeId,
                            }
                        })

                        onDone(result => {
                            resetForm()

                        })
                        onError(err => {
                            error.value = err.message
                        })

                        // upload images to the server
                        // get the number of the images
                        count.value = images.value.length
                        images.value.forEach((image) => {
                            const { mutate, onDone, onError } = useMutation(UPLOAD_IMAGE, () => ({
                                variables: {
                                    fileName: image.name,
                                    base64Str: image.base64,
                                }
                            }))
                            mutate({
                                variables: {
                                    fileName: image.name,
                                    base64Str: image.base64,
                                }
                            })

                            onDone(result => {
                                // insert image url to the table
                                const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                                    variables: {
                                        is_featured: false,
                                        image_url: result.data.imageUpload.imageUrl,
                                        recipe_id: recipeId,
                                    }
                                }))
                                mutate({
                                    variables: {
                                        is_featured: false,
                                        image_url: result.data.imageUpload.imageUrl,
                                        recipe_id: recipeId,
                                    }
                                })

                                onDone(result => {
                                    // count and clear images
                                    count.value--;
                                    resetForm()
                                    if (count.value == 0) {
                                        images.value = []
                                    }

                                })
                                onError(err => {
                                    error.value = err.message
                                })

                            })

                            onError(err => {
                                error.value = err.message;
                                return
                            })

                        })

                    })
                    onError(err => {
                        error.value = err.message;
                        return
                    })

                })
                onError(err => {
                    error.value = err.message;
                    return;
                })
            })
        } else {
            error.value = " There Must Be At Least One Instruction And One Ingredient!"
        }
    } else if (page == "/foods/edit" && legit.value) {


        if (values.instructions.length && values.ingredients.length) {

            // if the thumnailImage.value is changed
            if (temparedThumb.value) {
                const { mutate, onDone, onError } = useMutation(UPLOAD_IMAGE, () => ({
                    variables: {
                        fileName: thumbnailImage.value[0].name,
                        base64Str: thumbnailImage.value[0].base64,
                    }
                }))
                mutate({
                    variables: {
                        fileName: thumbnailImage.value[0].name,
                        base64Str: thumbnailImage.value[0].base64,
                    }
                })
                onDone(result => {
                    thumbnailUrl.value = result.data.imageUpload
                    thumbnailImage.value = []

                    // create a recipe
                    const { mutate, onDone, onError } = useMutation(CREATE_FOOD, () => ({
                        variables: {
                            title: values.title,
                            description: values.description,
                            featured_image_url: thumbnailUrl.value.imageUrl,
                            prep_time: values.preparationTime,
                            category_id: values.category,
                        }
                    }))
                    mutate({
                        variables: {
                            title: values.title,
                            description: values.description,
                            featured_image_url: thumbnailUrl.value.imageUrl,
                            prep_time: values.preparationTime,
                            category_id: values.category,
                        }
                    })
                    onDone(result => {
                        const recipeId = result.data.insert_recipes_one.id;
                        console.log(result.data.insert_recipes_one.featured_image_url)
                        // add ingredient
                        values.ingredients.forEach(ingredient => {
                            const { mutate, onDone, onError } = useMutation(INSERT_INGREDIENT, () => ({
                                variables: {
                                    name: ingredient.name,
                                    quantity: ingredient.amount,
                                    recipe_id: recipeId,
                                }
                            }))
                            mutate({
                                variables: {
                                    name: ingredient.name,
                                    quantity: ingredient.amount,
                                    recipe_id: recipeId,
                                }
                            })
                            onDone(result => {
                                // TODO   add notification popups ( here or down there ↓)
                                // reset the values
                                resetForm()

                            })
                            onError(err => {
                                error.value = err.message;
                            })
                        })
                        // add instruction 
                        values.instructions.forEach((instruction, index) => {
                            const { mutate, onDone, onError } = useMutation(INSERT_INSTRUCTION, () => ({
                                variables: {
                                    description: instruction.name,
                                    recipe_id: recipeId,
                                    step_order: index,
                                }
                            }))
                            mutate({
                                variables: {
                                    description: instruction.name,
                                    recipe_id: recipeId,
                                    step_order: index,
                                }
                            })
                            onDone((result) => {
                                // TODO add notification popups (here or up there ↑)
                                resetForm()

                            })
                            onError(err => {
                                error.value = err.message;

                            })
                        })

                        //  add thumbnailimage upload to images url table

                        const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                            variables: {
                                is_featured: true,
                                image_url: thumbnailUrl.value.imageUrl,
                                recipe_id: recipeId,
                            }
                        }))
                        mutate({
                            variables: {
                                is_featured: true,
                                image_url: thumbnailUrl.value.imageUrl,
                                recipe_id: recipeId,
                            }
                        })

                        onDone(result => {
                            resetForm()

                        })
                        onError(err => {
                            error.value = err.message
                        })

                        // upload images to the server
                        // get the number of the images
                        count.value = images.value.length
                        images.value.forEach((image) => {
                            //  if the image are modified
                            if (temparedImages.value) {

                                const { mutate, onDone, onError } = useMutation(UPLOAD_IMAGE, () => ({
                                    variables: {
                                        fileName: image.name,
                                        base64Str: image.base64,
                                    }
                                }))
                                mutate({
                                    variables: {
                                        fileName: image.name,
                                        base64Str: image.base64,
                                    }
                                })

                                onDone(result => {
                                    // insert image url to the table
                                    const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                                        variables: {
                                            is_featured: false,
                                            image_url: result.data.imageUpload.imageUrl,
                                            recipe_id: recipeId,
                                        }
                                    }))
                                    mutate({
                                        variables: {
                                            is_featured: false,
                                            image_url: result.data.imageUpload.imageUrl,
                                            recipe_id: recipeId,
                                        }
                                    })

                                    onDone(result => {
                                        // count and clear images
                                        count.value--;
                                        resetForm()
                                        if (count.value == 0) {
                                            images.value = []
                                        }

                                    })
                                    onError(err => {
                                        error.value = err.message
                                    })

                                })

                                onError(err => {
                                    error.value = err.message;
                                    return
                                })
                            } else {
                                //  if the images are not modified
                                const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                                    variables: {
                                        is_featured: false,
                                        image_url: image.url,
                                        recipe_id: recipeId,
                                    }
                                }))
                                mutate({
                                    variables: {
                                        is_featured: false,
                                        image_url: image.url,
                                        recipe_id: recipeId,
                                    }
                                })

                                onDone(result => {
                                    // count and clear images
                                    count.value--;
                                    resetForm()
                                    if (count.value == 0) {
                                        images.value = []
                                    }

                                })
                                onError(err => {
                                    error.value = err.message
                                })

                            }

                        })

                    })
                    onError(err => {
                        error.value = err.message;
                        return
                    })

                })
                onError(err => {
                    error.value = err.message;
                    return;
                })
            } else {
                //  thumbnail is not modified
                thumbnailUrl.value = thumbnailImage.value[0].url
                // thumbnailImage.value = []
                console.log("thumbUrl", thumbnailUrl.value)
                console.log("thumbImg", thumbnailImage.value[0])


                // create a recipe
                const { mutate, onDone, onError } = useMutation(CREATE_FOOD, () => ({
                    variables: {
                        title: values.title,
                        description: values.description,
                        featured_image_url: thumbnailImage.value[0].url,
                        prep_time: values.preparationTime,
                        category_id: values.category,
                    }
                }))
                mutate({
                    variables: {
                        title: values.title,
                        description: values.description,
                        featured_image_url: thumbnailImage.value[0].url,
                        prep_time: values.preparationTime,
                        category_id: values.category,
                    }
                })
                onDone(result => {
                    const recipeId = result.data.insert_recipes_one.id;
                    // add ingredient
                    values.ingredients.forEach(ingredient => {
                        const { mutate, onDone, onError } = useMutation(INSERT_INGREDIENT, () => ({
                            variables: {
                                name: ingredient.name,
                                quantity: ingredient.amount,
                                recipe_id: recipeId,
                            }
                        }))
                        mutate({
                            variables: {
                                name: ingredient.name,
                                quantity: ingredient.amount,
                                recipe_id: recipeId,
                            }
                        })
                        onDone(result => {
                            // TODO   add notification popups ( here or down there ↓)
                            // reset the values
                            resetForm()

                        })
                        onError(err => {
                            error.value = err.message;
                        })
                    })
                    // add instruction 
                    values.instructions.forEach((instruction, index) => {
                        const { mutate, onDone, onError } = useMutation(INSERT_INSTRUCTION, () => ({
                            variables: {
                                description: instruction.name,
                                recipe_id: recipeId,
                                step_order: index,
                            }
                        }))
                        mutate({
                            variables: {
                                description: instruction.name,
                                recipe_id: recipeId,
                                step_order: index,
                            }
                        })
                        onDone((result) => {
                            // add notification popups (here or up there ↑)
                            resetForm()

                        })
                        onError(err => {
                            error.value = err.message;

                        })
                    })

                    // TODO add thumbnailimage upload to images url table

                    const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                        variables: {
                            is_featured: true,
                            image_url: thumbnailImage.value[0].url,
                            recipe_id: recipeId,
                        }
                    }))
                    mutate({
                        variables: {
                            is_featured: true,
                            image_url: thumbnailImage.value[0].url,
                            recipe_id: recipeId,
                        }
                    })

                    onDone(result => {
                        resetForm()

                    })
                    onError(err => {
                        error.value = err.message
                    })

                    // upload images to the server
                    // get the number of the images
                    count.value = images.value.length
                    images.value.forEach((image) => {
                        //  if the image are modified
                        if (Object.keys(image).includes("base64")) {

                            const { mutate, onDone, onError } = useMutation(UPLOAD_IMAGE, () => ({
                                variables: {
                                    fileName: image.name,
                                    base64Str: image.base64,
                                }
                            }))
                            mutate({
                                variables: {
                                    fileName: image.name,
                                    base64Str: image.base64,
                                }
                            })

                            onDone(result => {
                                // insert image url to the table
                                const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                                    variables: {
                                        is_featured: false,
                                        image_url: result.data.imageUpload.imageUrl,
                                        recipe_id: recipeId,
                                    }
                                }))
                                mutate({
                                    variables: {
                                        is_featured: false,
                                        image_url: result.data.imageUpload.imageUrl,
                                        recipe_id: recipeId,
                                    }
                                })

                                onDone(result => {
                                    // count and clear images
                                    count.value--;
                                    resetForm()
                                    if (count.value == 0) {
                                        images.value = []
                                    }

                                })
                                onError(err => {
                                    error.value = err.message
                                })

                            })

                            onError(err => {
                                error.value = err.message;
                                return
                            })
                        } else {
                            //  if the images are not modified
                            const { mutate, onDone, onError } = useMutation(INSERT_IMAGE, () => ({
                                variables: {
                                    is_featured: false,
                                    image_url: image.url,
                                    recipe_id: recipeId,
                                }
                            }))
                            mutate({
                                variables: {
                                    is_featured: false,
                                    image_url: image.url,
                                    recipe_id: recipeId,
                                }
                            })

                            onDone(result => {
                                // count and clear images
                                count.value--;
                                resetForm()
                                if (count.value == 0) {
                                    images.value = []
                                }

                            })
                            onError(err => {
                                error.value = err.message
                            })

                        }

                    })

                })
                onError(err => {
                    error.value = err.message;
                    return
                })

            }
            navigateTo('/')
            // delete the recipe
            const { mutate, onDone, onError } = useMutation(DELETE_RECIPE, () => ({
                variables: {
                    id: parseInt(recipeId)
                }
            }))
            mutate({
                variables: {
                    id: parseInt(recipeId)
                }
            })

            onDone(result => {
                console.log(result)
            })
            onError(err => {
                console.log(err)
            })
        }
    }
}

onMounted(() => {
    const token = useCookie("token");
    if (token.value && token.value != null) {
        user.value = jwtDecode(token.value)
    } else {
        navigateTo('/')
    }

})

</script>

<style scoped>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>
