import React from 'react'
import contact2 from '../../assets/contact2.png'
import contact3 from '../../assets/contact3.png'

const ContactMessage = () => {
    return (
        <div className='px-15 py-2 bg-[#0b0501]'>
            <div className='grid grid-cols-[1fr_2fr_1fr] min-h-143.75 border border-[#dea869]'>
                    <img src={contact2} alt='Veloura dining interior' className='w-full h-full object-cover' />   
                <div className='px-16 py-12 bg-[#080706] font-[cormorant-garamond-heading]'>
                    <p className='text-[#dea869] text-sm tracking-widest'>SEND US A MESSAGE</p>
                    <h2 className='text-[#ffefd6] text-5xl pt-3 tracking-wide'>DROP A LINE</h2>
                    <p className='text-zinc-400 text-lg pt-3 leading-relaxed'>Have a question, suggestion or a special request?<br />Fill out the form and we'll get back to you soon.</p>

                    <form className='pt-7'>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type='text' placeholder='Your Name' className='bg-transparent border border-zinc-700 px-4 py-3 text-zinc-300 outline-none focus:border-[#dea869]' />
                            <input type='email' placeholder='Your Email' className='bg-transparent border border-zinc-700 px-4 py-3 text-zinc-300 outline-none focus:border-[#dea869]' />
                        </div>
                        <input type='text' placeholder='Subject' className='w-full mt-4 bg-transparent border border-zinc-700 px-4 py-3 text-zinc-300 outline-none focus:border-[#dea869]' />
                        <textarea placeholder='Message' rows='4' className='w-full mt-4 bg-transparent border border-zinc-700 px-4 py-3 text-zinc-300 outline-none resize-none focus:border-[#dea869]'></textarea>
                        <button type='submit' className='mt-7 px-12 py-3 border border-[#dea869] text-[#ffefd6] text-sm tracking-widest cursor-pointer hover:bg-[#dea869] hover:text-black transition-all duration-300'>SEND MESSAGE &nbsp; →</button>
                    </form>
                </div>

                <div className='relative'>
                    <img src={contact3} alt='Veloura dining table' className='w-full h-full object-cover' /> 
                </div>
            </div>
        </div>
    )
}

export default ContactMessage