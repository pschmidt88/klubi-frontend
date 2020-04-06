<script lang="ts">
import Vue from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'

@Component
export default class KlubiUpload extends Vue {
  @Prop(String)
  readonly wrapperClass: string | undefined

  @Model('changeInput', { type: String })
  readonly value!: String

  private componentId: String = ''

  mounted() {
    this.componentId = `upload-${this._uid}`
  }
}
</script>

<template>
  <div :class="wrapperClass" class="w-full">
    <div class="rounded border-2 border-dashed border-gray-600 p-5">
      <svg
        class="w-12 h-12 my-5 mx-auto"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
        />
      </svg>

      <div class="text-center text-gray-600">Drag and drop files here</div>

      <div class="text-center text-gray-600">or</div>

      <div class="mt-2 text-center mx-auto">
        <label
          :for="componentId"
          class="px-3 py-2 hover:bg-gray-800 hover:text-white bg-white border-gray-800 rounded border cursor-pointer"
        >
          <span class="text-sm">
            {{ $t('form.upload.button.label') }}
          </span>
          <input :id="componentId" type="file" class="hidden" />
        </label>
      </div>
    </div>
  </div>
</template>
