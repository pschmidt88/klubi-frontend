export interface Member {
  id: number
  name: string
  address: string
  city: string
  birthday: string
  contact: {
    phone?: string
    email?: string
  }
}
