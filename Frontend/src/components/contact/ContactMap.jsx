
import contact1 from '../../assets/contact1.png'

import { Clock, LocateIcon, Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
const ContactMap = () => {
    return (
        <div className='px-15 py-2 bg-[#0b0501]'>
            <div className='grid grid-cols-3 gap-3 font-[cormorant-garamond-heading] '>

                <div className='p-2'>
                    <div className='flex items-center gap-5'>
                        <hr className="text-[#ff9900] my-4 w-10" />
                        <p className='text-[#ff9900] italic text-2xl'>REACH US</p>

                    </div>
                    <div className='pt-5'>
                        <h3 className='text-zinc-200 text-5xl tracking-wider'>VISIT US</h3>
                        <p className='text-[#a5865d] pt-3 text-lg leading-relaxed'>Come experience Veloura in person. <br />We're located in the heart of the city, <br />ready to welcome you.</p>
                        <div className='flex flex-col gap-6 pt-8'>
                            <div className='flex items-start gap-5'>
                                <LocateIcon className='text-[#dea869] size-5 mt-1' />
                                <div>
                                    <p className='text-[#dea869] text-xs tracking-widest'>ADDRESS</p>
                                    <p className='text-sm text-zinc-300 pt-2 leading-relaxed'>123 Elegance Avenue <br />Connaught Place, New Delhi 201XXX <br />India</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Phone className='text-[#dea869] size-5' />
                                <div>
                                    <p className='text-[#dea869] text-xs tracking-widest'>PHONE</p>
                                    <p className='text-sm text-zinc-300 pt-2'>+91 9122XXXXXX</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Mail className='text-[#dea869] size-5' />
                                <div>
                                    <p className='text-[#dea869] text-xs tracking-widest'>EMAIL</p>
                                    <p className='text-sm text-zinc-300 pt-2'>hello@veloura.com</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-5'>
                                <Clock className='text-[#dea869] size-5 mt-1' />
                                <div>
                                    <p className='text-[#dea869] text-xs tracking-widest'>HOURS</p>
                                    <p className='text-sm text-zinc-300 pt-2'>MON — SUN</p>
                                    <p className='text-sm text-zinc-400 pt-1'>12:00 PM — 11:30 PM</p>
                                </div>
                            </div>
                        </div>
                        <hr className='text-[#ff9900] my-7 w-15' />
                        <p className='text-[#dea869] italic text-lg tracking-wide'>A PLACE FOR <br />EVERY OCCASION.</p>
                    </div>
                </div>
                <div className='border border-[#dea869] p-2'>
                    <img src={contact1} alt="food4" />
                </div>
                <div className='relative h-full min-h-125 overflow-hidden'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13533.88178706995!2d77.2049872035704!3d28.628901610663934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e1!3m2!1sen!2sin!4v1789501086788!5m2!1sen!2sin'
                        className='w-full h-full border-0'
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='strict-origin-when-cross-origin'
                    ></iframe>
                    <div className='absolute inset-0 bg-[#0b0501]/35 pointer-events-none'></div>
                </div>
            </div>
        </div>
    )
}

export default ContactMap

