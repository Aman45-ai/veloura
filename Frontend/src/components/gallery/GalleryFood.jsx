import React from 'react'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import food3 from '../../assets/food3.png'
import food4 from '../../assets/food4.png'
const GalleryFood = () => {
    return (
        <div className='px-15 py-2 bg-[#0b0501]'>
            <div className='grid grid-cols-5 gap-1 font-[cormorant-garamond-heading] '>
                <div className='border border-[#dea869] p-2'>
                    <img src={food1} alt="food2" className='w-full' />
                </div>

                <div className='p-2'>
                    <div className='flex justify-between'>
                            <p className='text-[#ff9900] italic text-lg'>02</p>
                            <hr className="text-[#ff9900] my-4 w-15" />
                            <p className='text-[#ff9900] italic text-lg'>THE FOOD</p>
                            
                        </div>
                    <div className='pt-5'>
                        <h3 className='text-zinc-300 text-5xl tracking-wider'>ART ON <br />A PLATE</h3>
                        <p className='text-[#a5865d] pt-3'>A celebration of bold flavours, <br />seasonal ingredients and <br /> thoughtful craftmanship.</p> 
                        <p className='text-xs text-zinc-300 pt-3'>Every plate begins with a memory and ends as something entirely its own. From the first touch of flame to the final garnish, our chefs bring together time-honoured techniques and contemporary expression — creating dishes designed to be savoured, remembered, and shared.</p>
                    </div>
                </div>
                <div className='border border-[#dea869] p-2'>
                    <img src={food2} alt="food2" className='w-full' />
                </div>
                <div className='border border-[#dea869] p-2'>
                    <img src={food3} alt="food3" className='w-full' />
                </div>
                <div className='border border-[#dea869] p-2'>
                    <img src={food4} alt="food4" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default GalleryFood
