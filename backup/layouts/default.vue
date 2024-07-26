<script lang="ts">
import MainNavigation from '~/components/MainNavigation.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { MainNavigation },
  head() {
    return {
      htmlAttrs: {
        class: 'h-full bg-gray-100',
      },
      bodyAttrs: {
        class: 'h-full font-sans antialiased',
      },
    }
  },
})
</script>

<template>
  <div class="min-h-full">
    <MainNavigation />

    <!-- TODO: think if we want to use it or not-->
    <!-- <header class="bg-white shadow">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header> -->
    <main>
      <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
