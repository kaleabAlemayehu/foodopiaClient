// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/apollo",
  ],
  typescript: {
    strict: false,
  },
  css: ["@/static/assets/css/main.css"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:8080/v1/graphql",
      },
    },
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700], // Specify the font weights you want to use
    },
  },
});
