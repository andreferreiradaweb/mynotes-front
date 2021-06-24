import axios from 'axios'

const ApiService = axios.create({ baseURL: 'http://localhost:3001' })

export default ApiService