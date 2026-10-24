import { CalendarDays, Clock, Mail, Phone, Tag, UserRound, UsersRound } from 'lucide-react'
import reservation1 from '../../assets/reservation1.png'
import { useForm } from 'react-hook-form'
import reservation from '../../services/reservation.service'
import { toast } from 'sonner'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const getLocalDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

const ReservationForm = ({setRefresh}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { isLoggedIn, accessToken } = useContext(AuthContext)

    const today = new Date()
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 7)

    const onSubmit = async (data) => {
        if (!isLoggedIn || !accessToken) {
            toast.error("Please login to make a reservation!")
            return
        }
        try {
            const response = await reservation.reservationApi(data)
            setRefresh(prev => !prev)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response?.data?.message || error.response?.data || "Something went wrong!")
        }

        reset()
    }


    return (
        <div className='px-15 py-5 bg-[#0b0501]'>
            <div className='grid grid-cols-[1.7fr_1fr] gap-1 min-h-162.5'>
                <div className='border border-[#dea869] px-10 py-8 bg-[#080706] font-[cormorant-garamond-heading]'>
                    <div className='flex items-center gap-4'>
                        <hr className='text-[#dea869] w-10' />
                        <p className='text-[#dea869] italic text-lg tracking-widest'>BOOK A TABLE</p>
                    </div>

                    <h2 className='text-[#ffefd6] text-5xl tracking-wide pt-4'>MAKE A RESERVATION</h2>
                    <p className='text-zinc-400 text-lg pt-2'>Fill in the details below and we'll prepare the perfect table for you.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className='pt-7'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                    <UserRound className='text-[#dea869] size-5' />
                                    <input type='text' placeholder='Your Name' className='w-full py-4 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-500'
                                        {...register("name", {
                                            required: "Name is required!",
                                            minLength: { value: 3, message: "Name must be at least 3 characters long!" }
                                        })}
                                    />
                                </div>
                                {errors.name && <p className='text-red-400 text-sm mt-1'>{errors.name.message}</p>}
                            </div>

                            <div>
                                <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                    <Mail className='text-[#dea869] size-5' />
                                    <input type='email' placeholder='Your Email' className='w-full py-4 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-500'
                                        {...register("email", {
                                            required: "Email is required!",
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address!" }
                                        })}
                                    />
                                </div>
                                {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email.message}</p>}
                            </div>

                            <div>
                                <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                    <Phone className='text-[#dea869] size-5' />
                                    <input type='tel' placeholder='Your Phone' className='w-full py-4 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-500'
                                        {...register("phone", {
                                            required: "Phone number is required!",
                                            pattern: { value: /^[6-9]\d{9}$/, message: "Please enter a valid 10-digit Indian mobile number!" }
                                        })}
                                    />
                                </div>
                                {errors.phone && <p className='text-red-400 text-sm mt-1'>{errors.phone.message}</p>}
                            </div>

                            <div>
                                <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                    <CalendarDays className='text-[#dea869] size-5' />
                                    <input type='date' className='w-full py-4 bg-transparent text-zinc-300 outline-none'
                                        {...register("date", {
                                            required: "Reservation date is required!",
                                            min: { value: getLocalDate(today), message: "Past dates are not allowed!" },
                                            max: { value: getLocalDate(maxDate), message: "Reservations can only be made 7 days in advance!" }
                                        })}
                                    />
                                </div>
                                {errors.date && <p className='text-red-400 text-sm mt-1'>{errors.date.message}</p>}
                            </div>

                            <div>
                                <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                    <Clock className='text-[#dea869] size-5' />
                                    <select defaultValue='' className='w-full py-4 bg-[#080706] text-zinc-400 outline-none cursor-pointer'
                                        {...register("time", { required: "Time is required!" })}
                                    >
                                        <option value='' disabled>Select Time</option>
                                        <option value='12:00'>12:00 PM</option>
                                        <option value='13:00'>1:00 PM</option>
                                        <option value='14:00'>2:00 PM</option>
                                        <option value='19:00'>7:00 PM</option>
                                        <option value='20:00'>8:00 PM</option>
                                        <option value='21:00'>9:00 PM</option>
                                        <option value='22:00'>10:00 PM</option>
                                    </select>
                                </div>
                                {errors.time && <p className='text-red-400 text-sm mt-1'>{errors.time.message}</p>}
                            </div>

                            <div>
                                <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                    <UsersRound className='text-[#dea869] size-5' />
                                    <select defaultValue='' className='w-full py-4 bg-[#080706] text-zinc-400 outline-none cursor-pointer'
                                        {...register("guests", { required: "Number of guests is required!" })}
                                    >
                                        <option value='' disabled>Number of Guests</option>
                                        <option value='1'>1 Guest</option>
                                        <option value='2'>2 Guests</option>
                                        <option value='3'>3 Guests</option>
                                        <option value='4'>4 Guests</option>
                                        <option value='5'>5 Guests</option>
                                        <option value='6'>6 Guests</option>
                                        <option value='7'>7 Guests</option>
                                    </select>
                                </div>
                                {errors.guests && <p className='text-red-400 text-sm mt-1'>{errors.guests.message}</p>}
                            </div>
                        </div>



                        <textarea placeholder='Special Requests (Optional)' rows='4' className='w-full mt-4 border border-zinc-700 px-4 py-4 bg-transparent text-zinc-300 outline-none resize-none placeholder:text-zinc-500'
                            {...register("specialRequest", {
                                maxLength: { value: 30, message: "Maximum 30 characters are allowed!" }
                            })}
                        />
                        {errors.specialRequest && <p className='text-red-400 text-sm mt-1'>{errors.specialRequest.message}</p>}

                        <button type='submit' className='mt-6 px-10 py-3 border border-[#dea869] text-[#ffefd6] text-sm tracking-widest cursor-pointer hover:bg-[#dea869] hover:text-black transition-all duration-300'>
                            BOOK TABLE &nbsp; →
                        </button>
                    </form>

                    <div className='grid grid-cols-3 gap-6 border-t border-[#dea869]/20 mt-8 pt-6'>
                        <div>
                            <p className='text-[#dea869] text-sm tracking-widest'>FLEXIBLE BOOKINGS</p>
                            <p className='text-zinc-400 text-sm pt-2 leading-relaxed'>Plan ahead or book last minute.</p>
                        </div>
                        <div>
                            <p className='text-[#dea869] text-sm tracking-widest'>SPECIAL OCCASIONS</p>
                            <p className='text-zinc-400 text-sm pt-2 leading-relaxed'>Birthdays, anniversaries or celebrations.</p>
                        </div>
                        <div>
                            <p className='text-[#dea869] text-sm tracking-widest'>PERSONALIZED SERVICE</p>
                            <p className='text-zinc-400 text-sm pt-2 leading-relaxed'>Share your preferences with us.</p>
                        </div>
                    </div>
                </div>

                <div className='relative border border-[#dea869] overflow-hidden'>
                    <img src={reservation1} alt='Veloura dining experience' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/20'></div>
                    <div className='absolute bottom-10 right-10 text-right'>
                        <p className='text-[#dea869] text-2xl tracking-[0.3em]'>VELOURA</p>
                        <p className='text-[#a5865d] text-sm pt-2'>Fine Dining. ThoughtFullyServed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationForm
