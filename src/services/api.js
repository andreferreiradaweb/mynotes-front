import axios from 'axios'

export default function ApiService () {
  return axios.create({ baseURL: 'http://localhost:3001' })
}
