// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
  ],
  routeRules:
    process.env.NODE_ENV !== "production"
      ? {}
      : {
          "/api/**": { swr: false },
          // "/**": { swr: true },
        },
});
