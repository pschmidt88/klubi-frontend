import { ref, computed, reactive, toRefs } from '@vue/composition-api'
import MembersApi from '@/api/members'
import { required, email, requiredIf } from 'vuelidate/lib/validators'

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
    ...toRefs(state),
  }
}

export const validations = {
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
      requiredIf: requiredIf(function (model: any) {
        return model.paymentDetails.paymentMethod === 'debit'
      }),
    },
    accountOwnerLastName: {
      requiredIf: requiredIf(function (model: any) {
        return model.paymentDetails.paymentMethod === 'debit'
      }),
    },
    iban: {
      requiredIf: requiredIf(function (model: any) {
        return model.paymentDetails.paymentMethod === 'debit'
      }),
    },
  },
}
