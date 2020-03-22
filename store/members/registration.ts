import { ActionTree, MutationTree, GetterTree } from 'vuex'
import MembersApi from '~/api/members'

export const state = () => ({
  member_id: '',
  first_name: '',
  last_name: '',
  street_address: '',
  street_number: '',
  post_code: '',
  city: '',
  birthday: '',
  phone: '',
  email: '',
  department: '',
  member_status: 'active',
  entry_date: today(),
  payment_method: '',
  bank_details: {
    first_name: '',
    last_name: '',
    iban: '',
    bic: ''
  }
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  updateMemberId(state, payload) {
    state.member_id = payload.memberId
  },
  updateFirstName(state, payload) {
    state.first_name = payload.first_name
  },
  updateLastName(state, payload) {
    state.last_name = payload.last_name
  },
  updateStreetAddress(state, payload) {
    state.street_address = payload.street_address
  },
  updateStreetNumber(state, payload) {
    state.street_number = payload.street_number
  },
  updatePostCode(state, payload) {
    state.post_code = payload.post_code
  },
  updateCity(state, payload) {
    state.city = payload.city
  },
  updateBirthday(state, payload) {
    state.birthday = payload.birthday
  },
  updatePhone(state, payload) {
    state.phone = payload.phone
  },
  updateEmail(state, payload) {
    state.email = payload.email
  },
  updateDepartment(state, payload) {
    state.department = payload.department
  },
  updateEntryDate(state, payload) {
    state.entry_date = payload.entryDate
  },
  updateMemberStatus(state, payload) {
    state.member_status = payload.status
  },
  updatePaymentMethod(state, payload) {
    state.payment_method = payload.paymentMethod
  },
  updateBankDetailsFirstName(state, payload) {
    state.bank_details.first_name = payload.firstName
  },
  updateBankDetailsLastName(state, payload) {
    state.bank_details.last_name = payload.lastName
  },
  updateIBAN(state, payload) {
    state.bank_details.iban = payload.iban
  },
  updateBIC(state, payload) {
    state.bank_details.bic = payload.bic
  }
}

export const actions: ActionTree<RootState, RootState> = {
  createMember({ state }) {
    const dateOfBirth = new Date(state.birthday)

    const requestObject = {
      firstName: state.first_name,
      lastName: state.last_name,
      streetAddress: state.street_address,
      streetNumber: state.street_number,
      postalCode: state.post_code,
      city: state.city,
      phone: state.phone,
      email: state.email,
      birthday: dateOfBirth.toJSON().split('T')[0],
      department: state.department,
      entryDate: state.entry_date,
      memberStatus: state.member_status,
      paymentMethod: state.payment_method,
      accountOwnerFirstName: state.bank_details.first_name,
      accountOwnerLastName: state.bank_details.last_name,
      iban: state.bank_details.iban,
      bic: state.bank_details.bic
    }

    return MembersApi.createMember(requestObject)
  }
}

export const getters: GetterTree<RootState, RootState> = {
  personalDetails(state) {
    return {
      memberId: state.member_id,
      firstName: state.first_name,
      lastName: state.last_name,
      birthday: state.birthday
    }
  },
  contacts(state) {
    return {
      streetAddress: state.street_address,
      streetNumber: state.street_number,
      postcode: state.post_code,
      city: state.city,
      phone: state.phone,
      email: state.email
    }
  },
  department(state) {
    return {
      department: state.department,
      entryDate: state.entry_date,
      memberStatus: state.member_status
    }
  },
  paymentDetails(state) {
    return {
      paymentMethod: state.payment_method,
      accountOwnerFirstName: state.bank_details.first_name,
      accountOwnerLastName: state.bank_details.last_name,
      iban: state.bank_details.iban,
      bic: state.bank_details.bic
    }
  }
}

function today() {
  return new Date().toISOString().split('T')[0]
}
