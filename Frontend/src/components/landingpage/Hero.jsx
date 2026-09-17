import { ArrowRight} from 'lucide-react'

const Hero = () => {
    return (
        <div className='px-15 pt-[25vh] '>
            <div className='w-[45%]'>
                <div className='font-[cormorant-garamond-heading]'>
                    <p className='text-xl tracking-wider text-[#be7508bc]'>INDIAN CUISINE. TIMELESSLY REIMAGINED.</p>
                    <h1 className='text-7xl tracking-wide text-white'>An Experience, <br /> <span className='text-7xl tracking-wide text-[#ff9900]'>Not Just a Meal.</span></h1>
                    <hr className="text-[#ff9900] my-4 w-15" />
                    <p className='text-lg text-zinc-300'>At Veloura, we blend India's rich culinary heritage with modern <br />fine dining - creating moments that linger long after the last bite.</p>
                </div>

                <div className='flex pt-5 gap-5'>
                    <button className='flex gap-2.5 items-center text-lg  p-2 bg-[#eac080] rounded-sm text-black cursor-pointer hover:bg-[#faa422] hover:-translate-y-1 transition-all duration-300'>Reserve a Table <ArrowRight /></button>
                    <button className='border p-2 text-lg text-white rounded-sm cursor-pointer hover:text-[#faa422] hover:-translate-y-1 transition-all duration-300'>Explore Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
