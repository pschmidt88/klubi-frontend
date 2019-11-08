export const state = () => ({
  member_id: null,
  first_name: null,
  last_name: null,
  street_address: null,
  street_number: null,
  post_code: null,
  city: null,
  birthday: null,
  phone: null,
  email: null,
  department: '',
  member_status: 'active',
  entry_date: today(),
  payment_method: '',
  bank_details: {}
})

export const mutations = {
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
    state.bank_details.firstName = payload.firstName
  },
  updateBankDetailsLastName(state, payload) {
    state.bank_details.lastName = payload.lastName
  },
  updateIBAN(state, payload) {
    state.bank_details.iban = payload.iban
  },
  updateBIC(state, payload) {
    state.bank_details.bic = payload.bic
  }
}

function today() {
  return new Date().toISOString().split('T')[0]
}
