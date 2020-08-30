<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MainNavigation from './main_navigation.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { MainNavigation },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-100 font-sans antialiased',
      },
    }
  },
})
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
