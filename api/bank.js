import axios from 'axios'

const API_BASE_URL = '/api'

export default {
  getBankInformationByIban(iban) {
    return axios.get(`${API_BASE_URL}/bank?iban=${iban}`)
  }
}
