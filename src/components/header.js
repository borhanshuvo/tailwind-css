import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [display, setDisplay] = useState(true);
  const onToggle = () => {
    setDisplay(!display);
  };

  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap text-white">
      <a href="/" className="p-2 mr-4">
        <span className="text-xl font-bold uppercase tracking-wide">
          Tailwind CSS
        </span>
      </a>
      <button
        className="inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto"
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
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
          >
            <span className="">Home</span>
          </a>
          <a
            href="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
          >
            <span className="">About</span>
          </a>
          <a
            href="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
          >
            <span className="">Project</span>
          </a>
          <a
            href="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900 transform duration-700"
          >
            <span className="">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
