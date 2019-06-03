<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="10">
        <b-row>
          <b-col>
            <b-form-group
              label="Zahlungsart"
              label-for="select-payment-type"
              label-class="form-control-label"
            >
              <b-form-select v-model="paymentType" :options="paymentTypeOptions"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <template v-if="isDirectDebit">
          <b-row>
            <b-col>
              <b-form-group label="Vorname" label-for="input-account-first-name" label-class="form-control-label">
                <b-form-input v-model="accountFirstName"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Nachname" label-for="input-account-last-name" label-class="form-control-label">
                <b-form-input v-model="accountLastName"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="IBAN" label-for="input-iban" label-class="form-control-label">
                <b-form-input v-model="iban" v-mask="'AA## #### #### #### #### ##'"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  name: "membership-fee-tab-content",
  directives: { mask },
  data() {
    return {
      paymentType: null,
      accountFirstName: null,
      accountLastName: null,
      iban: null,
      paymentTypeOptions: [
        { value: null, text: "Bitte eine Zahlungsart auswählen" },
        { value: "transfer", text: "Überweisung" },
        { value: "direct_debit", text: "Lastschrift" }
      ]
    };
  },
  computed: {
    isDirectDebit() {
      return this.paymentType === "direct_debit";
    }
  }
};
</script>

