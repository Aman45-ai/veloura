import api from './api'

const signupApi = (data) => {
    return api.post('/auth/sign-up',data)
}

const loginApi = (data) => {
    return api.post('/auth/login',data)
}

export default { signupApi, loginApi }