import React from 'react'

import Hero from './Hero'
import background from '../../assets/background.png'
import Signature from './Signature'
import Experience from './Experience'
import Philosophy from './Philosophy'
import Space from './Space'
import Moments from './Moments'
import Footer from '../Footer'
import Navbar from '../Navbar'



const LandingPage = () => {
  return (
    <div className=' bg-[#050404]'>
      <div className='max-w-[1600px] mx-auto'>
        <div style={
          {
            backgroundImage: `linear-gradient(90deg, rgba(5, 5, 4, 0.92) 5%, rgba(8, 7, 5, 0.72) 28%, rgba(8, 7, 5, 0.30) 68%, rgba(5, 5, 4, 0.55) 100%), url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        } className='min-h-dvh border border-b-[#6c450a]'>
          <Navbar />
          <Hero />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Experience />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Signature />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Philosophy />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Space />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Moments />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default LandingPage
