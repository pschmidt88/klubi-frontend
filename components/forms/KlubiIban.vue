<script lang="ts">
import { mask } from 'vue-the-mask'
import { Vue, Component, Prop, Model } from 'vue-property-decorator'
import { Validation } from 'vuelidate'

@Component({
  directives: { mask }
})
export default class KlubiIban extends Vue {
  @Prop(String)
  readonly wrapperClass: string | undefined

  @Prop(String)
  readonly label: string | undefined

  @Prop(Boolean)
  readonly readonly: boolean | undefined

  @Prop(String)
  readonly placeholder: string | undefined

  @Prop({ type: String })
  readonly labelClass: string | undefined

  @Prop()
  readonly validation!: Validation

  @Model('changeInput', { type: String })
  value!: string

  inputId: string = ''

  get hasValidationErrors(): Boolean {
    return this.validation && this.validation.$anyError
  }

  get labelErrorClass(): String {
    return this.hasValidationErrors ? 'text-red-600' : ''
  }

  get inputErrorClass(): String {
    return this.hasValidationErrors ? 'border-red-600' : ''
  }

  mounted() {
    this.inputId = `input-iban-${this._uid}`
  }
}
</script>

<template>
  <div :class="wrapperClass">
    <label
      :for="inputId"
      :class="[labelClass, labelErrorClass]"
      class="block mb-1 text-sm font-semibold"
    >
      <slot name="label">
        {{ label }}
      </slot>

      <input
        :id="inputId"
        :value="value"
        v-mask="'AA## #### #### #### #### ##'"
        @input="$emit('changeInput', $event.target.value)"
        :placeholder="placeholder"
        :readonly="readonly"
        :class="[
          readonly
            ? 'cursor-default bg-gray-100'
            : 'focus:outline-none focus:shadow-outline',
          inputErrorClass
        ]"
        type="text"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      />
    </label>

    <div v-if="hasValidationErrors" :class="labelErrorClass" class="text-xs">
      <span v-if="validation.required !== undefined && !validation.required">
        Der kack hier muss ausgefüllt sein Junge
      </span>

      <span
        v-if="validation.requiredIf !== undefined && !validation.requiredIf"
      >
        Der kack hier muss ausgefüllt sein Junge
      </span>

      <span v-if="validation.minLength !== undefined && !validation.minLength">
        Mindestlänge ist {{ validation.$params.minLength.min }}
      </span>

      <span v-if="validation.email !== undefined && !validation.email">
        email ist nicht valide
      </span>
    </div>
  </div>
</template>
