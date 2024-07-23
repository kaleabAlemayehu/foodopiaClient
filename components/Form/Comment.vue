<template>
    <div>

        <Stars @rating-value="storeRating" :value="update" />
        <Form
            class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 max-w-[700px]"
            @submit="onSubmit">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <Field id="comment" rows="4" name="comment" rules="required" as="textarea"
                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..." required />
                <ErrorMessage name="comment" class="err" />
                <div class="err">{{ error }}</div>
            </div>
            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-red-600">
                <button type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                    Post comment
                </button>


            </div>
        </Form>
    </div>
</template>

<script setup>
import Stars from './Stars.vue';
import { Form, Field, ErrorMessage } from "vee-validate";
import { CREATE_COMMENT } from '~/helpers/queries/food';
const emit = defineEmits(["commentSubmited"])
const props = defineProps({
    id: Number
})
const error = ref("")
const update = ref(0)
const rating = ref(-1)
const storeRating = (value) => {
    rating.value = value;
    update.value = value;
}
const onSubmit = (values, { resetForm }) => {
    if (rating.value > 0) {

        error.value = ""
        const { mutate, onDone, onError } = useMutation(CREATE_COMMENT, () => ({
            variables: {
                recipe_id: props.id,
                rating: rating.value,
                comment: values.comment,
            }
        }))
        mutate({
            variables: {
                recipe_id: props.id,
                rating: rating.value,
                comment: values.comment,
            }
        })
        onDone((result) => {
            emit("commentSubmited")
            resetForm()
            update.value = 0;
        })
        onError(err => {
            error.value = err.message
            console.log(err.message)
        })

    } else {
        error.value = "you have to give a rating before you comment!"
    }
}
</script>

<style scoped>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>