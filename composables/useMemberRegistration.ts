import { ref, computed, reactive, toRefs } from '@vue/composition-api'
import MembersApi from '@/api/members'
import useVuelidate from '@vuelidate/core'
import { required, email, requiredIf, minLength } from '@vuelidate/validators'

export default function useMemberRegistration() {
  const loading = ref(false)

  const state = reactive({
    personalDetails: {
      memberId: '',
      firstName: '',
      lastName: '',
      birthday: '',
    },
    contacts: {
      streetAddress: '',
      streetNumber: '',
      postcode: '',
      city: '',
      phone: '',
      email: '',
    },
    department: {
      department: '',
      entryDate: '',
      memberStatus: 'active',
    },
    paymentDetails: {
      paymentMethod: '',
      accountOwnerFirstName: '',
      accountOwnerLastName: '',
      iban: '',
      bic: '',
    },
  })

  const rules = computed(() => ({
    personalDetails: {
      firstName: { required },
      lastName: { required },
      birthday: { required },
    },
    contacts: {
      streetAddress: { required },
      streetNumber: { required },
      postcode: { required },
      city: { required },
      email: { email },
    },
    department: {
      department: { required },
      entryDate: { required },
      memberStatus: { required },
    },
    paymentDetails: {
      paymentMethod: { required },
      accountOwnerFirstName: {
        requiredIf: requiredIf(
          () => state.paymentDetails.paymentMethod === 'debit'
        ),
      },
      accountOwnerLastName: {
        requiredIf: requiredIf(
          () => state.paymentDetails.paymentMethod === 'debit'
        ),
      },
      iban: {
        requiredIf: requiredIf(
          () => state.paymentDetails.paymentMethod === 'debit'
        ),
      },
    },
  }))

  const validation = useVuelidate(rules, state)

  const availableDepartments = ref([
    { value: '', text: 'Abteilung wählen', disabled: true },
    { value: 'football', text: 'Fußball' },
    { value: 'gymnastics', text: 'Gymnastik' },
    { value: 'running', text: 'Laufen' },
    { value: 'taekwondo', text: 'Taekwondo' },
  ])

  const memberStatusOptions = ref([
    { value: 'active', text: 'Aktiv' },
    { value: 'passive', text: 'Passiv' },
  ])

  const availablePaymentMethods = ref([
    { value: '', text: 'Zahlungsart auswählen', disabled: true },
    { value: 'transfer', text: 'Überweisung' },
    { value: 'debit', text: 'Lastschrift' },
  ])

  async function createMember() {
    loading.value = true
    // await MembersApi.createMember(memberRegistration)
    loading.value = false
  }

  function demoMember() {
    state.personalDetails.firstName = 'Paul'
    state.personalDetails.lastName = 'Schmidt'
    state.contacts.streetAddress = 'Aschrottstraße'
    state.contacts.streetNumber = '4'
    state.contacts.postcode = '34119'
    state.contacts.city = 'Kassel'
    state.contacts.email = 'rookian@gmail.com'
    state.personalDetails.birthday = '1988-06-16'
    state.department.department = 'football'
    state.department.memberStatus = 'active'
    state.paymentDetails.paymentMethod = 'transfer'

    console.log('Filling form with demo data...')
  }

  return {
    loading: computed(() => loading.value),
    demoMember,
    createMember,
    availableDepartments,
    memberStatusOptions,
    availablePaymentMethods,
    ...toRefs(state),
    validation,
  }
}
