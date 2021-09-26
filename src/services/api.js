import axios from 'axios'

const ApiService = axios.create({ 
  baseURL: 'https://mynotes-back.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default ApiService