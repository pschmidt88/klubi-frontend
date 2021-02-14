<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { Validation } from 'vuelidate'
import { SelectOption } from '~/components/forms/SelectOption'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array as () => Array<SelectOption>,
    },
    value: {
      type: String,
      default: '',
    },
    validation: {
      type: Object as () => Validation,
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
    }
  },
})
</script>

<template>
  <div class="flex flex-col">
    <label
      :class="[errorClassForLabel]"
      class="pb-2 text-sm font-bold text-gray-800"
    >
      {{ label }}
    </label>

    <div class="relative flex border border-gray-300 rounded shadow-sm">
      <select
        v-model="input"
        :class="[errorClassForInput]"
        class="z-10 w-full py-3 pl-3 text-sm text-gray-800 bg-transparent border border-transparent rounded appearance-none focus:outline-none focus:border-indigo-700"
      >
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </option>
      </select>
      <div
        class="absolute top-0 bottom-0 right-0 z-0 flex flex-col items-center justify-center px-4 mx-auto text-gray-500 border-l border-gray-300"
      >
        <svg
          tabindex="0"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-up"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="6 15 12 9 18 15" />
        </svg>
        <svg
          tabindex="0"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>

    <!-- <div class="relative">
      <select
        v-model="input"
        :class="[errorClassForInput]"
        class="block w-full px-3 py-2 pr-8 leading-tight text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline focus:border-gray-500"
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
        class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
      >
        <svg
          class="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div> -->

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
