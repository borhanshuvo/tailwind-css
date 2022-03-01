import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../images/logo.png";

const Navbar = () => {
  const [display, setDisplay] = useState(true);
  const onToggle = () => {
    setDisplay(!display);
  };

  return (
    <div className="container md:mx-auto mx-5">
      <nav className="flex items-center bg-white p-3 flex-wrap md:mx-24 lg:mx-0">
        <a href="/" className="p-2 mr-4">
          <img src={logo} className="h-22 w-36" alt="" />
        </a>
        <button
          className="inline-flex p-3 hover:bg-gray-400 rounded lg:hidden ml-auto"
          onClick={onToggle}
        >
          <FiMenu />
        </button>
        <div
          className={`${
            display && "hidden"
          } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto lg:mr-6`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
            <a
              href="/"
              className="lg:inline-flex lg:w-auto mx-2 px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
            >
              <span className="">Home</span>
            </a>
            <a
              href="/"
              className="lg:inline-flex lg:w-auto mx-2 px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
            >
              <span className="">Product</span>
            </a>
            <a
              href="/"
              className="lg:inline-flex lg:w-auto mx-2 px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
            >
              <span className="">About US</span>
            </a>
            <a
              href="/"
              className="lg:inline-flex lg:w-auto mx-2 px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
            >
              <span className="">Contact Us</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
