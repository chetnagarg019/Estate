import React from 'react';
import profile_img_1 from '../assets/assets/profile_img_1.png';
import profile_img_2 from '../assets/assets/profile_img_2.png';
import profile_img_3 from '../assets/assets/profile_img_3.png';
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Donald Jackman",
      title: "Marketing Manager",
      image: profile_img_1,
      alt: "Portrait of Donald Jackman",
      rating: 5,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
      name: "Richard Nelson",
      title: "UI/UX Designer",
      image: profile_img_2,
      alt: "Portrait of Richard Nelson",
      rating: 4,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
      name: "James Washington",
      title: "Co-Founder",
      image: profile_img_3,
      alt: "Portrait of James Washington",
      rating: 5,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
  ];

  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
     className='container mx-auto py-10  md:px-20 lg:px-32  w-full overflow-hidden' id='testimonials'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers <span className="font-light border-b-1 border-black">Testimonials</span>
      </h1>
      <p className="text-center text-neutral-600 max-w-80 mx-auto mb-8 mt-2 ">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className='flex flex-wrap justify-center gap-8 my-20 '>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='  bg-[#fef9ff] max-w-[340px]  shadow-lg rounded px-8 py-12  text-center '>
            <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
            <h3 className='text-xl text-gray-700  font-medium mb-1'>{testimonial.name}</h3>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 mb-4'>
              {Array.from({length:testimonial.rating}).map((_, i) => (
                <span key={i} className='text-red-500'>&#9733;</span>
              ))}
              {Array.from({length:5 - testimonial.rating}).map((_, i) => (
                <span key={i} className='text-gray-300'>&#9733;</span>
              ))}
            </div>
            <p className='text-gray-600 '> {testimonial.text} </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
