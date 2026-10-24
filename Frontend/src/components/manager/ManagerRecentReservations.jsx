import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import ManagerStatusBadge from './ManagerStatusBadge'
import managerService from '../../services/manager.service'

const ManagerRecentReservations = () => {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response =
          await managerService.managerGetManagerReservationsApi()

        const data = response.data.allReservations

        setReservations(Array.isArray(data) ? data : [])
      } catch (error) {
        toast.error(
          error.response?.data?.message || 'Failed to load reservations'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchReservations()
  }, [])

  const handleReservationAction = async (reservationId, status) => {
    try {
      await managerService.managerUpdateReservationStatusApi(
        reservationId,
        { status }
      )


      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation._id === reservationId
            ? { ...reservation, status }
            : reservation
        )
      )

      toast.success(
        `Reservation ${status.toLowerCase()} successfully`
      )
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to update reservation'
      )
    }
}

return (
  <div className="bg-[#141210] border border-[#2a2420] rounded-2xl p-6 flex-1">

    <div className="flex items-center justify-between mb-1">
      <h3 className="text-lg text-white font-serif">
        Recent Reservations
      </h3>
    </div>

    <p className="text-sm text-neutral-500 mb-4">
      Latest table reservations and their status.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">

        <thead>
          <tr className="text-neutral-400 border-b border-[#2a2420]">
            <th className="pb-2 font-normal">Guest</th>
            <th className="pb-2 font-normal">Date &amp; Time</th>
            <th className="pb-2 font-normal">Guests</th>
            <th className="pb-2 font-normal">Status</th>
            <th className="pb-2 font-normal">Actions</th>
          </tr>
        </thead>

        <tbody>

          {loading ? (
            <tr>
              <td
                colSpan="5"
                className="py-6 text-center text-neutral-400"
              >
                Loading reservations...
              </td>
            </tr>
          ) : reservations.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="py-6 text-center text-neutral-400"
              >
                No reservations found.
              </td>
            </tr>
          ) : (
            reservations.map((reservation) => {

              const isPending =
                reservation.status === 'pending'

              return (
                <tr
                  key={reservation._id}
                  className="border-b border-[#1e1a17] text-white"
                >

                  <td className="py-3">
                    {reservation.name ||
                      reservation.user?.name ||
                      'Guest'}
                  </td>

                  <td className="py-3 text-neutral-300">
                    {reservation.date
                      ? new Date(
                        reservation.date
                      ).toLocaleString()
                      : 'N/A'}
                  </td>

                  <td className="py-3 text-neutral-300">
                    {reservation.guests ??
                      reservation.numberOfGuests ??
                      'N/A'}
                  </td>

                  <td className="py-3">
                    <ManagerStatusBadge
                      status={reservation.status}
                    />
                  </td>

                  <td className="py-3">
                    <div className="flex items-center gap-2">

                      <button
                        type="button"
                        disabled={!isPending}
                        onClick={() =>
                          handleReservationAction(
                            reservation._id,
                            'confirmed'
                          )
                        }
                        className={`text-xs rounded-lg px-3 py-1.5 border transition ${isPending
                            ? 'border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 cursor-pointer'
                            : 'border-neutral-700 text-neutral-600 opacity-50 cursor-not-allowed'
                          }`}
                      >
                        Confirm
                      </button>

                      <button
                        type="button"
                        disabled={!isPending}
                        onClick={() =>
                          handleReservationAction(
                            reservation._id,
                            'rejected'
                          )
                        }
                        className={`text-xs rounded-lg px-3 py-1.5 border transition ${isPending
                            ? 'border-red-500/40 text-red-400 hover:bg-red-500/10 cursor-pointer'
                            : 'border-neutral-700 text-neutral-600 opacity-50 cursor-not-allowed'
                          }`}
                      >
                        Reject
                      </button>

                    </div>
                  </td>

                </tr>
              )
            })
          )}

        </tbody>
      </table>
    </div>
  </div>
)
}

export default ManagerRecentReservations