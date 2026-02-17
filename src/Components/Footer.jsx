import React from 'react'
import dark_logo from '../assets/assets/logo_dark.svg'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='bg-gray-900 pt-8 sm:pt-16 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 '>

      <div className='flex justify-between lg:items-start max-lg:flex-col gap-10 border-b border-gray-700 pb-10  '>

        {/* Logo + Text */}
        <div className='text-white max-w-sm'>
          <img src={dark_logo} alt="Dark Logo" className='mb-4 w-32'/>
          <p className='text-gray-400 text-sm leading-relaxed'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>


        {/* Links */}
        <ul>
          <li className='text-white font-bold mb-4'>Company</li>
          <li className='text-gray-400 mb-2 hover:text-white cursor-pointer'>Home</li>
          <li className='text-gray-400 mb-2 hover:text-white cursor-pointer'>About</li>
          <li className='text-gray-400 mb-2 hover:text-white cursor-pointer'>Contact us</li>
          <li className='text-gray-400 mb-2 hover:text-white cursor-pointer'>Privacy Policy</li>
        </ul>


        {/* Newsletter */}
        <div>
          <h3 className='text-lg text-white font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mt-2 max-w-sm text-sm'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex gap-0 mt-4 w-full md:w-1/2'>
            <input 
              className='rounded-l-md px-3 py-2 outline-none bg-gray-800 text-white placeholder-gray-400 w-48 sm:w-64' 
              type="email" 
              placeholder='Enter your email' 
            />  
            <button className='bg-blue-600 text-white rounded-r-md px-4 hover:bg-blue-700 transition duration-300'>
              Subscribe
            </button>
          </div>
        </div>
        

      </div>

      {/* Footer bottom message */}
      <motion.p 
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
      className='text-gray-500 text-center text-sm mt-6  pb-8'>
        Copyright 2024 © GreatStack. All Rights Reserved.
      </motion.p>
    </div>
  )
}

export default Footer
