import React from "react";
import { BsSuitClubFill } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";

function CCard({logo,tittle,content}) {
  return (
    <div className="flex flex-col">
      {logo}
      <p className="text-xl font-bold">{tittle}</p>
      <p>
        {content}
      </p>
    </div>
  );
}

export default CCard;
