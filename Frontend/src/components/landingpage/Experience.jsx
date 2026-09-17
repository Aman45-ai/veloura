import React from 'react'
import experience from '../../assets/experience.png'
const Experience = () => {
    return (
        <div className='relative flex items-center justify-between gap-20 px-15 py-5  bg-[#080706]'>
            <div className='relative z-10 '>
                <div>
                    <p className='text-[#dea869] text-2xl italic'>01  Experience</p>
                    <hr className="text-[#dea869] my-4 w-10" />
                </div>
                <div className='font-[cormorant-garamond-heading]'>
                    <h1 className='text-6xl text-[#ffefd6] tracking-wid font-light'>The Veloura <br />Experience</h1>
                    <p className='text-xl text-[#a5865d] pt-3'>WHERE HERITAGE MEETS IMAGINATION.</p>
                    <p className='text-zinc-300 pt-2'>At Veloure, we believe food is more than flavour - it's a <br />story, a culture, a connection. Our menus draw from <br /> India's diverse traditions, reimagined with a modern <br />eye and a global palate.</p>
                </div>
            </div>
            <div className='absolute inset-0 bg-position-[65%_center]  bg-no-repeat bg-contain' style={{ backgroundImage: `url(${experience})` }}
            ></div>
            <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,1)_0%,rgba(5,5,4,0.85)_20%,rgba(5,5,4,0.25)_42%,rgba(5,5,4,0)_55%,rgba(5,5,4,0.25)_65%,rgba(5,5,4,0.85)_85%,rgba(5,5,4,1)_100%)]'></div>

            <div className='relative z-10'>
                <p className='italic text-lg text-[#ffefd6]'>"Food is memory,<br />reimagined for <br />today."</p>
            </div>
        </div>
    )
}

export default Experience
