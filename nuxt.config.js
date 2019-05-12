const changeLoaderOptions = loaders => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        })
      }
    }
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Klubi Vereinsverwaltung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Unofficial Nuxt + CoreUI project, free to use boilerplate for every need.' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/ionicons@4.5.5/dist/ionicons.js', body: true }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#42A5CC' },

  /**
   * Import CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    //'~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Font Awesome Icons Set */
    //'~/node_modules/font-awesome/css/font-awesome.min.css',
    '~/node_modules/line-awesome/dist/css/line-awesome.min.css',
    '~/node_modules/ionicons/scss/ionicons',
    //'~/node_modules/themify-icons/themify-icons/_themify-icons',
    /* Import Simple Line Icons Set */
    //'~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://github.com/bootstrap-vue/bootstrap-vue
    'bootstrap-vue/nuxt',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  bootstrapVue: {
    bootstrapCss: false
  },

  /*
  ** Style resources configuration
  */
  styleResources: {
    scss: './assets/scss/style.scss'
  },

  webfontloader: {
    google: {
      families: ["Montserrat:400,500,600,700","Noto+Sans:400,700"]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
          ({loader}) => loader === 'vue-loader')
        const { options: {loaders} } = vueLoader || { options: {} }
        
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
      }
    }
  }
}
