export interface BankResponse {
  data: BankData
}

export interface BankData {
  bankName: BankName
  bankCode: BankCode
  bic: Bic
}

export interface BankName {
  shortName: string
  name: string
}

export interface BankCode {
  value: string
}

export interface Bic {
  value: string
}
