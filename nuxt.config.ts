import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Private keys (server-only) — never use NUXT_PUBLIC_ for secrets.
    // public keys are exposed to the client; safe for a public repo image.
    public: {
      apiBase: '',
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
