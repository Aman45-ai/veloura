import React from 'react'
import gallerymoments1 from '../../assets/gallerymoments1.png'
import gallerymoments2 from '../../assets/gallerymoments2.png'
import gallerymoments3 from '../../assets/gallerymoments3.png'
import gallerymoments4 from '../../assets/gallerymoments4.png'

const GalleryMoments = () => {
    return (

            <div className='grid grid-cols-[2fr_1.25fr_1.7fr] gap-1 px-15 py-1 bg-[#080706] border-b border-[#6c450a]'>
                <div className='relative'>
                    <img src={gallerymoments1} alt='Veloura inauguration' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent'></div>
                </div>
                <div className='flex flex-col justify-between px-8 py-7 bg-[#080706]'>
                    <div className='flex justify-between items-center text-[#dea869]'>
                        <p className='text-xl italic'>04</p>
                        <div className='flex items-center gap-3'>
                            <hr className='w-10 text-[#dea869]' />
                            <p className='text-sm tracking-widest'>SIGNATURE MOMENTS</p>
                        </div>
                    </div>
                    <div className='font-[cormorant-garamond-heading]'>
                        <h1 className='text-4xl text-[#ffefd6] tracking-wide'>CELEBRATING<br />TOGETHER.</h1>
                        <p className='text-zinc-300 pt-4 leading-relaxed'>From our grand inauguration<br />to special guest evenings, Veloura<br />is a space for memories that last<br />beyond the table.</p>
                        <p className='text-[#dea869] text-sm tracking-widest pt-5'>MANY MORE MOMENTS TO COME</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-1'>
                    <img src={gallerymoments2} alt='Chef and guest at Veloura' className='w-full h-full object-cover' />
                    <div className='flex items-center px-5 bg-[#080706]'>
                        <p className='text-[#dea869] text-sm tracking-widest leading-relaxed'>CHEF ARJUN MEHTA<br />WITH CHIEF GUEST<br />AT THE INAUGURATION</p>
                    </div>
                    <img src={gallerymoments3} alt='Live performance at Veloura' className='w-full h-full object-cover' />
                    <img src={gallerymoments4} alt='Dining at Veloura' className='w-full h-full object-cover' />
                </div>
            </div>

    )
}

export default GalleryMoments