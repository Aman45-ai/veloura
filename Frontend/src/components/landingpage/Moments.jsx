import React from 'react'
import { ArrowRight } from 'lucide-react'
import moments from '../../assets/moments.png'

const Moments = () => {
  return (
    <div
      className='relative flex flex-col items-center justify-center text-center py-15 bg-center bg-cover'
      style={{ backgroundImage: `url(${moments})` }}
    >
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.70)_0%,rgba(5,5,4,0.35)_50%,rgba(5,5,4,0.70)_100%)]'></div>
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,4,0.25)_0%,rgba(5,5,4,0.65)_100%)]'></div>

      <div className='relative z-10 font-[cormorant-garamond-heading]'>
        <p className='text-[#dea869] text-sm tracking-[0.3em]'>AN EVENING AT VELOURA</p>

        <h1 className='text-5xl text-[#ffefd6] font-light tracking-wide pt-3'>Some Moments Deserve to Linger.</h1>

        <button className='flex items-center gap-3 mx-auto mt-6 px-7 py-3 bg-[#eac080] text-black text-sm font-sans tracking-wide rounded-sm cursor-pointer hover:bg-[#f4d39a] hover:-translate-y-1 transition-all duration-300'>
          Reserve a Table
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Moments