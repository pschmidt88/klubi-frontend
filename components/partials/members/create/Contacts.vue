<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'
import { ContactsValidation } from '~/components/partials/members/create/validationTypes'

@Component({
  components: { KInput }
})
export default class Contacts extends Vue {
  @Prop() readonly validator!: ContactsValidation

  get streetAddress(): string {
    return this.$store.state.members.registration.street_address
  }

  set streetAddress(value: string) {
    this.$store.commit('members/registration/updateStreetAddress', {
      street_address: value
    })
    this.validator.streetAddress.$touch()
  }

  get houseNumber(): string {
    return this.$store.state.members.registration.street_number
  }

  set houseNumber(value: string) {
    this.$store.commit('members/registration/updateStreetNumber', {
      street_number: value
    })
    this.validator.streetNumber.$touch()
  }

  get postCode(): string {
    return this.$store.state.members.registration.post_code
  }

  set postCode(value: string) {
    this.$store.commit('members/registration/updatePostCode', {
      post_code: value
    })
    this.validator.postcode.$touch()
  }

  get city(): string {
    return this.$store.state.members.registration.city
  }

  set city(value: string) {
    this.$store.commit('members/registration/updateCity', { city: value })
    this.validator.city.$touch()
  }

  get phone(): string {
    return this.$store.state.members.registration.phone
  }

  set phone(value: string) {
    this.$store.commit('members/registration/updatePhone', {
      phone: value
    })
    this.validator.phone.$touch()
  }

  get email(): string {
    return this.$store.state.members.registration.email
  }

  set email(value: string) {
    this.$store.commit('members/registration/updateEmail', {
      email: value
    })
    this.validator.email.$touch()
  }
}
</script>

<template>
  <div class="flex container">
    <div class="w-2/5">
      <h3 class="font-semibold text-lg">Kontakt</h3>
      <span class="text-sm text-gray-600">
        Adresse, Kontaktmöglichkeiten, etc.
      </span>
    </div>

    <div class="container w-3/5">
      <div class="flex">
        <k-input
          v-model="streetAddress"
          :validation="validator.streetAddress"
          label="Straße"
          placeholder="Aschrottstraße"
          wrapper-class="w-4/5"
          label-class="text-xs"
        />

        <k-input
          v-model="houseNumber"
          :validation="validator.streetNumber"
          label="Hausnr."
          placeholder="4"
          wrapper-class="w-1/5 ml-2"
          label-class="text-xs"
        />
      </div>

      <div class="flex mt-4">
        <k-input
          v-model="postCode"
          :validation="validator.postcode"
          label="Postleitzahl"
          placeholder="34119"
          wrapper-class="w-2/5"
          label-class="text-xs"
        />

        <k-input
          v-model="city"
          :validation="validator.city"
          label="Ort"
          placeholder="Kassel"
          wrapper-class="w-3/5 ml-2"
          label-class="text-xs"
        />
      </div>

      <k-input
        v-model="phone"
        :validation="validator.phone"
        placeholder="01717693796"
        wrapper-class="mt-4"
        label="Telefon"
      />

      <k-input
        v-model="email"
        :validation="validator.email"
        label="E-Mail"
        wrapper-class="mt-4"
        placeholder="rookian@gmail.com"
      />
    </div>
  </div>
</template>
