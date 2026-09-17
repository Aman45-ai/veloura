import dish1 from '../../assets/dish1.png'
import dish2 from '../../assets/dish2.png'
import dish3 from '../../assets/dish3.png'

const Signature = () => {
  return (
    <div className='bg-[linear-gradient(90deg,#080706_0%,#100D09_25%,#17110B_50%,#0D0A07_75%,#050504_100%)] px-15 py-5 flex items-center justify-between' >
      <div>
        <div>
          <p className='text-[#dea869] text-2xl italic'>02 SIGNATURE</p>
          <hr className="text-[#dea869] my-4 w-10" />
        </div>
        <div className='font-[cormorant-garamond-heading]'>
          <h1 className='text-6xl text-[#ffefd6] tracking-wid font-light'>Our Signature <br />Dishes</h1>
          <p className='text-xl text-[#a5865d] pt-3'>A CURATED TASTE OF EXTRAORDINARY.</p>
          <p className='text-zinc-300 pt-2'>From time - honored classics to bold new creations,<br />our signature dishes celebrate the depth and <br />diversity of Indian cuisine</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='border border-[#dea869] w-60 p-2'>
          <img src={dish1} alt="dish1" className='w-full' />
          <div className='bg-[#0E0B08]'>
            <h3 className='text-zinc-300 text-lg'>Smoked Tandoori Salmon</h3>
            <p className='text-zinc-500 text-xs'>Charred salmon · silky herb purée · roasted tomatoes · microgreens</p>
            <div className='flex justify-between'>
              <hr className="text-[#ff9900] my-4 w-15" />
              <p className='text-[#ff9900] italic text-lg'>01</p>
            </div>
          </div>
        </div>
        <div className='border border-[#dea869] w-60 p-2'>
          <img src={dish2} alt="dish2" className='w-full' />
          <div className='bg-[#0E0B08]'>
            <h3 className='text-zinc-300 text-lg'>Veloura Lamb Shank</h3>
            <p className='text-zinc-500 text-xs'>Slow-braised lamb shank · silky herb purée · glazed vegetables · rich jus</p>
            <div className='flex justify-between'>
              <hr className="text-[#ff9900] my-4 w-15" />
              <p className='text-[#ff9900] italic text-lg'>02</p>
            </div>
          </div>
        </div>
        <div className='border border-[#dea869] w-60 p-2'>
          <img src={dish3} alt="dish3" className='w-full' />
          <div className='bg-[#0E0B08]'>
            <h3 className='text-zinc-300 text-lg'>Royal Tandoori Salmon</h3>
            <p className='text-zinc-500 text-xs'>Charred salmon · spiced cream sauce · pomegranate · microgreens</p>
            <div className='flex justify-between'>
              <hr className="text-[#ff9900] my-4 w-15" />
              <p className='text-[#ff9900] italic text-lg'>03</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signature
