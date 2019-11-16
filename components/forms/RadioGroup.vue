<script lang="ts">
import Vue from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'

interface RadioButtonOption {
  value: string
  text: string
}

@Component
export default class KlubiRadioGroup extends Vue {
  @Model('change', { type: String })
  readonly value!: string

  @Prop({ type: String, required: true })
  readonly label!: string

  @Prop(String)
  readonly wrapperClass: string | undefined

  @Prop({ type: Array, required: true })
  readonly options!: Array<RadioButtonOption>

  componentId = ''

  mounted() {
    this.componentId = `radio-group-${this._uid}`
  }
}
</script>

<template>
  <div :class="wrapperClass">
    <label class="block text-sm mb-2">
      {{ label }}
    </label>

    <label
      v-for="(option, index) in options"
      :key="index"
      class="inline-flex items-center mr-2"
    >
      <input
        :value="option.value"
        @input="$emit('change', $event.target.value)"
        :name="componentId"
        type="radio"
      />
      <span class="ml-2">{{ option.text }}</span>
    </label>
  </div>
</template>
