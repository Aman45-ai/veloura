import { ArrowRight, Calendar, Clock, User2 } from 'lucide-react'

import React from 'react'

const Booking = () => {

    return (
        <div className='px-15 py-10 bg-[linear-gradient(180deg,#080706_0%,#1B1510_35%,#100C08_70%,#050505_100%)]'>
            <div className='flex items-center justify-between px-8 py-5 rounded-sm border border-[#B8A175]/30 bg-[linear-gradient(135deg,#0A0908_0%,#1C1710_45%,#0A0908_100%)] shadow-2xl'>
                <div className='flex items-center gap-12'>
                    <div className='flex items-center gap-3'>
                        <Calendar className='text-[#B8A175] size-5' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#B8A175] text-xs tracking-widest uppercase'> Date </p>
                            <input type='date' className='bg-transparent text-zinc-200 text-sm  cursor-pointer' />
                        </div>
                    </div>
                    <div className='h-10 w-px bg-[#B8A175]/20'></div>
                    <div className='flex items-center gap-3'>
                        <Clock className='text-[#B8A175] size-5' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#B8A175] text-xs tracking-widest uppercase'> Time </p>
                            <input type='time' className='bg-transparent text-zinc-200 text-sm cursor-pointer'/>
                        </div>
                    </div>
                    <div className='h-10 w-px bg-[#B8A175]/20'></div>
                    <div className='flex items-center gap-3'>
                        <User2 className='text-[#B8A175] size-5' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#B8A175] text-xs tracking-widest uppercase'>Guests</p>
                            <input type='number' placeholder='2' className='bg-transparent border px-1 py-0.5 border-zinc-600 text-zinc-200 text-sm w-16 placeholder:text-zinc-600'/>
                        </div>
                    </div>
                </div>


                <button className='flex items-center gap-3 px-6 py-3 bg-[#EAC080] text-black text-sm tracking-wide rounded-sm cursor-pointer hover:bg-[#F4D39A] hover:-translate-y-1 transition-all duration-300'>Find a Table<ArrowRight size={18} />
                </button>

            </div>

        </div>

    )
}

export default Booking