<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'
import { ContactsValidation } from '~/components/partials/members/create/validationTypes'

@Component({
  components: { KInput },
})
export default class Contacts extends Vue {}
</script>

<template>
  <div class="container flex">
    <div class="w-2/5">
      <h3 class="text-lg font-semibold">Kontakt</h3>
      <span class="text-sm text-gray-600">Adresse, Kontaktmöglichkeiten, etc.</span>
    </div>

    <div class="container w-3/5">
      <div class="flex">
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

      <div class="flex mt-4">
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
      <k-input v-model="phone" placeholder="01717693796" wrapper-class="mt-4" label="Telefon" />
      <k-input v-model="email" label="E-Mail" wrapper-class="mt-4" placeholder="rookian@gmail.com" />
    </div>
  </div>
</template>
