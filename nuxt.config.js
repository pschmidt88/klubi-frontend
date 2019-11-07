module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Klubi Vereinsverwaltung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'TODO meta description'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png'
      },
      { rel: 'icon', sizes: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#42A5CC' },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  css: [],

  proxy: {
    '/api/': 'http://localhost:8080'
  },

  webfontloader: {
    google: {
      families: ['Montserrat:400,500,600,700', 'Noto+Sans:400,700']
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
