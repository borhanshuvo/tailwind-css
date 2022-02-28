import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import product1 from "../images/banner-products/product-1.png";

const Header = () => {
  return (
    <div className="container lg:mx-28 mx-5 lg:flex lg:justify-between lg:items-center">
      <div className="">
        <h1 className="lg:text-5xl text-2xl font-semibold">Mackbook Pro</h1>
        <p className="text-base font-light">
          Country to popular belief, Lorem ipsum is not simply random text. It
          has roots in a peace of classical latin liturature.
        </p>
        <button className="bg-black text-white px-3 py-1 rounded flex justify-between items-center text-base">BUY NOW<span className="pl-2 text-base"><BsArrowRightShort /></span></button>
      </div>
      <div>
        <img src={product1} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default Header;
