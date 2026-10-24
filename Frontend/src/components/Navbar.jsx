import { NavLink, useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import { toast } from 'sonner'
import authApi from '../services/auth.service'

const Navbar = () => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLogout = async () => {
    try {
      const response = await authApi.logoutApi()
      toast.success(response.data.message)
    } catch (error) {
      console.error('Backend logout failed:', error)
      toast.error('Server logout failed. Please try again.')
    } finally {
      logout()
      navigate('/login')
    }
  }

  return (
    <div className='flex justify-between items-center px-15 py-4 text-white'>

      <div className='flex gap-10'>
        <NavLink to='/' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' > HOME </NavLink>

        <NavLink to='/menu' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300'> MENU </NavLink>

        <NavLink to='/reservations' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' >RESERVATIONS</NavLink>
      </div>

      <div className='w-20'>
        <img src={logo1} alt='Veloura' className='w-full aspect-auto' />
      </div>

      <div className='flex gap-10 items-center'>
        <NavLink to='/gallery' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' > GALLERY </NavLink>

        <NavLink to='/contact' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' > CONTACT</NavLink>

        <button
          onClick={handleLogout}
          className="group rounded-sm border border-white/20 px-6 py-2.5 text-sm tracking-[0.18em] text-white/75 transition-all duration-300 hover:border-[#dea869]/70 hover:bg-[#dea869]/10 hover:text-[#dea869] active:scale-95 cursor-pointer"        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar