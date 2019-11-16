import axios from 'axios'
import { BankResponse } from '~/types/BankResponse'

const API_BASE_URL = '/api'

export default class BankApi {
  public getBankInformationByIban(iban: string): Promise<BankResponse> {
    return axios.get(`${API_BASE_URL}/bank?iban=${iban}`)
  }
}
