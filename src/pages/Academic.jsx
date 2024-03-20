import React from 'react'
import CNavbar from '../components/CNavbar'
import Autoslider from '../components/Autoslider'

function Academic() {
  return (
    <div className='overflow-x-hidden h-[100vh] ' >
        <CNavbar home={true} />
        <div className='flex mx-8 p-8 flex-col gap-8 align-middle justify-center items-center md:gap-16 md:flex-row' >
            <a
            href='/year1' 
            className='flex align-middle justify-center items-center h-32 w-32 md:w-36 md:h-36 bg-black rounded-3xl ' >
                <p className='text-white font-oswald text-2xl' >1st Year</p>
            </a>
            <a className='flex align-middle justify-center items-center h-32 w-32 md:w-36 md:h-36 bg-black rounded-3xl ' >
                <p className='text-white font-oswald text-2xl' >2nd Year</p>
            </a>
            <a className='flex align-middle justify-center items-center h-32 w-32 md:w-36 md:h-36 bg-black rounded-3xl ' >
                <p className='text-white font-oswald text-2xl' >3rd Year</p>
            </a>
            <a className='flex align-middle justify-center items-center h-32 w-32 md:w-36 md:h-36 bg-black rounded-3xl ' >
                <p className='text-white font-oswald text-2xl' >4th Year</p>
            </a>
        </div>
    </div>
  )
}

export default Academic