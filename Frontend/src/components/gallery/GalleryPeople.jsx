import React from 'react'
import people1 from '../../assets/people1.png'
import people2 from '../../assets/people2.png'
import people3 from '../../assets/people3.png'


const GalleryPeople = () => {
    return (
        <div className='px-15 py-2 bg-[linear-gradient(90deg,#080706_0%,#100D09_25%,#17110B_50%,#0D0A07_75%,#050504_100%)]'>
            <div className='grid grid-cols-5 gap-1 font-[cormorant-garamond-heading] '>
                <div className='p-2'>
                    <div className='flex justify-between'>
                        <p className='text-[#ff9900] italic text-lg'>03</p>
                        <hr className="text-[#ff9900] my-4 w-15" />
                        <p className='text-[#ff9900] italic text-lg'>OUR PEOPLE</p>

                    </div>
                    <div className='pt-5'>
                        <h3 className='text-zinc-300 text-4xl tracking-wider'>THE HEART<br />OF VELOURA</h3>
                        <p className='text-sm text-zinc-300 pt-3'>From our chefs to our guests, <br />
                            Veloura is built on people who <br />share a love for exceptional <br />experience.</p>
                    </div>
                </div>

                <div className='border border-gray-50 p-2'>
                    <img src={people1} alt="food2" className='w-full' />
                </div>


                <div className='border border-[#dea869] p-2'>
                    <img src={people2} alt="food2" className='w-full' />
                </div>
                <div className='flex flex-col items-center py-10'>
                    <hr className="text-[#ff9900] my-4 w-15 px-25" />
                    <p className='text-[#ff9900] italic text-3xl'>"Food tastes <br />better when <br /> shared"</p>
                    <hr className="text-[#ff9900] my-4 w-15 px-25" />
                    
                </div>
                <div className='border border-[#dea869] p-2'>
                    <img src={people3} alt="food3" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default GalleryPeople
