import { Validation } from 'vuelidate'

interface PersonalDetailsValidation extends Validation {
  memberId: Validation
  firstName: Validation
  lastName: Validation
  birthday: Validation
}

interface ContactsValidation extends Validation {
  streetAddress: Validation
  streetNumber: Validation
  postcode: Validation
  city: Validation
  phone: Validation
  email: Validation
}

interface DepartmentValidation extends Validation {
  department: Validation
  entryDate: Validation
  memberStatus: Validation
}

interface PaymentDetailsValidation extends Validation {
  paymentMethod: Validation
  accountOwnerFirstName: Validation
  accountOwnerLastName: Validation
  iban: Validation
}
