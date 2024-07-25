<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900 ">
            <div class=" flex flex-col items-center justify-center px-6 py-8  mx-auto md:h-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="max-w-56 mx-auto pt-16" src="../../static/assets/images/logo.png" alt="logo">

                    </a>
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <Form class="space-y-4 md:space-y-6" @submit="onSubmit">
                            <div>
                                <label for="username"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <Field as="input" type="text" name="username" id="username" rules="required"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter Your Username..." required="" />
                                <ErrorMessage name="username" class="err" />
                            </div>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <Field as="input" rules="email|required" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter Your Email..." required="" />
                                <ErrorMessage name="email" class="err" />
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <Field as="input" rules="required|min:8|max:16" type="password" name="password"
                                    id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                                <ErrorMessage name="password" class="err" />
                            </div>
                            <div>
                                <label for="confirm-password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <Field type="password" name="confirm-password" id="confirm-password"
                                    placeholder="••••••••" rules="required|confirmed:@password"
                                    class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                                <ErrorMessage name="confirm-password" class="err" />
                            </div>
                            <div class="err text-center">{{ error }}</div>
                            <button type="submit"
                                class="w-full  text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Create
                                an account</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400 py-4 ">
                                Already have an account? <a href="/auth/signin"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                    here</a>
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { CREATE_ACCOUNT, LOGIN } from "../../helpers/queries/auth.js"
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const error = ref(null)

const onSubmit = async (values) => {

    const { mutate, onDone, onError } = useMutation(CREATE_ACCOUNT, () => ({
        variables: {
            email: values.email,
            username: values.username,
            password: values.password,
        }
    }))
    mutate({
        variables: {
            email: values.email,
            username: values.username,
            password: values.password,
        }
    })
    onError(err => {
        error.value = err;
    })
    onDone((result) => {
        // display error
        error.value = result.data.signup.error;
        if (!result.data.signup.error) {
            // create a cookie
            const token = useCookie("token", {
                maxAge: 60 * 60 * 24 * 7,
            }
            )
            // add token to a cookie
            token.value = result.data.signup.token;
            // TODO: add notification popup


            toast("Welcome! You Register Successfully!", {
                "theme": "auto",
                "type": "default",
                "dangerouslyHTMLString": true,
                "clearOnUrlChange": false,

            })
            navigateTo("/");

        }

    })
}

</script>

<style scoped>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>