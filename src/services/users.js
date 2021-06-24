import ApiService from './api'

const UserService = {
  index: () => JSON.parse(localStorage.getItem('user')),
  register: params => ApiService.post('/users/register', params),
  login: async params => {
    const { data } = await ApiService.post('/users/login', params)
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('token', data.token)
  },
  logout: () => {
    localStorage.removeItem('user', null)
    localStorage.removeItem('token', null)
  },
}

export default UserService
