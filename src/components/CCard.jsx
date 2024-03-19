import React from "react";
import { BsSuitClubFill } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";

function CCard({logo,tittle,content}) {
  return (
    <div className="flex justify-center items-center align-middle flex-col">
      {logo}
      <p className="text-xl font-bold">{tittle}</p>
      <p className="text-center" >
        {content}
      </p>
    </div>
  );
}

export default CCard;
