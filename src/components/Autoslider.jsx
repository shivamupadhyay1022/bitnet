import React from "react";
import Marquee from "react-fast-marquee";
import "./Auto.css";

function Autoslider() {
  return (
    <div className=" my-8">
      <Marquee>
        <p className=" font-oswald mx-4 text-2xl slide">PMC</p>
        <p className=" font-oswald mx-4 text-2xl slide">RnD</p>
        <p className=" font-oswald mx-4 text-2xl slide">shorbagh 1</p>
        <p className=" font-oswald mx-4 text-2xl slide">main building</p>
        <p className=" font-oswald mx-4 text-2xl slide">mehek</p>
        <p className=" font-oswald mx-4 text-2xl slide">IC arena</p>
        <p className=" font-oswald mx-4 text-2xl slide">HnC</p>
        <p className=" font-oswald mx-4 text-2xl slide">inner circle</p>
        <p className=" font-oswald mx-4 text-2xl slide">techno</p>
        <p className=" font-oswald mx-4 text-2xl slide">shorbagh 2</p>
        <p className=" font-oswald mx-4 text-2xl slide">upper lawn</p>
        <p className=" font-oswald mx-4 text-2xl slide">vedha cafe</p>
        <p className=" font-oswald mx-4 text-2xl slide">OC</p>
        <p className=" font-oswald mx-4 text-2xl slide">sports complex</p>
      </Marquee>
    </div>
  );
}

export default Autoslider;
