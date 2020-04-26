import { Validation } from 'vuelidate'

export interface PersonalDetailsValidation extends Validation {
  memberId: Validation
  firstName: Validation
  lastName: Validation
  birthday: Validation
}

export interface ContactsValidation extends Validation {
  streetAddress: Validation
  streetNumber: Validation
  postcode: Validation
  city: Validation
  phone: Validation
  email: Validation
}

export interface DepartmentValidation extends Validation {
  department: Validation
  entryDate: Validation
  memberStatus: Validation
}

export interface PaymentDetailsValidation extends Validation {
  paymentMethod: Validation
  accountOwnerFirstName: Validation
  accountOwnerLastName: Validation
  iban: Validation
}
