<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator'

@Component({})
export default class KlubiText extends Vue {
  @Prop(String) readonly wrapperClass: string | undefined

  @Prop(String) readonly label: string | undefined

  @Model('changeInput', { type: String }) value!: string

  private inputId: string = ''

  mounted() {
    this.inputId = `textarea-${this._uid}`
  }
}
</script>

<template>
  <div :class="wrapperClass">
    <label
      :for="inputId"
      :class="labelClass"
      class="block mb-1 text-sm font-semibold"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <textarea
      :id="inputId"
      :value="value"
      @input="$emit('changeInput', $event.target.value)"
      :placeholder="placeholder"
      :class="[
        readonly
          ? 'cursor-default bg-gray-100'
          : 'focus:outline-none focus:shadow-outline'
      ]"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700"
    >
    </textarea>
  </div>
</template>
