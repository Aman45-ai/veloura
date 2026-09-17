import Navbar from '../Navbar'
import GalleryHero from './GalleryHero'
import GallerySpace from './GallerySpace'
import gallery from '../../assets/gallery.png'
import GalleryFood from './GalleryFood'
import GalleryPeople from './GalleryPeople'
import GalleryMoments from './GalleryMoments'
import GalleryStory from './GalleryStory'
import Footer from '../Footer'

const Gallery = () => {
  return (
    <div className=' bg-[#050404]'>
      <div className='max-w-[1600px] mx-auto'>
        <div style={
          {
            backgroundImage: `linear-gradient(90deg, rgba(5, 5, 4, 0.92) 5%, rgba(8, 7, 5, 0.72) 28%, rgba(8, 7, 5, 0.30) 68%, rgba(5, 5, 4, 0.55) 100%), url(${gallery})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        } className='min-h-dvh border border-b-[#6c450a]'>
          <Navbar />
          <GalleryHero />
        </div>
        <div className='border border-b-[#6c450a]'>
          <GallerySpace />
        </div>
        <div className='border border-b-[#6c450a]'>
          <GalleryFood />
        </div>
        <div className='border border-b-[#6c450a]'>
          <GalleryPeople />
        </div>
        <div className='border border-b-[#6c450a]'>
          <GalleryMoments />
        </div>
        <div className='border border-b-[#6c450a]'>
          <GalleryStory />
        </div>
        <div className='border border-b-[#6c450a] '>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Gallery
