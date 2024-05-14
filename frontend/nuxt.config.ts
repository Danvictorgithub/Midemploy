// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-icon"
  ]
})