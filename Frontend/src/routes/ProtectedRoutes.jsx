import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children, allowedRole }) => {
    const { isLoggedIn, role } = useContext(AuthContext)

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    if (role !== allowedRole) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoutes
