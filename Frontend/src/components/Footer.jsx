

const Footer = () => {
  return (
    <footer className='px-15 pt-8 pb-4 bg-[#080706] text-zinc-300'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-[cormorant-garamond-heading] text-2xl tracking-[0.2em] text-[#dea869]'>
            VELOURA
          </h1>

          <p className='text-xs tracking-[0.2em] text-zinc-400 pt-2'>
            FINE DINING. THOUGHTFULLY SERVED.
          </p>
        </div>

        <div className='flex items-center gap-8 text-sm'>
          <a href='#menu' className='hover:text-[#dea869] transition-colors duration-300'>
            Menu
          </a>

          <a href='#reservations' className='hover:text-[#dea869] transition-colors duration-300'>
            Reservations
          </a>

          <a href='#story' className='hover:text-[#dea869] transition-colors duration-300'>
            Our Story
          </a>

          <a href='#gallery' className='hover:text-[#dea869] transition-colors duration-300'>
            Gallery
          </a>

          <a href='#contact' className='hover:text-[#dea869] transition-colors duration-300'>
            Contact
          </a>
        </div>

        <div className='flex items-center gap-5'>
          <div className='h-8 w-px bg-[#B8A175]/40'></div>

          <div className='text-xs leading-5'>
            <p>New Delhi, India</p>
            <p className='text-zinc-400'>Tue – Sun | 6.30 PM – 11.30 PM</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between mt-7 pt-3 border-t border-[#B8A175]/20 text-xs text-zinc-500'>
        <p>© 2026 Veloura. All rights reserved.</p>

        <p className='tracking-[0.2em]'>
          GOOD FOOD STAYS WITH YOU
        </p>
      </div>
    </footer>
  )
}

export default Footer