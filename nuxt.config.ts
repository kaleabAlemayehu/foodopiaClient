// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
  css: ["@/static/assets/css/main.css"],
});
