import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-15 py-4 text-white'>

      <div className='flex gap-10'>
        <NavLink to='/' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' > HOME </NavLink>

        <NavLink to='/menu' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300'> MENU </NavLink>

        <NavLink to ='/reservations' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' >RESERVATIONS</NavLink>
      </div>

      <div className='w-20'>
        <img src={logo1} alt='Veloura' className='w-full aspect-auto' />
      </div>

      <div className='flex gap-10 items-center'>
        <NavLink to='/gallery' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' > GALLERY </NavLink>

        <NavLink to='/contact' className='relative text-sm tracking-widest hover:text-[#dea869] transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[#dea869] hover:after:w-full after:transition-all after:duration-300' > CONTACT</NavLink>

        <NavLink to='/reservations' className='px-6 py-2.5 border border-[#dea869]/50 text-[#ffefd6] text-sm tracking-widest rounded-sm hover:bg-[#dea869] hover:text-black hover:border-[#dea869] hover:-translate-y-1 transition-all duration-300' >BOOK A TABLE </NavLink>
      </div>
    </div>
  )
}

export default Navbar