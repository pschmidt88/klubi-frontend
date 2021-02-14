<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  setup() {},
})
</script>

<template>
  <div class="flex flex-col">
    <label
      :for="inputId"
      :class="[labelErrorClass]"
      class="pb-2 text-sm font-bold text-gray-800"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <div class="relative">
      <div
        class="absolute flex items-center h-full px-4 text-gray-600 border-r"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-mail"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </div>

      <input
        :id="inputId"
        :value="value"
        type="email"
        :placeholder="placeholder"
        :readonly="readonly"
        :class="[
          readonly
            ? 'cursor-default bg-gray-100 focus:border-gray-300'
            : 'focus:border-indigo-600',
          inputErrorClass,
        ]"
        class="items-center w-full py-3 pl-16 text-sm border border-gray-300 rounded shadow-sm focus:outline-none"
        @input="$emit('changeInput', $event.target.value)"
      />
    </div>

    <div v-if="hasValidationErrors" :class="labelErrorClass" class="text-xs">
      <span v-if="validation.required !== undefined && !validation.required">
        {{ $t('form.text.validation.required.error') }}
      </span>

      <span
        v-if="validation.requiredIf !== undefined && !validation.requiredIf"
      >
        {{ $t('form.text.validation.required.error') }}
      </span>

      <span v-if="validation.minLength !== undefined && !validation.minLength">
        {{
          $t('form.text.validation.minLength.error', {
            length: validation.$params.minLength.min,
          })
        }}
      </span>

      <!-- <div v-if="hasValidationErrors" :class="labelErrorClass" class="text-xs">
      <span v-if="validation.email !== undefined && !validation.email">
        {{ $t('form.text.validation.email.error') }}
      </span>
    </div> -->
      <span v-if="validation.email !== undefined && !validation.email">
        {{ $t('form.text.validation.email.error') }}
      </span>
    </div>
  </div>
</template>
