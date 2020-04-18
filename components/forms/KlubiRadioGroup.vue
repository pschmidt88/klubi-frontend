<script lang="ts">
import { Validation } from 'vuelidate'
import { defineComponent, computed } from '@vue/composition-api'
import shortid from 'shortid'

interface RadioButtonOption {
  value: string
  text: string
}

export default defineComponent({
  props: {
    value: String,
    label: {
      type: String,
      required: true
    },
    wrapperClass: String,
    options: {
      type: Array as () => Array<RadioButtonOption>
    },
    validation: {
      type: Object as () => Validation
    }
  },

  setup(props) {
    const hasValidationErrors = props.validation && props.validation.$anyError

    const inputErrorClass = computed(() =>
      hasValidationErrors ? 'border-red-600' : ''
    )
    const labelErrorClass = computed(() =>
      hasValidationErrors ? 'text-red-600' : ''
    )
    const componentId = `input-radio-${shortid.generate()}`

    return {
      componentId,
      labelErrorClass,
      inputErrorClass
    }
  }
})
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
        v-model="value"
        :value="option.value"
        @input="$emit('input', $event.target.value)"
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
