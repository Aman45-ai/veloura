
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/landingpage/LandingPage'
import Gallery from '../components/gallery/Gallery'
import Contact from '../components/contact/Contact'
import Reservation from '../components/reservations/Reservation'
import Menu from '../components/menu/Menu'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import ProtectedRoutes from './ProtectedRoutes'
import AdminDashboard from '../components/admin/AdminDashboard'
import ManagerDashboard from '../components/manager/ManagerDashboard'
import CreateManager from '../components/admin/CreateManager'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes allowedRole="user">
            <LandingPage />
          </ProtectedRoutes>
        } />
        <Route path='/gallery' element={
          <ProtectedRoutes allowedRole="user">
            <Gallery />
          </ProtectedRoutes>
        } />
        <Route path='/contact' element={
          <ProtectedRoutes allowedRole="user">
            <Contact />
          </ProtectedRoutes>
        } />
        <Route path='/reservations' element={
          <ProtectedRoutes allowedRole="user">
            <Reservation />
          </ProtectedRoutes>
        } />
        <Route path='/menu' element={
          <ProtectedRoutes allowedRole="user">
            <Menu />
          </ProtectedRoutes >
        } />
        <Route path='/admin' element={
          <ProtectedRoutes allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoutes >
        } />
        <Route path='/manager' element={
          <ProtectedRoutes allowedRole="manager">
            <ManagerDashboard />
          </ProtectedRoutes >
        } />
        <Route path='/admin/create-manager-id' element={
          <ProtectedRoutes allowedRole="admin">
            <CreateManager />
          </ProtectedRoutes >
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        
      </Routes>
    </div>
  )
}

export default AppRoutes
