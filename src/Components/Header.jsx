import React from 'react';
import header from '../assets/assets/header_img.png';
import Navbar from './Nav';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${header})` }}
      id="Header"
    >
      <Navbar />

      <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
       className='container text-center w-full mx-auto py-4 px-6    md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        {/* buttons here */}
        <div className="spac-x-4 mt-12">
          <button className="bg-blue-500 px-6 py-2 rounded mr-4 text-white">
            Projects 
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded">
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
