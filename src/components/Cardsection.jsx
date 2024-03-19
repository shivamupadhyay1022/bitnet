import React from "react";
import CCard from "./CCard";
import { blur_bit_build } from "../assets";
import { TbBooks } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

function Cardsection() {
  return (
    <div className=" m-8 md:m-12 font-oswald flex-col">
      <div className="">
        <div className=" my-8 flex flex-col h-full ">
          <p className="text-2xl ">Discover the stash of resources</p>
          <p>
            Explore our academic directories, note-sharing and skill
            developement capabilities to enhance your college experience.
          </p>
        </div>
      </div>
      <div 
      className="justify-center flex" 
      >
      <div className="  flex flex-col gap-8 md:gap-32 md:flex-row ">
        <a className=" flex flex-col align-middle items-center justify-center" >
          <CCard
            logo={<TbBooks className="text-2xl" />}
            tittle={"Academic resources"}
            content={
              "Get instant access to a wide range of notes, study materials, and resources."
            }
          />
          <button className="bg-black my-4 text-white py-2 px-4 rounded-2xl">
            ...discover
          </button>
        </a>

        <a className=" flex flex-col align-middle items-center justify-center">
          <CCard
            logo={<IoLogoFirebase  className="text-2xl" />}
            tittle={"Skill Developement"}
            content={
              "Develop skills, maybe learn DSA, improve CP"
            }
          />
          <button className="bg-black my-4 text-white py-2 px-4 rounded-2xl">
            ...discover
          </button>
        </a>

      </div>
      </div>
    </div>
  );
}

export default Cardsection;
