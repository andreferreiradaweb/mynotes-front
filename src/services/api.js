import axios from 'axios'

const ApiService = axios.create({ 
  baseURL: 'https://mynotes-back.herokuapp.com/'
})

export default ApiService