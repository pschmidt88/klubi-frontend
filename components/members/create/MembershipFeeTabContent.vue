<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="8">
        <b-row>
          <b-col>
            <b-form-group
              label="Zahlungsart"
              label-for="select-payment-type"
              label-class="form-control-label"
            >
              <b-form-select
                v-model="paymentMethod"
                :options="paymentTypeOptions"
              />
            </b-form-group>
          </b-col>
        </b-row>

        <template v-if="isDirectDebit">
          <b-row>
            <b-col>
              <b-form-group
                label="Vorname"
                label-for="input-account-first-name"
                label-class="form-control-label"
              >
                <b-form-input v-model="firstName" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="Nachname"
                label-for="input-account-last-name"
                label-class="form-control-label"
              >
                <b-form-input v-model="lastName" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="IBAN"
                label-for="input-iban"
                label-class="form-control-label"
              >
                <b-form-input
                  v-model="iban"
                  v-mask="'AA## #### #### #### #### ##'"
                  size="27"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="BIC"
                label-for="input-bic"
                label-class="form-control-label"
              >
                <b-form-input v-model="bic" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="Bankinstitut"
                label-for="readonly-input-bankname"
                label-class="form-control-label"
              >
                <b-form-input v-model="bankname" readonly />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group
                label="SEPA Lastschriftmandat"
                label-for="file-input-sepa-direct-debit-mandate"
                label-class="form-control-label"
              >
                <b-form-file placeholder="Dokument auswählen..." />
              </b-form-group>
            </b-col>
          </b-row>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mask } from 'vue-the-mask'
import bankAPI from '@/api/bank'

export default {
  name: 'MembershipFeeTabContent',
  directives: { mask },
  data() {
    return {
      paymentTypeOptions: [
        { value: null, text: 'Bitte eine Zahlungsart auswählen' },
        { value: 'transfer', text: 'Überweisung' },
        { value: 'direct_debit', text: 'Lastschrift' }
      ],
      bankname: null
    }
  },
  computed: {
    isDirectDebit() {
      return this.paymentMethod === 'direct_debit'
    },
    paymentMethod: {
      get() {
        return this.$store.state.members.registration.paymentMethod
      },
      set(value) {
        this.$store.commit('members/registration/updatePaymentMethod', {
          paymentMethod: value
        })
      }
    },
    firstName: {
      get() {
        return this.$store.state.members.registration.bankDetails.firstName
      },
      set(value) {
        this.$store.commit('members/registration/updateBankDetailsFirstName', {
          firstName: value
        })
      }
    },
    lastName: {
      get() {
        return this.$store.state.members.registration.bankDetails.lastName
      },
      set(value) {
        this.$store.commit('members/registration/updateBankDetailsLastName', {
          lastName: value
        })
      }
    },
    iban: {
      get() {
        return this.$store.state.members.registration.bankDetails.iban
      },
      set(value) {
        const rawIban = value.replace(/\s/g, '')
        this.onIbanChanged(rawIban)
      }
    },
    bic: {
      get() {
        return this.$store.state.members.registration.bankDetails.bic
      },
      set(value) {
        this.$store.commit('members/registration/updateBIC', { bic: value })
      }
    }
  },
  methods: {
    async onIbanChanged(value) {
      if (value.length !== 22) {
        return
      }

      this.$store.commit('members/registration/updateIBAN', { iban: value })

      const bankResponse = await bankAPI
        .getBankInformationByIban(value)
        .catch(() => {
          console.log('errorz')
        })

      this.bankname = bankResponse.data.bankName.shortName
    }
  }
}
</script>
