
import { CalendarDays, Clock, UsersRound } from 'lucide-react'
import reservation from "../../services/reservation.service"
import { useEffect, useState } from 'react'

const ReservationHistory = ({refresh}) => {
  const [reservations, setReservations] = useState([])


const fetchReservations = async () => {
    try {
        const response = await reservation.getUserReservationApi()
        setReservations(response.data.reservations)
    } catch (error) {
        console.error("Error fetching reservations:", error)
    }
}

useEffect(() => {
    fetchReservations()
}, [refresh])

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

      </div>


      {reservations.length === 0 ? (
        <div className="mt-10 relative overflow-hidden border border-[#dea869]/20 bg-linear-to-br from-[#191009] via-[#100a06] to-[#0b0501]">

          <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#dea869]/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-[#dea869]/5 blur-3xl" />

          <div className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">

            <div className="flex items-center justify-center w-20 h-20 rounded-full border border-[#dea869]/30 bg-[#dea869]/5 mb-8">
              <CalendarDays
                size={34}
                strokeWidth={1}
                className="text-[#dea869]"
              />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <hr className="w-8 border-[#dea869]/50" />
              <p className="text-[#dea869] uppercase text-xs tracking-[0.3em]">
                Your Table Awaits
              </p>
              <hr className="w-8 border-[#dea869]/50" />
            </div>

            <h3 className="text-[#ffefd6] text-4xl md:text-5xl tracking-wide mb-5">
              No Reservations Yet
            </h3>


            <p className="max-w-md text-zinc-400 text-base md:text-lg leading-relaxed">
              Your next memorable dining experience is waiting.
              Reserve your table and let us make your evening extraordinary.
            </p>


            <div className="flex items-center gap-4 mt-8 mb-8">
              <hr className="w-12 border-[#dea869]/30" />
              <span className="text-[#dea869] text-lg">✦</span>
              <hr className="w-12 border-[#dea869]/30" />
            </div>


            <p className="text-zinc-600 text-sm italic mt-6">
              Fine Dining. ThoughtFullyServed.
            </p>

          </div>
        </div>
      ) : (
        <div className="mt-10 border border-zinc-800">

          <div className="grid grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr_1fr] px-6 py-4 bg-[#17100a] text-[#dea869] text-xs tracking-[0.2em]">
            <p>DATE</p>
            <p>TIME</p>
            <p>GUESTS</p>
            <p>OCCASION</p>
            <p>STATUS</p>
            <p>ACTIONS</p>
          </div>

          {reservations.map((values) => (
            <div
              key={values._id}
              className="grid grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr_1fr] items-center px-6 py-5 border-t border-zinc-800 text-zinc-300"
            >
              <p>{new Date(values.date).toLocaleDateString('en-IN')}</p>
              <p>{values.time}</p>
              <p>{values.guests}</p>
              <p>{values.occasion || "-"}</p>
              <p>{values.status}</p>

              <div className="flex gap-3">
                <button className="px-5 py-2 border border-[#dea869] text-[#dea869] text-xs tracking-widest hover:bg-[#dea869] hover:text-black transition-all duration-300 cursor-pointer">
                  VIEW
                </button>

                <button className="px-4 py-2 border border-red-900 text-red-500 text-xs tracking-widest hover:bg-red-900 hover:text-white transition-all duration-300 cursor-pointer">
                  CANCEL
                </button>
              </div>
            </div>
          ))}
        </div>
      )}


      <div className='flex items-center justify-center gap-6 pt-10'>
        <hr className='w-20 text-[#dea869]/40' />
        <p className='text-[#dea869] italic text-lg'>Great food creates lasting memories.</p>
        <hr className='w-20 text-[#dea869]/40' />
      </div>
    </div>
  )
}

export default ReservationHistory