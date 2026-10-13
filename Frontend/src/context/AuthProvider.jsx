import { useState } from 'react'
import AuthContext  from './AuthContext'

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null)
    const isLoggedIn = !!accessToken

    const login = (token) => {
        localStorage.setItem('accessToken', token)
        setAccessToken(token)
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setAccessToken(null)
    }

    return (
        <AuthContext.Provider value={{accessToken, setAccessToken, isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider