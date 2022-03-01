import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({ data }) => {
  return (
    <div className="text-center p-5 shadow-lg shadow-cyan-500/50 rounded text-lg">
      <div>
        <img src={data.img} className="mx-auto h-100 w-100" alt="" />
        <h5>{data.name}</h5>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <button className="bg-black text-white px-3 py-1 rounded flex justify-between items-center text-base mx-auto">
          BUY NOW
          <span className="pl-2 text-base">
            <BsArrowRightShort />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
