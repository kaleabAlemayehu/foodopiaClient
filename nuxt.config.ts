// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import "flowbite";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/apollo"],
  typescript: {
    strict: false,
  },
  css: ["@/static/assets/css/main.css", "flowbite/dist/flowbite.css"],
  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
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
