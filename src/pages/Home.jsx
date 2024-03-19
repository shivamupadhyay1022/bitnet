import React from 'react'
import CNavbar from '../components/CNavbar'
import Heroimg from '../components/Heroimg'
import Cardsection from '../components/Cardsection'
import Autoslider from '../components/Autoslider'

function Home() {
  return (
    <div className='overflow-x-hidden' >
      <CNavbar home={true} />
      <Heroimg/>
      <Cardsection/>
      <Autoslider/>
    </div>
  )
}

export default Home