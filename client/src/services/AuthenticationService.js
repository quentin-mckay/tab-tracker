import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    login (credentials) {
        return Api().post('login', credentials)
    }
}

// can use like this
// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })