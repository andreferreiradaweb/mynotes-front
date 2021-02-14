import Api from './api'

const UserService = {
    index: () => JSON.parse(localStorage.getItem('user')),
    register: params => Api.post('/users/register', params),
    login: async params => {
        const { data } = await Api.post('/users/login', params)
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', data.token)
    },
    logout: () => {
        localStorage.removeItem('user', null)
        localStorage.removeItem('token', null)
    }
}

export default UserService