import React from 'react'
import CCard from "./CCard";
import { GiClubs } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";


function TCardsection() {
  return (
    <div className=" m-8 md:m-12 font-oswald flex-col">
      <div className="">
        <div className=" my-8 flex flex-col h-full justify-center align-middle items-center ">
          <p className="text-2xl ">Unlock the Potential of College Life</p>
          <p className='text-center' >  
          Join our college community platform and experience the benefits of easy access to notes, 
          clubs, events, and more. Connect with fellow students and make the most of your college journey.
          </p>
        </div>
      </div>
      <div 
      className="justify-center flex" 
      >
      <div className="  flex flex-col gap-8 md:gap-32 md:flex-row ">
        <a className=" flex flex-col align-middle items-center justify-center" >
          <CCard
            logo={<GiClubs className="text-2xl" />}
            tittle={"Clubs of BIT"}
            content={
              "Easily find and join clubs that align with your interests and passions."
            }
          />
          <button className="bg-black my-4 text-white py-2 px-4 rounded-2xl">
            ...discover
          </button>
        </a>

        <a className=" flex flex-col align-middle items-center justify-center">
          <CCard
            logo={<RiGalleryFill   className="text-2xl" />}
            tittle={"College Gallery"}
            content={
              "Stay updated on exciting memories happening on and off campus."
            }
          />
          <button className="bg-black my-4 text-white py-2 px-4 rounded-2xl">
            ...discover
          </button>
        </a>

      </div>
      </div>
    </div>  )
}

export default TCardsection