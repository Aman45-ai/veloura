import React from 'react'
import gallerystory from '../../assets/gallerystory.png'

const GalleryStory = () => {
    return (
        <div className='px-15 py-1 bg-[#080706] '>
            <div className='relative min-h-65 overflow-hidden border-b border-[#6c450a] '>
                <div className='absolute inset-0 w-[42%]'>
                    <img src={gallerystory} alt='An evening at Veloura' className='w-full h-full object-cover' />
                </div>
                <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0)_0%,rgba(8,7,6,0.05)_20%,rgba(8,7,6,0.85)_42%,#080706_58%,#080706_100%)]'></div>
                <div className='relative z-10 flex items-center justify-center left-20 min-h-65'>
                    <div className='text-center font-[cormorant-garamond-heading]'>
                        <h1 className='text-4xl text-[#ffefd6] tracking-wide'>YOUR STORY<br />BELONGS HERE.</h1>
                        <p className='text-zinc-300 pt-3'>Good food. Meaningful company. Lasting memories.</p>
                        <button className='mt-5 px-8 py-3 border border-[#dea869] text-[#ffefd6] text-sm tracking-widest cursor-pointer hover:bg-[#dea869] hover:text-black transition-all duration-300'>RESERVE A TABLE &nbsp; →</button>
                    </div>
                </div>
                <div className='absolute right-20 top-1/2 -translate-y-1/2'>
                    <div className='text-[#dea869] text-sm tracking-widest leading-relaxed'>
                        <p>EXCEPTIONAL FOOD</p>
                        <p>MEANINGFUL COMPANY</p>
                        <p>LASTING MEMORIES</p>
                        <hr className='w-10 mt-4 text-[#dea869]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryStory