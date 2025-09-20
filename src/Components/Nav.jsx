import React, { useState } from "react";
import logo from "../assets/assets/logo.svg";
import menu from "../assets/assets/menu_icon.svg";
import close from "../assets/assets/cross_icon.svg";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
        {/* logo here */}
        <img src={logo} alt="Logo" />

        {/* links here */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">
            Project
          </a>
          <a href="#testimonials " className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        {/* btn here */}
        <button className="bg-white hidden md:block px-8 py-2 font-semibold rounded-full">
          Sign Up
        </button>

        {/* menu icon here */}
        <img
          src={menu}
          alt="menu"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setSideBar(true)}
        />
      </div>

      {/* mobile link */}
      <div
        className={`md:hidden fixed w-full right-0 top-0 bottom-0 bg-white transition-all duration-300 ${
          sideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* cross icon here */}
        <div className="flex justify-end p-6">
          <img
            onClick={() => setSideBar(false)}
            src={close}
            alt="close"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-4 px-5 text-lg font-medium">
          <a
            href="#"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSideBar(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSideBar(false)}
          >
            About
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSideBar(false)}
          >
            Project
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSideBar(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
