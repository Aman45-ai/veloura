
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/landingpage/LandingPage'
import Gallery from '../components/gallery/Gallery'
import Contact from '../components/contact/Contact'
import Reservation from '../components/reservations/Reservation'
import Menu from '../components/menu/Menu'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservations' element={<Reservation />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
