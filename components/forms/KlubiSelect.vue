<script lang="ts">
import Vue from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'
import { Validation } from 'vuelidate'

interface Option {
  value: String
  text: String
  disabled: Boolean | undefined
}

@Component
export default class KlubiSelect extends Vue {
  @Model('changeInput', { type: String })
  readonly value!: String

  @Prop(Array)
  readonly options!: Array<Option>

  @Prop({ required: true, type: String })
  readonly label!: String

  @Prop(String)
  readonly wrapperClass: String | undefined

  @Prop()
  readonly validation!: Validation

  componentId: string = ''

  mounted() {
    this.componentId = `select-${this._uid}`
  }

  get labelErrorClass(): String {
    return this.hasValidationErrors ? 'text-red-600' : ''
  }

  get inputErrorClass(): String {
    return this.hasValidationErrors ? 'border-red-600' : ''
  }

  get hasValidationErrors(): Boolean {
    return this.validation && this.validation.$anyError
  }
}
</script>

<template>
  <div :class="wrapperClass">
    <label
      :for="componentId"
      :class="[labelErrorClass]"
      class="block mb-1 text-sm font-semibold"
    >
      {{ label }}
    </label>
    <div class="relative">
      <select
        :id="componentId"
        :value="value"
        @input="$emit('changeInput', $event.target.value)"
        :class="[inputErrorClass]"
        class="block appearance-none w-full border bg-white text-gray-700 py-2 px-3 rounded pr-8 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-500"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>

    <div v-if="hasValidationErrors" class="mt-1 text-red-600 text-xs">
      <span v-if="validation.required !== undefined && !validation.required">
        {{ $t('form.select.validation.required.error') }}
      </span>
    </div>
  </div>
</template>
