<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :nav-items="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <nuxt />
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
//import nav from './menu'
//import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '~/components/'

export default {
  name: 'Full',
  head: {
    bodyAttrs: {
      class: 'aside-menu-hidden'
    }
  },
  components: {
    // AppHeader,
    // Sidebar,
    // AppAside,
    // AppFooter,
    // Breadcrumb
  },
  data () {
    return {
      nav: []
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
