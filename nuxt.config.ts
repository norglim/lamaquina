import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    buildModules: ['@pinia/nuxt','vue-plausible'],
    build: {
        transpile: ['moment']
    },
    nitro: {
        preset: "vercel",
    },
    publicRuntimeConfig: {
        plausible: {
          domain: process.env.PLAUSIBLE_DOMAIN,
          apiHost: process.env.PLAUSIBLE_API_HOST
        }
      }
})
