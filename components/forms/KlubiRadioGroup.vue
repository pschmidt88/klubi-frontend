<script lang="ts">
import Vue from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'
import { Validation } from 'vuelidate'

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

  @Prop()
  readonly validation!: Validation

  get labelErrorClass(): String {
    return this.hasValidationErrors ? 'text-red-600' : ''
  }

  get inputErrorClass(): String {
    return this.hasValidationErrors ? 'border-red-600' : ''
  }

  get hasValidationErrors(): Boolean {
    return this.validation && this.validation.$anyError
  }

  private componentId = ''

  mounted() {
    this.componentId = `radio-group-${this._uid}`
  }
}
</script>

<template>
  <div :class="wrapperClass">
    <label :class="[labelErrorClass]" class="block text-sm font-bold mb-2">
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
        :class="[inputErrorClass]"
        type="radio"
      />
      <span class="ml-2 text-sm">{{ option.text }}</span>
    </label>

    <div v-if="hasValidationErrors" class="text-red-600 text-xs">
      <span v-if="validation.required !== undefined && !validation.required">
        {{ $t('form.option.validation.required.error') }}
      </span>
    </div>
  </div>
</template>
