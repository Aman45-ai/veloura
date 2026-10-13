
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/landingpage/LandingPage'
import Gallery from '../components/gallery/Gallery'
import Contact from '../components/contact/Contact'
import Reservation from '../components/reservations/Reservation'
import Menu from '../components/menu/Menu'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes>
            <LandingPage />
          </ProtectedRoutes>
        } />
        <Route path='/gallery' element={
          <ProtectedRoutes>
            <Gallery />
          </ProtectedRoutes>
        } />
        <Route path='/contact' element={
          <ProtectedRoutes>
            <Contact />
          </ProtectedRoutes>
        } />
        <Route path='/reservations' element={
          <ProtectedRoutes>
            <Reservation />
          </ProtectedRoutes>
        } />
        <Route path='/menu' element={
          <ProtectedRoutes>
            <Menu />
          </ProtectedRoutes>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
