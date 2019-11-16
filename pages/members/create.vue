<template>
  <div class="w-3/4 mx-auto text-gray-800">
    <h2 class="text-2xl font-medium mb-3">Neues Mitglied anlegen</h2>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Persönliche Daten</h3>

      <k-input v-model="memberId" placeholder="1337" wrapper-class="mb-4">
        <template v-slot:label>
          Mitgliedsnummer
          <span class="text-xs font-normal text-gray-500">
            (Leer lassen um automatisch zu generieren)
          </span>
        </template>
      </k-input>

      <k-input
        v-model="firstName"
        label="Vorname"
        placeholder="Paul"
        wrapper-class="mb-4"
      />

      <k-input
        v-model="lastName"
        label="Nachname"
        placeholder="Schmidt"
        wrapper-class="mb-4"
      />

      <div class="mb-4">
        <span class="text-sm">Geburtstag</span>
        <div class="flex">
          <k-input
            v-model="dobDay"
            label="Tag"
            placeholder="16"
            wrapper-class="w-1/3"
            label-class="text-xs"
          />

          <k-input
            v-model="dobMonth"
            label="Monat"
            placeholder="06"
            wrapper-class="w-1/3 ml-2"
            label-class="text-xs"
          />

          <k-input
            v-model="dobYear"
            label="Jahr"
            placeholder="1988"
            wrapper-class="w-1/3 ml-2"
            label-class="text-xs"
          />
        </div>
      </div>
    </div>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Kontakt</h3>

      <div class="mb-4">
        <span class="text-sm">Adresse</span>
        <div class="flex mb-2">
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

        <div class="flex mb-4">
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

        <k-input
          v-model="email"
          label="E-Mail"
          placeholder="rookian@gmail.com"
        />
      </div>
    </div>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Abteilung</h3>

      <k-select
        v-model="department"
        :options="availableDepartments"
        wrapper-class="mb-4"
        label="Abteilung"
      />

      <k-input
        v-model="entryDate"
        type="date"
        label="Eintrittsdatum"
        wrapper-class="mb-4"
      />

      <k-radio-group
        v-model="status"
        :options="memberStatusOptions"
        label="Mitgliedstatus"
        wrapper-class="mb-4"
      />
    </div>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Mitgliedsbeitrag &amp; Zahlungsdaten</h3>

      <k-select
        v-model="paymentMethod"
        :options="availablePaymentMethods"
        label="Zahlungsmethode"
        wrapper-class="mb-4"
      />

      <template v-if="isDirectDebit">
        <div class="mb-4">
          <span class="text-sm">Kontoinhaber</span>

          <div class="flex">
            <k-input
              v-model="accountOwnerFirstName"
              label-class="text-xs"
              wrapper-class="w-1/2"
              label="Vorname"
              placeholder="Paul"
            />

            <k-input
              v-model="accountOwnerLastName"
              label-class="text-xs"
              wrapper-class="w-1/2 ml-2"
              label="Nachname"
              placeholder="Schmidt"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm mb-2" for="inputIban">
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

        <k-input v-model="bic" wrapper-class="mb-4" label="BIC" />

        <k-input
          v-model="bankName"
          wrapper-class="mb-4"
          label="Bankinstitut"
          readonly
        />

        <k-upload />
      </template>
    </div>

    <div class="flex justify-end">
      <button
        @click="createMember"
        class="mb-4 border text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 border-indigo-700 rounded px-2 py-2"
      >
        Mitglied anlegen
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import { mask } from 'vue-the-mask'
import KInput from '~/components/forms/Input.vue'
import KSelect from '~/components/forms/Select.vue'
import KUpload from '~/components/forms/Upload.vue'
import KRadioGroup from '~/components/forms/RadioGroup.vue'
import BankApi from '~/api/bank.ts'

@Component({
  directives: { mask },
  components: { KInput, KSelect, KUpload, KRadioGroup }
})
export default class MemberCreatePage extends Vue {
  bankName: string = ''

  dobDay = null
  dobMonth = null
  dobYear = null
  iban: string = ''

  availableDepartments = [
    { value: '', text: 'Abteilung wählen', disabled: true },
    { value: 'football', text: 'Fußball' },
    { value: 'gymnastics', text: 'Gymnastik' },
    { value: 'running', text: 'Laufen' },
    { value: 'taekwondo', text: 'Taekwondo' }
  ]

  availablePaymentMethods = [
    { value: '', text: 'Zahlungsart auswählen', disabled: true },
    { value: 'transfer', text: 'Überweisung' },
    { value: 'debit', text: 'Lastschrift' }
  ]

  memberStatusOptions = [
    { value: 'active', text: 'Aktiv' },
    { value: 'passive', text: 'Passiv' }
  ]

  get isDirectDebit(): boolean {
    return this.paymentMethod === 'debit'
  }

  @Watch('iban')
  async onIbanChanged(value: string) {
    const rawIban = value.replace(/\s/g, '')

    if (rawIban.length !== 22) {
      return
    }

    this.$store.commit('members/registration/updateIBAN', { iban: rawIban })

    const bankResponse = await new BankApi().getBankInformationByIban(rawIban)

    this.bankName = bankResponse.data.bankName.shortName
    this.bic = bankResponse.data.bic.value
  }

  @Watch('birthday')
  onBirthdayChanged(newValue: number) {
    if (!isNaN(newValue)) {
      this.$store.commit('members/registration/updateBirthday', {
        birthday: newValue
      })
    }
  }

  get memberId(): string {
    return this.$store.state.members.registration.member_id
  }

  set memberId(value: string) {
    this.$store.commit('members/registration/updateMemberId', {
      memberId: value
    })
  }

  get firstName(): string {
    return this.$store.state.members.registration.first_name
  }

  set firstName(value: string) {
    this.$store.commit('members/registration/updateFirstName', {
      first_name: value
    })
  }

  get lastName(): string {
    return this.$store.state.members.registration.last_name
  }

  set lastName(value: string) {
    this.$store.commit({
      type: 'members/registration/updateLastName',
      last_name: value
    })
  }

  get birthday(): number | null {
    if (this.dobDay == null || this.dobMonth == null || this.dobYear == null) {
      return null
    }

    return Date.parse(`${this.dobYear}-${this.dobMonth}-${this.dobDay}`)
  }

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

  get department(): string {
    return this.$store.state.members.registration.department
  }

  set department(value: string) {
    this.$store.commit('members/registration/updateDepartment', {
      department: value
    })
  }

  get status(): string {
    return this.$store.state.members.registration.member_status
  }

  set status(value: string) {
    this.$store.commit('members/registration/updateMemberStatus', {
      status: value
    })
  }

  get entryDate(): string {
    return this.$store.state.members.registration.entry_date
  }

  set entryDate(value: string) {
    this.$store.commit('members/registration/updateEntryDate', {
      entryDate: value
    })
  }

  get bic(): string {
    return this.$store.state.members.registration.bank_details.bic
  }

  set bic(value: string) {
    this.$store.commit('members/registration/updateBIC', { bic: value })
  }

  get paymentMethod() {
    return this.$store.state.members.registration.payment_method
  }

  set paymentMethod(value: string) {
    this.$store.commit('members/registration/updatePaymentMethod', {
      paymentMethod: value
    })
  }

  get accountOwnerFirstName(): string {
    return this.$store.state.members.registration.bank_details.first_name
  }

  set accountOwnerFirstName(value: string) {
    this.$store.commit('members/registration/updateBankDetailsFirstName', {
      firstName: value
    })
  }

  get accountOwnerLastName(): string {
    return this.$store.state.members.registration.bank_details.last_name
  }

  set accountOwnerLastName(value: string) {
    this.$store.commit('members/registration/updateBankDetailsLastName', {
      lastName: value
    })
  }

  createMember() {
    this.$store.dispatch('members/registration/createMember')
  }
}
</script>
