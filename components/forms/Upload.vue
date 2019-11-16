<script lang="ts">
import Vue from 'vue'
import { Model, Component } from 'vue-property-decorator'

@Component
export default class KlubiUpload extends Vue {
  @Model('changeInput', { type: String })
  readonly value!: String
}
</script>

<template>
  <div class="mb-4">
    <label class="block text-sm mb-2" for="uploadMandate">
      Lastschriftmandat
    </label>
    <div class="items-center bg-grey-lighter">
      <label
        class="flex items-center px-3 py-2 bg-white text-indigo-700 rounded border border-indigo-600 cursor-pointer hover:bg-indigo-700 hover:text-white"
      >
        <svg
          class="w-6 h-6 mr-3"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="text-sm">
          SEPA Mandat hochladen
        </span>
        <input id="uploadMandate" type="file" class="hidden" />
      </label>
    </div>
  </div>
</template>
