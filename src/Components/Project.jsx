import React, { useState } from "react";
import left from "../assets/assets/left_arrow.svg";
import right from "../assets/assets/right_arrow.svg";
import profile1 from "../assets/assets/project_img_1.jpg";
import profile2 from "../assets/assets/project_img_2.jpg";
import profile3 from "../assets/assets/project_img_3.jpg";
import profile4 from "../assets/assets/project_img_4.jpg";
import profile5 from "../assets/assets/project_img_5.jpg";
import profile6 from "../assets/assets/project_img_6.jpg";
import { motion } from "framer-motion";

const Project = () => {
  const projectsData = [
    { title: "Skyline Haven", price: "$2,50,000", location: "California", image: profile1 },
    { title: "Vista Verde", price: "$2,50,000", location: "San Francisco", image: profile2 },
    { title: "Serenity Suites", price: "$2,50,000", location: "Chicago", image: profile3 },
    { title: "Central Square", price: "$2,50,000", location: "Los Angeles", image: profile4 },
    { title: "Vista Verde", price: "$2,50,000", location: "San Francisco", image: profile5 },
    { title: "Serenity Suites", price: "$2,50,000", location: "Chicago", image: profile6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="font-light border-b-1 border-black">Completed</span>
      </h1>
      <p className="text-center text-neutral-600 max-w-80 mx-auto mb-8 mt-2">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* slider btns here */}
      <div className="flex justify-end items-center gap-4 mb-8">
        <div
          onClick={handlePrev}
          className="bg-gray-200 p-3 rounded cursor-pointer hover:bg-gray-300"
        >
          <img src={left} alt="left" className="w-4 h-4" />
        </div>
        <div
          onClick={handleNext}
          className="bg-gray-200 p-3 rounded cursor-pointer hover:bg-gray-300"
        >
          <img src={right} alt="right" className="w-4 h-4" />
        </div>
      </div>

      {/* profiles here */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />

              {/* cards style */}
              <div className="absolute bottom-8 right-0 left-0 flex justify-center">
                <div className="inline-block bg-white/90 w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                  <p className="text-gray-600 text-xs">
                    {project.price} <span> | </span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
