<script>
import TopNavigation from './top_navigation'
import SubNavigation from './sub_navigation'
import Logo from './logo'
import SearchBar from './search_bar'

export default {
  name: 'MainLayout',
  components: { TopNavigation, SubNavigation, Logo, SearchBar },
  head: {
    bodyAttrs: {
      class: 'bg-gray-200 font-sans antialiased'
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-indigo-900 text-center p-4 px-6 flex items-center h-16">
      <logo />

      <div id="mobile-nav-trigger" class="lg:hidden pr-3">
        <div class="toggle p-2 block"><span></span></div>
      </div>

      <top-navigation />

      <search-bar />
    </div>

    <div class="flex">
      <sub-navigation />

      <div id="content" class="flex flex-1 flex-col md:px-6 pt-10">
        <nuxt />
      </div>
    </div>
  </div>
</template>
