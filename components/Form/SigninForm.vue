<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8  mx-auto md:h-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="max-w-56 mx-auto pt-16" src="../../static/assets/images/logo.png" alt="logo">

                    </a>
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <Form class="space-y-4 md:space-y-6" @submit="onSubmit">
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <Field as="input" type="email" name="email" id="email" rules="required|email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter Your Email" required="" />
                                <ErrorMessage name="email" class="err" />
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <Field as="input" type="password" name="password" id="password" placeholder="••••••••"
                                    rules="required|min:8|max:16"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                                <ErrorMessage name="password" class="err" />
                            </div>
                            <div class="err text-center">{{ error }}</div>
                            <div class="flex items-center justify-between mb-3 ">

                                <a href="#"
                                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                    password?</a>
                            </div>
                            <button type="submit"
                                class="w-full mb-3   text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign
                                in</button>
                            <p class="text-sm  font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="/auth/signup"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                    up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script setup>
import { ErrorMessage, Field, Form } from 'vee-validate';
import { LOGIN } from "../../helpers/queries/auth.js"
const error = ref(null)

const onSubmit = (values) => {
    const { mutate, onDone, onError } = useMutation(LOGIN, () => ({
        variables: {
            email: values.email,
            password: values.password,
        }
    }))
    mutate(
        {
            variables: {
                email: values.email,
                username: values.username,
                password: values.password,
            }
        }
    )

    onDone((result) => {
        error.value = result.data.login.error
        if (!result.data.login.error) {
            const token = useCookie("token", {
                maxAge: 60 * 60 * 24 * 7,
            })
            token.value = result.data.login.token;
            // TODO add notification popup
            navigateTo('/')
        }
    })

    onError(err => {
        error.value = err;
    })

}

</script>

<style scoped>
.err {
    @apply text-xs text-red-600 dark:text-gray-300;
}
</style>