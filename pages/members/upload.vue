<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import KlubiUpload from '~/components/forms/KlubiUpload.vue'

export default defineComponent({
  components: { KlubiUpload }
})
</script>

<template>
  <div class="w-1/5">
    <klubi-upload />
  </div>
</template>
