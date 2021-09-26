import axios from 'axios'

const ApiService = axios.create({ 
  baseURL: 'https://mynotes-back.herokuapp.com/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default ApiService