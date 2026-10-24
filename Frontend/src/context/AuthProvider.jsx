import { useState } from 'react'
import AuthContext  from './AuthContext'

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null)
    const [role, setRole] = useState(localStorage.getItem('role') || null)
    const isLoggedIn = !!accessToken

    const login = (token, role) => {
        localStorage.setItem('accessToken', token)
        setAccessToken(token)
        localStorage.setItem('role', role)
        setRole(role)
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setAccessToken(null)
        localStorage.removeItem('role')
        setRole(null)
    }

    return (
        <AuthContext.Provider value={{accessToken, setAccessToken, isLoggedIn, login, logout, role, setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider