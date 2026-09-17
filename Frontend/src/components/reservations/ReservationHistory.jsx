import React from 'react'
import { CalendarDays, Clock, UsersRound } from 'lucide-react'

const ReservationHistory = () => {
  return (
    <div className='px-15 py-12 bg-[#0b0501] font-[cormorant-garamond-heading]'>
      <div className='flex items-end justify-between'>
        <div>
          <div className='flex items-center gap-4'>
            <hr className='text-[#dea869] w-10' />
            <p className='text-[#dea869] italic text-lg tracking-widest'>YOUR RESERVATIONS</p>
          </div>
          <h2 className='text-[#ffefd6] text-5xl tracking-wide pt-4'>RESERVATION HISTORY</h2>
          <p className='text-zinc-400 text-lg pt-2'>Keep track of your upcoming and past dining experiences.</p>
        </div>

        <div className='flex gap-2'>
          <button className='px-5 py-2 border border-[#dea869] text-[#dea869] text-sm tracking-widest cursor-pointer'>UPCOMING</button>
          <button className='px-5 py-2 border border-zinc-700 text-zinc-400 text-sm tracking-widest cursor-pointer hover:border-[#dea869] hover:text-[#dea869] transition-all duration-300'>PAST</button>
          <button className='px-5 py-2 border border-zinc-700 text-zinc-400 text-sm tracking-widest cursor-pointer hover:border-[#dea869] hover:text-[#dea869] transition-all duration-300'>ALL</button>
        </div>
      </div>

      <div className='mt-10 border border-zinc-800'>
        <div className='grid grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr_1fr] px-6 py-4 bg-[#17100a] text-[#dea869] text-xs tracking-[0.2em]'>
          <p>DATE</p>
          <p>TIME</p>
          <p>GUESTS</p>
          <p>OCCASION</p>
          <p>STATUS</p>
          <p>ACTIONS</p>
        </div>

        <div className='grid grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr_1fr] items-center px-6 py-5 border-t border-zinc-800 text-zinc-300'>
          <p>15 Sep 2026</p>
          <p>7:00 PM</p>
          <p>4 Guests</p>
          <p>Anniversary</p>
          <span className='w-fit px-4 py-1 rounded-full border border-[#dea869]/40 text-[#dea869] text-xs'>UPCOMING</span>
          <div className='flex gap-3'>
            <button className='px-5 py-2 border border-[#dea869] text-[#dea869] text-xs tracking-widest hover:bg-[#dea869] hover:text-black transition-all duration-300 cursor-pointer'>VIEW</button>
            <button className='px-4 py-2 border border-red-900 text-red-500 text-xs tracking-widest hover:bg-red-900 hover:text-white transition-all duration-300 cursor-pointer'>CANCEL</button>
          </div>
        </div>

        <div className='grid grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr_1fr] items-center px-6 py-5 border-t border-zinc-800 text-zinc-300'>
          <p>02 Sep 2026</p>
          <p>8:30 PM</p>
          <p>2 Guests</p>
          <p>Dinner</p>
          <span className='w-fit px-4 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs'>COMPLETED</span>
          <button className='w-fit px-5 py-2 border border-zinc-700 text-zinc-400 text-xs tracking-widest hover:border-[#dea869] hover:text-[#dea869] transition-all duration-300 cursor-pointer'>VIEW</button>
        </div>

        <div className='grid grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr_1fr] items-center px-6 py-5 border-t border-zinc-800 text-zinc-300'>
          <p>18 Aug 2026</p>
          <p>1:00 PM</p>
          <p>6 Guests</p>
          <p>Birthday</p>
          <span className='w-fit px-4 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs'>COMPLETED</span>
          <button className='w-fit px-5 py-2 border border-zinc-700 text-zinc-400 text-xs tracking-widest hover:border-[#dea869] hover:text-[#dea869] transition-all duration-300 cursor-pointer'>VIEW</button>
        </div>
      </div>

      <div className='flex items-center justify-center gap-6 pt-10'>
        <hr className='w-20 text-[#dea869]/40' />
        <p className='text-[#dea869] italic text-lg'>Great food creates lasting memories.</p>
        <hr className='w-20 text-[#dea869]/40' />
      </div>
    </div>
  )
}

export default ReservationHistory