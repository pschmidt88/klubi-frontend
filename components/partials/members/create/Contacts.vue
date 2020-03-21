<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'

@Component({
  components: { KInput }
})
export default class Contacts extends Vue {
  get streetAddress(): string {
    return this.$store.state.members.registration.street_address
  }

  set streetAddress(value: string) {
    this.$store.commit('members/registration/updateStreetAddress', {
      street_address: value
    })
  }

  get houseNumber(): string {
    return this.$store.state.members.registration.street_number
  }

  set houseNumber(value: string) {
    this.$store.commit('members/registration/updateStreetNumber', {
      street_number: value
    })
  }

  get postCode(): string {
    return this.$store.state.members.registration.post_code
  }

  set postCode(value: string) {
    this.$store.commit('members/registration/updatePostCode', {
      post_code: value
    })
  }

  get city(): string {
    return this.$store.state.members.registration.city
  }

  set city(value: string) {
    this.$store.commit('members/registration/updateCity', { city: value })
  }

  get phone(): string {
    return this.$store.state.members.registration.phone
  }

  set phone(value: string) {
    this.$store.commit('members/registration/updatePhone', {
      phone: value
    })
  }

  get email(): string {
    return this.$store.state.members.registration.email
  }

  set email(value: string) {
    this.$store.commit('members/registration/updateEmail', {
      email: value
    })
  }
}
</script>

<template>
  <div class="flex container">
    <div class="w-2/5 mr-5">
      <h3 class="font-semibold text-lg">Kontakt</h3>
      <span class="text-sm text-gray-600">
        Adresse, Kontaktmöglichkeiten, etc.
      </span>
    </div>

    <div class="container w-3/5">
      <div class="flex mb-4">
        <k-input
          v-model="streetAddress"
          label="Straße"
          placeholder="Aschrottstraße"
          wrapper-class="w-4/5"
          label-class="text-xs"
        />

        <k-input
          v-model="houseNumber"
          label="Hausnr."
          placeholder="4"
          wrapper-class="w-1/5 ml-2"
          label-class="text-xs"
        />
      </div>

      <div class="flex">
        <k-input
          v-model="postCode"
          label="Postleitzahl"
          placeholder="34119"
          wrapper-class="w-2/5"
          label-class="text-xs"
        />

        <k-input
          v-model="city"
          label="Ort"
          placeholder="Kassel"
          wrapper-class="w-3/5 ml-2"
          label-class="text-xs"
        />
      </div>

      <k-input
        v-model="phone"
        placeholder="01717693796"
        wrapper-class="mb-4"
        label="Telefon"
      />

      <k-input v-model="email" label="E-Mail" placeholder="rookian@gmail.com" />
    </div>
  </div>
</template>
