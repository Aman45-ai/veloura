import api from './api'

const signupApi = (data) => {
    return api.post('/auth/sign-up',data)
}

const loginApi = (data) => {
    return api.post('/auth/login',data)
}

const logoutApi = () => {
    return api.post('/auth/logout')
}

export default { signupApi, loginApi, logoutApi }