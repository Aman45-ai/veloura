import React from 'react'
import philosophy from '../../assets/philosophy.png'

const Philosophy = () => {
  return (
    <div className='flex items-center px-15 py-5 relative bg-[#080706]'>
      <div className='absolute inset-0 left-15 top-1 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${philosophy})`, maskImage: 'linear-gradient(to right, black 10%, black 5%, transparent 65%)',
    WebkitMaskImage: 'linear-gradient(to right, black 0%, black 45%, transparent 65%)', }}
      ></div>
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.15)_0%,rgba(8,7,5,0.05)_35%,rgba(8,7,5,0.25)_55%,rgba(8,7,5,0.70)_75%,rgba(5,5,4,0.98)_100%)]'></div>
      
      <div className='relative z-10 ml-auto w-[40%]'>
        <div>
          <p className='text-[#dea869] text-2xl italic'>03 PHILOSOPHY</p>
          <hr className="text-[#ff9900] my-4 w-15" />
        </div>
        <div className='font-[cormorant-garamond-heading]'>
          <h1 className='text-6xl text-[#ffefd6] tracking-wid font-light'>The Art of <br />Indian Dining</h1>
          <p className='text-xl text-[#a5865d] pt-3'>ANCIENT TECHNIQUES. CONTEMPORARY EXPRESSION.</p>
          <p className='text-zinc-300 pt-2'>We honour tradition - not by replicating it, but by <br />reimagining it. At Veloure, every ingridient has a past <br />and a possibility.</p>
        </div>
      </div>
    </div>
  )
}

export default Philosophy
