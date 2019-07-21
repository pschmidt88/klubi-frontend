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
                v-model="paymentType"
                :options="paymentTypeOptions" />
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
                <b-form-input v-model="accountFirstName" />
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
                <b-form-input v-model="accountLastName" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="IBAN"
                label-for="input-iban"
                label-class="form-control-label">
                <b-form-input
                  v-mask="'AA## #### #### #### #### ##'"
                  v-model="iban" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="BIC"
                label-for="input-bic"
                label-class="form-control-label">
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
                <b-form-input
                  v-model="bankname"
                  readonly />
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
import { mask } from "vue-the-mask"
import bankAPI from "@/api/bank"

export default {
  name: "MembershipFeeTabContent",
  directives: { mask },
  data() {
    return {
      bic: null,
      paymentType: null,
      accountFirstName: null,
      accountLastName: null,
      iban: null,
      paymentTypeOptions: [
        { value: null, text: "Bitte eine Zahlungsart auswählen" },
        { value: "transfer", text: "Überweisung" },
        { value: "direct_debit", text: "Lastschrift" }
      ],
      bankname: null
    }
  },
  computed: {
    isDirectDebit() {
      return this.paymentType === "direct_debit"
    }
  },
  watch: {
    iban() {
      this.onIbanChanged()
    }
  },
  methods: {
    async onIbanChanged() {
      let rawIban = this.iban.replace(/\s/g, "")

      if (rawIban.length != 22) {
        return
      }

      let bankResponse = await bankAPI
        .getBankInformationByIban(rawIban)
        .catch(() => {
          console.log("errorz")
        })

      this.bankname = bankResponse.data.bankName.shortName
    }
  }
}
</script>
