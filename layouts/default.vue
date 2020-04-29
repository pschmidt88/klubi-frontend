<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainNavigation from './main_navigation.vue'

@Component({
  name: 'DefaultLayout',
  components: { MainNavigation },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-100 font-sans antialiased'
      }
    }
  }
})
export default class DefaultLayout extends Vue {}
</script>

<template>
  <div>
    <main-navigation />

    <main>
      <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
  </div>
</template>
