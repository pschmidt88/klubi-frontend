import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  head: {
    title: 'Klubi Vereinsverwaltung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'TODO meta description',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
      { rel: 'icon', sizes: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap',
      },
    ],
  },
})
