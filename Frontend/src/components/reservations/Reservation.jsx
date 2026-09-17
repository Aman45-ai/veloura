import Navbar from '../Navbar'
import Footer from '../Footer'
import reservation from '../../assets/reservation.png'
import ReservationForm from './ReservationForm'
import ReservationHero from './ReservationHero'
import ReservationHistory from './ReservationHistory'

const Reservation = () => {
  return (
    <div className=' bg-[#050404]'>
      <div className='max-w-[1600px] mx-auto'>
        <div style={
          {
            backgroundImage: `linear-gradient(90deg, rgba(5, 5, 4, 0.92) 5%, rgba(8, 7, 5, 0.72) 28%, rgba(8, 7, 5, 0.30) 68%, rgba(5, 5, 4, 0.55) 100%), url(${reservation})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        } className='min-h-dvh border border-b-[#6c450a]'>
          <Navbar />
          <ReservationHero />
        </div>
        <div className='border border-b-[#6c450a]'>
          <ReservationForm />
        </div>
        <div className='border border-b-[#6c450a]'>
          <ReservationHistory />
        </div>
        <div className='border border-b-[#6c450a]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Reservation
