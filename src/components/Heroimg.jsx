import React from 'react'
import { black_logo, bit_build, blur_bit_build } from '../assets'

function Heroimg() {
  return (
    <div className=' m-8 md:m-12 font-oswald flex flex-col md:flex-row'>
        <div className='' >        
        <div className=' flex flex-col  align-middle justify-center items-start h-full gap-4 md:gap-8 ' >
            <p className='text-2xl '>
                Empowering Students Through Technology and Innovation
            </p>
            <p>
                Discover a world of opportunities and resources, connect with like-minded individuals, and stay updated with the latest college clubs and events.
            </p>
            <button className='bg-black text-white py-2 px-4 rounded-2xl'  >
                ...discover
            </button>
        </div>
        </div>
        <img 
        className=' w-[508px] image-blurred-edge'
         src={blur_bit_build}>
        </img>

    </div>
  )
}

export default Heroimg