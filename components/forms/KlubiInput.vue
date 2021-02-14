<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { Validation } from 'vuelidate'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    validation: {
      type: Object as PropType<Validation>,
    },
  },
  setup(props, { emit }) {
    const input = computed({
      get: () => props.value,
      set: (value: string) => emit('input', value),
    })

    const hasValidationError = computed(() => {
      return props.validation && props.validation.$error
    })

    const errorClassForInput = computed(() => {
      return hasValidationError.value ? 'border-red-600' : ''
    })

    const errorClassForLabel = computed(() => {
      return hasValidationError.value ? 'text-red-600' : ''
    })

    function validateInput() {
      if (props.validation) {
        props.validation.$touch()
      }
    }

    return {
      input,
      hasValidationError,
      errorClassForInput,
      errorClassForLabel,
      validateInput,
    }
  },
})
</script>

<template>
  <div class="flex flex-col">
    <label
      class="flex block pb-2 text-sm font-bold text-gray-800"
      :class="errorClassForLabel"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <input
      v-model="input"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :class="[
        readonly
          ? 'cursor-default bg-gray-100 focus:border-gray-300'
          : 'focus:border-indigo-600',
        errorClassForInput,
      ]"
      class="py-3 pl-3 text-sm border border-gray-300 rounded shadow-sm focus:outline-none"
      @blur="validateInput"
    />

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(error, index) in validation.$errors">
        <span v-if="error.$validator === 'required'" :key="index">
          {{ $t('form.text.validation.required.error') }}
        </span>

        <span v-if="error.$validator === 'requiredIf'" :key="index">
          {{ $t('form.text.validation.required.error') }}
        </span>

        <span v-if="error.$validator === 'minLength'" :key="index">
          {{
            $t('form.text.validation.minLength.error', {
              length: error.$params.min,
            })
          }}
        </span>
      </template>
    </div>
  </div>
</template>
