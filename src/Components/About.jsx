import React from 'react'
import brand_img from '../assets/assets/brand_img.png'
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
    initial={{ x: 150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
     className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32  w-full 
    overflow-hidden ' id='about'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='font-light border-b-1 border-black'>Our Brand</span></h1>
      <p className=' text-neutral-600 max-w-80 text-center mb-8 mt-2'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={brand_img} alt="Brand" className='w-full sm:w-1/2 max-w-lg ' />
        <div className='flex flex-col items-center md:items-start md:gap-12 gap-8 '>
            <div className='grid grid-cols-2 gap-6 md:gap-8 w-full  mt-16 '>
                <div>
                    <p className='text-4xl font-bold text-gray-800'>10+</p>
                    <p className='text-neutral-600'>Years of Experience</p>
                </div>

                <div>
                    <p className='text-4xl font-bold text-gray-800'>12+</p>
                    <p className='text-neutral-600'>Project Completed</p>
                </div>

                <div>
                    <p className='text-4xl font-bold text-gray-800'>20+</p>
                    <p className='text-neutral-600'>Mn. Sq. Ft. Delivered</p>
                </div>

                <div>
                    <p className='text-4xl font-bold text-gray-800'>25+</p>
                    <p className='text-neutral-600'>Ongoing Projects</p>
                </div>

            </div>

            {/* paragraph here */}
            <p className='text-neutral-600 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            {/* btn here  */}
            <button className='bg-blue-500 text-white px-8 py-2 rounded  font-semibold '>Learn More</button>
        
        </div>
      </div>

    </motion.div>
  )
}

export default About
