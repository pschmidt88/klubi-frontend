import axios from 'axios'

const API_BASE_URL = '/api'

export default {
  createMember(memberRegistration) {
    return axios.post(
      `${API_BASE_URL}/members/registration`,
      memberRegistration
    )
  },
}
