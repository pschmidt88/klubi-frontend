<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'
import KSelect from '~/components/forms/KlubiSelect.vue'
import KUpload from '~/components/forms/KlubiUpload.vue'

@Component({
  components: { KInput, KSelect, KUpload }
})
export default class PaymentDetails extends Vue {
  private availablePaymentMethods = [
    { value: '', text: 'Zahlungsart auswählen', disabled: true },
    { value: 'transfer', text: 'Überweisung' },
    { value: 'debit', text: 'Lastschrift' }
  ]

  get isDirectDebit(): boolean {
    return this.paymentMethod === 'debit'
  }

  get paymentMethod() {
    return this.$store.state.members.registration.payment_method
  }

  set paymentMethod(value: string) {
    this.$store.commit('members/registration/updatePaymentMethod', {
      paymentMethod: value
    })
  }
}
</script>

<template>
  <div class="container">
    <div class="flex container">
      <div class="w-2/5 mr-5">
        <h3 class="font-semibold text-lg">Mitgliedsbeitrag</h3>
        <span class="text-sm text-gray-600">
          Mitgliedsbeitrag und Zahlungsdaten
        </span>
      </div>

      <div class="w-3/5">
        <k-select
          v-model="paymentMethod"
          :options="availablePaymentMethods"
          label="Zahlungsmethode"
        />
      </div>
    </div>

    <div v-if="isDirectDebit" class="flex container mt-6">
      <div class="w-2/5 mr-5">
        <h3 class="font-semibold text-lg">Kontoinhaber</h3>
      </div>

      <div class="w-3/5">
        <k-input
          v-model="accountOwnerFirstName"
          label="Vorname"
          placeholder="Paul"
        />

        <k-input
          v-model="accountOwnerLastName"
          label="Nachname"
          placeholder="Schmidt"
          wrapper-class="mt-4"
        />

        <div class="mt-4">
          <label class="block text-sm font-bold mb-1" for="inputIban">
            IBAN
          </label>
          <input
            id="inputIban"
            v-model="iban"
            v-mask="'AA## #### #### #### #### ##'"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>

        <k-input v-model="bic" wrapper-class="mt-4" label="BIC" />

        <k-input
          v-model="bankName"
          wrapper-class="mt-4"
          label="Bankinstitut"
          readonly
        />

        <k-upload wrapper-class="mt-4" />
      </div>
    </div>
  </div>
</template>
