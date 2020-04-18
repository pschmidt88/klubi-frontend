<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { mask } from 'vue-the-mask'
import KInput from '~/components/forms/KlubiInput.vue'
import KSelect from '~/components/forms/KlubiSelect.vue'
import KUpload from '~/components/forms/KlubiUpload.vue'
import BankApi from '~/api/bank'
import KIban from '~/components/forms/KlubiIban.vue'
import { PaymentDetailsValidation } from '~/components/partials/members/create/validationTypes'

@Component({
  directives: { mask },
  components: { KInput, KSelect, KUpload, KIban }
})
export default class PaymentDetails extends Vue {
  @Prop() readonly validator!: PaymentDetailsValidation

  private availablePaymentMethods = [
    { value: '', text: 'Zahlungsart auswählen', disabled: true },
    { value: 'transfer', text: 'Überweisung' },
    { value: 'debit', text: 'Lastschrift' }
  ]

  private iban = ''
  private bankName = ''
  private bic = ''

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
    this.validator.paymentMethod.$touch()
  }

  get accountOwnerFirstName(): string {
    return this.$store.state.members.registration.bank_details.first_name
  }

  set accountOwnerFirstName(value: string) {
    this.$store.commit('members/registration/updateBankDetailsFirstName', {
      firstName: value
    })
    this.validator.accountOwnerFirstName.$touch()
  }

  get accountOwnerLastName(): string {
    return this.$store.state.members.registration.bank_details.last_name
  }

  set accountOwnerLastName(value: string) {
    this.$store.commit('members/registration/updateBankDetailsLastName', {
      lastName: value
    })
    this.validator.accountOwnerLastName.$touch()
  }

  @Watch('iban')
  async onIbanChanged(value: string) {
    const rawIban = value.replace(/\s/g, '')

    if (rawIban.length !== 22) {
      return
    }

    this.$store.commit('members/registration/updateIBAN', { iban: rawIban })
    this.validator.iban.$touch()

    const bankResponse = await new BankApi().getBankInformationByIban(rawIban)

    this.bankName = bankResponse.data.bankName.shortName
    this.bic = bankResponse.data.bic.value
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
          :validation="validator.paymentMethod"
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
          :validation="validator.accountOwnerFirstName"
          label="Vorname"
          placeholder="Paul"
        />

        <k-input
          v-model="accountOwnerLastName"
          :validation="validator.accountOwnerLastName"
          label="Nachname"
          placeholder="Schmidt"
          wrapper-class="mt-4"
        />

        <k-iban
          v-model="iban"
          :validation="validator.iban"
          wrapper-class="mt-4"
          label="IBAN"
        />

        <k-input v-model="bic" wrapper-class="mt-4" label="BIC" />

        <k-input
          v-model="bankName"
          wrapper-class="mt-4"
          label="Bankinstitut"
          readonly
        />

        <k-upload wrapper-class="mt-4" label="SEPA Lastschriftmandat" />
      </div>
    </div>
  </div>
</template>
