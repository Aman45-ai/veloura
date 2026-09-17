import React from 'react'
import MenuItems from './MenuItems'
import menuHero from '../../assets/menuHero.png'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { ArrowRight } from 'lucide-react'

const Menu = () => {
    return (
        <div className='bg-[#050404]'>
            <div className='max-w-[1600px] mx-auto'>
                <div
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(5, 5, 4, 0.92) 5%, rgba(8, 7, 5, 0.72) 28%, rgba(8, 7, 5, 0.30) 68%, rgba(5, 5, 4, 0.55) 100%), url(${menuHero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className='min-h-dvh border border-b-[#6c450a]'
                >
                    <Navbar />
                    <div className='px-15 pt-[25vh]'>
                        <div className='w-[45%]'>
                            <div className='font-[cormorant-garamond-heading]'>
                                <p className='text-[#dea869] italic text-lg tracking-widest'>OUR MENU</p>
                                <h1 className='text-7xl tracking-wide text-[#ffefd6] pt-4'>A JOURNEY<br />OF FLAVOURS</h1>
                                <hr className='text-[#dea869] my-5 w-15' />
                                <p className='text-lg text-zinc-300 leading-relaxed'>Thoughtfully curated dishes, inspired by tradition,<br />crafted for today.</p>
                                <button className='mt-7 px-7 py-3 border border-[#dea869] text-[#ffefd6] text-sm tracking-widest cursor-pointer hover:bg-[#dea869] hover:text-black transition-all duration-300'>EXPLORE OUR MENU <ArrowRight className='inline ml-3 size-4' /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuItems />
                <div className='border border-b-[#6c450a]'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Menu