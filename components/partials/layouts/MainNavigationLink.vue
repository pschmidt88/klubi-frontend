<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    to: String,
    exact: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <nuxt-link :exact="exact" :to="to" v-slot="{ isActive, href, navigate }">
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
      <slot></slot>
    </a>
  </nuxt-link>
</template>
