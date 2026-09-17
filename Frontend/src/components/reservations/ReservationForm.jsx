import React from 'react'
import { CalendarDays, Clock, Mail, Phone, Tag, UserRound, UsersRound } from 'lucide-react'
import reservation1 from '../../assets/reservation1.png'

const ReservationForm = () => {
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

                    <form className='pt-7'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                <UserRound className='text-[#dea869] size-5' />
                                <input type='text' placeholder='Your Name' className='w-full py-4 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-500' />
                            </div>
                            <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                <Mail className='text-[#dea869] size-5' />
                                <input type='email' placeholder='Your Email' className='w-full py-4 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-500' />
                            </div>
                            <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                <Phone className='text-[#dea869] size-5' />
                                <input type='tel' placeholder='Your Phone' className='w-full py-4 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-500' />
                            </div>
                            <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                <CalendarDays className='text-[#dea869] size-5' />
                                <input type='date' className='w-full py-4 bg-transparent text-zinc-300 outline-none' />
                            </div>
                            <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                <Clock className='text-[#dea869] size-5' />
                                <select className='w-full py-4 bg-[#080706] text-zinc-400 outline-none cursor-pointer'>
                                    <option>Select Time</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>7:00 PM</option>
                                    <option>8:00 PM</option>
                                    <option>9:00 PM</option>
                                    <option>10:00 PM</option>
                                </select>
                            </div>
                            <div className='flex items-center gap-3 border border-zinc-700 px-4'>
                                <UsersRound className='text-[#dea869] size-5' />
                                <select className='w-full py-4 bg-[#080706] text-zinc-400 outline-none cursor-pointer'>
                                    <option>Number of Guests</option>
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5 Guests</option>
                                    <option>6 Guests</option>
                                    <option>7+ Guests</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 border border-zinc-700 px-4 mt-4'>
                            <Tag className='text-[#dea869] size-5' />
                            <select className='w-full py-4 bg-[#080706] text-zinc-400 outline-none cursor-pointer'>
                                <option>Occasion (Optional)</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Business Dinner</option>
                                <option>Celebration</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <textarea placeholder='Special Requests (Optional)' rows='4' className='w-full mt-4 border border-zinc-700 px-4 py-4 bg-transparent text-zinc-300 outline-none resize-none placeholder:text-zinc-500'></textarea>

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