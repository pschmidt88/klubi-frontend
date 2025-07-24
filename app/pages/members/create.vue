<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import { computed, onMounted, ref, reactive } from "vue";
import { required, email, requiredIf } from "@vuelidate/validators";

const loading = ref(false);

const state = reactive({
  memberId: "",
  firstName: "",
  lastName: "",
  birthday: "",
  streetAddress: "",
  streetNumber: "",
  postcode: "",
  city: "",
  phone: "",
  email: "",
  department: "",
  entryDate: "",
  memberStatus: "active",
  paymentMethod: "",
  accountOwnerFirstName: "",
  accountOwnerLastName: "",
  iban: "",
  bic: "",
  bankName: "",
});

const rules = computed(() => ({
  firstName: { required },
  lastName: { required },
  birthday: { required },
  streetAddress: { required },
  streetNumber: { required },
  postcode: { required },
  phone: {},
  city: { required },
  email: { email },
  department: { required },
  entryDate: { required },
  memberStatus: { required },
  paymentMethod: { required },
  accountOwnerFirstName: {
    requiredIf: requiredIf(() => state.paymentMethod === "debit"),
  },
  accountOwnerLastName: {
    requiredIf: requiredIf(() => state.paymentMethod === "debit"),
  },
  iban: {
    requiredIf: requiredIf(() => state.paymentMethod === "debit"),
  },
}));

const v$ = useVuelidate(rules, state);

const onSubmit = async function () {
  const isValid = await v$.value.$validate();

  if (!isValid) return;

  console.log("Creating member...");
  // createMember()
};

const isDirectDebit = computed(() => {
  return state.paymentMethod === "debit";
});

const availableDepartments = ref([
  { value: "", text: "Abteilung wählen", disabled: true },
  { value: "football", text: "Fußball" },
  { value: "gymnastics", text: "Gymnastik" },
  { value: "running", text: "Laufen" },
  { value: "taekwondo", text: "Taekwondo" },
]);

const memberStatusOptions = ref([
  { value: "active", text: "Aktiv" },
  { value: "passive", text: "Passiv" },
]);

const availablePaymentMethods = ref([
  { value: "", text: "Zahlungsart auswählen", disabled: true },
  { value: "transfer", text: "Überweisung" },
  { value: "debit", text: "Lastschrift" },
]);

const fillDemoData = function () {
  state.firstName = "Paul";
  state.lastName = "Schmidt";
  state.birthday = "1988-06-16";
  state.streetAddress = "Herlebergweg";
  state.streetNumber = "20";
  state.postcode = "34130";
  state.city = "Kassel";
  state.email = "rookian@gmail.com";
  state.phone = "+49 171 7693796";
  state.department = "football";
  state.entryDate = "2020-07-01";
  state.memberStatus = "active";
  state.paymentMethod = "debit";
  state.accountOwnerFirstName = "Paul";
  state.accountOwnerLastName = "Schmidt";
  state.iban = "DE78500105175419262594";
};

onMounted(() => {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "F" && e.shiftKey) {
      e.preventDefault();
      fillDemoData();
    }
  });
});
</script>

<template>
  <div>
    <form novalidate class="container mx-auto text-gray-800 bg-white rounded shadow" @submit.prevent="onSubmit">
      <SectionHeader title="Persönliche Daten" />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <KlubiInput v-model="state.memberId" label="Mitgliedsnummer"
              placeholder="Leer lassen um automatisch zu generieren" class="mb-4" />

            <KlubiInput v-model="state.firstName" label="Vorname" placeholder="Paul" class="mb-4" :error="v$.firstName"
              @blur="v$.firstName.$touch()" />

            <KlubiInput v-model="state.lastName" label="Nachname" placeholder="Schmidt" class="mb-4"
              :error="v$.lastName" />

            <KlubiInput v-model="state.birthday" type="date" label="Geburtstag" placeholder="06/16/1988" />
          </div>
        </div>
      </div>

      <SectionHeader title="Kontakt" description="Adresse, Kontaktmöglichkeiten, etc." />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <div class="flex mb-4 xl:w-full">
              <KlubiInput v-model="state.streetAddress" label="Straße" placeholder="Herlebergweg" class="w-4/5"
                label-class="text-xs" />
              <KlubiInput v-model="state.streetNumber" label="Hausnr." placeholder="20" class="w-1/5 ml-2"
                label-class="text-xs" />
            </div>

            <div class="flex mb-4">
              <KlubiInput v-model="state.postcode" label="Postleitzahl" placeholder="34130" class="w-2/5"
                label-class="text-xs" />
              <KlubiInput v-model="state.city" label="Ort" placeholder="Kassel" class="w-3/5 ml-2"
                label-class="text-xs" />
            </div>
            <KlubiInput v-model="state.phone" placeholder="0123 456789" class="mb-4" label="Telefon" />
            <KlubiEmail v-model="state.email" label="E-Mail" placeholder="email@example.com" />
          </div>
        </div>
      </div>

      <SectionHeader title="Abteilung" description="Abteilung zuweisen (optional)" />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <KlubiSelect v-model="state.department" :options="availableDepartments" label="Abteilung" class="mb-4" />

            <KlubiInput v-model="state.entryDate" type="date" label="Eintrittsdatum" class="mb-4" />

            <KlubiRadioGroup v-model="state.memberStatus" label="Mitgliedstatus" :options="memberStatusOptions" />
          </div>
        </div>
      </div>

      <SectionHeader title="Mitgliedsbeitrag" description="Mitgliedsbeitrag und Zahlungsdaten" />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <KlubiSelect v-model="state.paymentMethod" :options="availablePaymentMethods" label="Zahlungsmethode"
              class="mb-4" />

            <div v-if="isDirectDebit">
              <KlubiInput v-model="state.accountOwnerFirstName" label="Vorname" placeholder="Paul" class="mb-4" />

              <KlubiInput v-model="state.accountOwnerLastName" label="Nachname" placeholder="Schmidt" class="mb-4" />

              <KlubiIban v-model="state.iban" class="mb-4" label="IBAN" placeholder="DE74 5001 0517 4238 1497 32" />

              <KlubiInput v-model="state.bic" class="mb-4" label="BIC" />

              <KlubiInput v-model="state.bankName" class="mb-4" label="Bankinstitut" readonly />

              <KlubiUpload label="SEPA Lastschriftmandat" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end w-full px-4 py-4 mt-6 bg-gray-100 rounded-bl rounded-br sm:px-12">
        <!--<KSubmit
          :label="$t('members.create.submit.label')"
          :is-busy="loading"-->
        <KlubiSubmit label="Create" :is-busy="loading" />
      </div>
    </form>
  </div>
</template>
