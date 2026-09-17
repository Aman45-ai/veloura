import Navbar from '../Navbar'
import Footer from '../Footer'
import contact from '../../assets/contact.png'
import ContactHero from './ContactHero'
import ContactMap from './ContactMap'
import ContactMessage from './ContactMessage'

const Contact = () => {
  return (
    <div className=' bg-[#050404]'>
      <div className='max-w-[1600px] mx-auto'>
        <div style={
          {
            backgroundImage: `linear-gradient(90deg, rgba(5, 5, 4, 0.92) 5%, rgba(8, 7, 5, 0.72) 28%, rgba(8, 7, 5, 0.30) 68%, rgba(5, 5, 4, 0.55) 100%), url(${contact})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        } className='min-h-dvh border border-b-[#6c450a]'>
          <Navbar />
          <ContactHero />
        </div>
        <div className='border border-b-[#6c450a]'>
          <ContactMap />
        </div>
        <div className='border border-b-[#6c450a]'>
          <ContactMessage />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contact
