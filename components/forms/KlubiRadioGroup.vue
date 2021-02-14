<script lang="ts">
import { Validation } from 'vuelidate'
import { defineComponent, computed } from '@vue/composition-api'
import shortid from 'shortid'
import { RadioButtonOption } from '~/components/forms/RadioButtonOption'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array as () => Array<RadioButtonOption>,
    },
    validation: {
      type: Object as () => Validation,
    },
  },
  setup(props, { emit }) {
    const hasValidationError = computed(
      () => props.validation && props.validation.$anyError
    )

    const errorClassForInput = computed(() =>
      hasValidationError.value ? 'border-red-600' : ''
    )

    const errorClassForLabel = computed(() =>
      hasValidationError.value ? 'text-red-600' : ''
    )

    const input = computed({
      get: () => props.value,
      set: (value: string) => emit('input', value),
    })

    const componentId = `input-radio-${shortid.generate()}`

    return {
      componentId,
      hasValidationError,
      errorClassForLabel,
      errorClassForInput,
      input,
    }
  },
})
</script>

<template>
  <div>
    <label :class="[errorClassForLabel]" class="block mb-2 text-sm font-bold">
      {{ label }}
    </label>

    <label
      v-for="(option, index) in options"
      :key="index"
      class="inline-flex items-center mr-2"
    >
      <input
        v-model="input"
        :value="option.value"
        :class="[errorClassForInput]"
        type="radio"
      />
      <span class="ml-2 text-sm">{{ option.text }}</span>
    </label>

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(error, index) in validation.$errors">
        <span v-if="error.$validator === 'required'" :key="index">
          {{ $t('form.text.validation.required.error') }}
        </span>

        <span v-if="error.$validator === 'requiredIf'" :key="index">
          {{ $t('form.text.validation.required.error') }}
        </span>
      </template>
    </div>
  </div>
</template>
