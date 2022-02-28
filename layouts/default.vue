<script lang="ts">
import MainNavigation from "~/components/MainNavigation.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: { MainNavigation },
  head() {
    return {
      bodyAttrs: {
        class: "bg-gray-100 font-sans antialiased",
      },
    };
  },
});
</script>

<template>
  <div>
    <MainNavigation />

    <main>
      <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
