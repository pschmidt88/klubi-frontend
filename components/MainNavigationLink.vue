<script lang="ts" setup>
const props = defineProps({
    to: String,
    exact: {
      type: Boolean,
      default: false
    }
})
</script>

<template>
  <NuxtLink :exact="exact" :to="to" v-slot="{ isActive, href, navigate }">
    <a
      :href="href"
      @click="navigate"
      :class="[
        isActive
          ? 'text-white bg-gray-900'
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
      ]"
      class="mr-4 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-white focus:bg-gray-700"
    >
      <slot />
    </a>
  </NuxtLink>
</template>
