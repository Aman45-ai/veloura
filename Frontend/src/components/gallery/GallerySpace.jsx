import React from 'react'
import space1 from '../../assets/space1.png'
import space2 from '../../assets/space2.png'
import space3 from '../../assets/space3.png'

const GallerySpace = () => {
  return (
    <div className='bg-[linear-gradient(90deg,#080706_0%,#100D09_25%,#17110B_50%,#0D0A07_75%,#050504_100%)] px-15 py-5 flex items-center justify-between'>
          <div>
            <div>
              <p className='text-[#dea869] text-2xl italic'>01 THE SPACE</p>
              <hr className="text-[#dea869] my-4 w-10" />
            </div>
            <div className='font-[cormorant-garamond-heading]'>
              <h1 className='text-6xl text-[#ffefd6] tracking-wid font-light'>An Atmosphere <br />to Be Remembered</h1>
              <p className='text-xl text-[#a5865d] pt-3'>INTIMATE. ELEGANT. UNIQUELY VELOURE.</p>
              <p className='text-zinc-300 pt-2'>Every detail, from the lighting to the tableware, is <br />designed to create more than a meal - it's a feeling.</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='border border-[#dea869] w-60 p-2'>
              <img src={space1} alt="" className='w-full'/>
            </div>
            <div className='border border-[#dea869] w-60 p-2'>
              <img src={space2} alt="" />
            </div>
            <div className='border border-[#dea869] w-60 p-2'>
              <img src={space3} alt="" />
            </div>
          </div>
        </div>
  )
}

export default GallerySpace
