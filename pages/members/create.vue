<template>
  <div class="w-3/4 mx-auto text-gray-800">
    <h2 class="text-2xl font-medium mb-3">Neues Mitglied anlegen</h2>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Persönliche Daten</h3>

      <div class="mb-4">
        <label class="block text-sm mb-2" for="inputMemberId">
          Mitgliedsnummer
          <span class="text-xs font-normal text-gray-500">
            (Leer lassen um automatisch zu generieren)
          </span>
        </label>
        <input
          id="inputMemberId"
          v-model="memberId"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="1337"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm mb-2" for="inputFirstName">
          Vorname
        </label>
        <input
          id="inputFirstName"
          v-model="firstName"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Paul"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm mb-2" for="inputLastName">
          Nachname
        </label>
        <input
          id="inputLastName"
          v-model="lastName"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Schmidt"
        />
      </div>

      <div class="mb-4">
        <span class="text-sm">Geburtstag</span>
        <div class="flex">
          <div class="w-1/3">
            <label class="block text-xs mb-2" for="inputDobDay">
              Tag
            </label>
            <input
              id="inputDobDay"
              v-model="dobDay"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              type="text"
              placeholder="16"
            />
          </div>

          <div class="w-1/3 ml-2">
            <label class="block text-xs mb-2" for="inputDobMonth">
              Monat
            </label>
            <input
              id="inputDobMonth"
              v-model="dobMonth"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              type="text"
              placeholder="06"
            />
          </div>

          <div class="w-1/3 ml-2">
            <label class="block text-xs mb-2" for="inputDobYear">
              Jahr
            </label>
            <input
              id="inputDobYear"
              v-model="dobYear"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              type="text"
              placeholder="1988"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Kontakt</h3>

      <div class="mb-4">
        <span class="text-sm">Adresse</span>
        <div class="flex mb-2">
          <div class="w-4/5">
            <label class="block text-xs mb-2" for="inputStreetAddress">
              Straße
            </label>
            <input
              id="inputStreetAddress"
              v-model="streetAddress"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Aschrottstraße"
            />
          </div>
          <div class="w-1/5 ml-2">
            <label class="block text-xs mb-2" for="inputStreetNumber">
              Hausnr.
            </label>
            <input
              id="inputStreetNumber"
              v-model="houseNumber"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="4"
            />
          </div>
        </div>
        <div class="flex mb-4">
          <div class="w-2/5">
            <label class="block text-xs mb-2" for="inputPostcode">
              Postleitzahl
            </label>
            <input
              id="inputPostcode"
              v-model="postCode"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="34119"
            />
          </div>
          <div class="w-3/5 ml-2">
            <label class="block text-xs mb-2" for="inputCity">
              Ort
            </label>
            <input
              id="inputCity"
              v-model="city"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Kassel"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm mb-2" for="inputPhoneNumber">
            Telefon
          </label>
          <input
            id="inputPhoneNumber"
            v-model="phone"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="01717693796"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm mb-2" for="inputEmail">
            E-Mail
          </label>
          <input
            id="inputEmail"
            v-model="email"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="rookian@gmail.com"
          />
        </div>
      </div>
    </div>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Abteilung</h3>

      <div class="mb-4">
        <label class="block text-sm mb-2" for="selectDepartment">
          Abteilung
        </label>
        <div class="relative">
          <select
            id="selectDepartment"
            v-model="department"
            class="block appearance-none w-full border bg-white text-gray-700 py-2 px-3 rounded pr-8 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-500"
          >
            <option
              v-for="option in availableDepartments"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
            >
              {{ option.text }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm mb-2" for="inputEntryDate">
          Eintrittdatum
        </label>
        <input
          id="inputEntryDate"
          v-model="entryDate"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm mb-2" for="inputEntryDate">
          Mitgliedsstatus
        </label>

        <label for="radioActive" class="inline-flex items-center">
          <input
            v-model="status"
            type="radio"
            value="active"
            name="memberStatus"
          />
          <span class="ml-2">Aktiv</span>
        </label>

        <label for="radioPassive" class="inline-flex items-center">
          <input
            v-model="status"
            type="radio"
            value="passive"
            name="memberStatus"
          />
          <span class="ml-2">Passiv</span>
        </label>
      </div>
    </div>

    <div class="shadow-md bg-white rounded mb-6 px-6 py-6">
      <h3 class="text-lg mb-4">Mitgliedsbeitrag &amp; Zahlungsdaten</h3>
      <div class="mb-4">
        <label class="block text-sm mb-2" for="selectPaymentMethod">
          Zahlungsmethode
        </label>
        <div class="relative">
          <select
            id="selectPaymentMethod"
            v-model="paymentMethod"
            class="block appearance-none w-full border bg-white text-gray-700 py-2 px-3 rounded pr-8 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-500"
          >
            <option
              v-for="option in availablePaymentMethods"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
            >
              {{ option.text }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <template v-if="isDirectDebit">
        <div class="mb-4">
          <span class="text-sm">Kontoinhaber</span>

          <div class="flex">
            <div class="w-1/2">
              <label
                class="block text-xs mb-2"
                for="inputAccountOwnerFirstName"
              >
                Vorname
              </label>
              <input
                id="inputAccountOwnerFirstName"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Paul"
              />
            </div>
            <div class="w-1/2 ml-2">
              <label class="block text-xs mb-2" for="inputAccountOwnerLastName">
                Nachname
              </label>
              <input
                id="inputAccountOwnerLastName"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Schmidt"
              />
            </div>
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

        <div class="mb-4">
          <label class="block text-sm mb-2" for="inputBic">
            BIC
          </label>
          <input
            id="inputBic"
            v-model="bic"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm mb-2" for="readonlyInputBankname">
            Bankinstitut
          </label>
          <input
            id="readonlyInputBankname"
            v-model="bankName"
            readonly
            class="appearance-none border bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight cursor-default"
            type="text"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm mb-2" for="uploadMandate">
            Lastschriftmandat
          </label>
          <div class="items-center bg-grey-lighter">
            <label
              class="flex items-center px-3 py-2 bg-white text-indigo-700 rounded border border-indigo-600 cursor-pointer hover:bg-indigo-700 hover:text-white"
            >
              <svg
                class="w-6 h-6 mr-3"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                />
              </svg>
              <span class="text-sm">
                SEPA Mandat hochladen
              </span>
              <input id="uploadMandate" type="file" class="hidden" />
            </label>
          </div>
        </div>
      </template>
    </div>

    <div class="flex justify-end">
      <button
        class="mb-4 border text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 border-indigo-700 rounded px-2 py-2"
        @click="createMember"
      >
        Mitglied anlegen
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import { mask } from 'vue-the-mask'
import Consola from 'consola'
import bankAPI from '~/api/bank'

interface BankResponse {
  data: BankData
}

interface BankData {
  bankName: BankName
  bankCode: BankCode
  bic: Bic
}

interface BankName {
  shortName: string
  name: string
}

interface BankCode {
  value: string
}

interface Bic {
  value: string
}

@Component({
  directives: { mask }
})
export default class MemberCreatePage extends Vue {
  bankName: string = ''

  dobDay = null
  dobMonth = null
  dobYear = null

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
    { value: 'direct_debit', text: 'Lastschrift' }
  ]

  get isDirectDebit(): boolean {
    return this.paymentMethod === 'direct_debit'
  }

  async onIbanChanged(value: string) {
    if (value.length !== 22) {
      return
    }

    this.$store.commit('members/registration/updateIBAN', { iban: value })

    const bankResponse = await bankAPI.getBankInformationByIban(value)

    this.bankName = (bankResponse as BankResponse).data.bankName.shortName
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

  get iban(): string {
    return this.$store.state.members.registration.bank_details.iban
  }

  set iban(value: string) {
    const rawIban = value.replace(/\s/g, '')
    this.onIbanChanged(rawIban)
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
    return this.$store.state.members.registration.bank_details.firstName
  }

  set accountOwnerFirstName(value: string) {
    this.$store.commit('members/registration/updateBankDetailsFirstName', {
      firstName: value
    })
  }

  get accountOwnerLastName(): string {
    return this.$store.state.members.registration.bank_details.lastName
  }

  set accountOwnerLastName(value: string) {
    this.$store.commit('members/registration/updateBankDetailsLastName', {
      lastName: value
    })
  }

  createMember() {}
}
</script>
