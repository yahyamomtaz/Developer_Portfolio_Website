import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GridBackground from "./Grid";
import emojiIcon from "../assets/me.png";
import downloadButton from "../assets/arrowd.svg";
import cvPdf from "../utility/Yahya Momtaz CV.pdf";

function Header() {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden w-full max-w-full pb-16 lg:pb-32"
      style={{ height: viewportHeight }}
    >
      <GridBackground />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-center flex-col gap-2 text-center w-full max-w-full"
      >
        {/* Emoji Icon with animation */}
        <motion.img 
          src={emojiIcon} 
          alt="emoji" 
          className="w-80 sm:w-[30rem] lg:w-64 pb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        />

        {/* Main Title */}
        <motion.p 
          className="text-3xl sm:text-8xl font-bold text-white mb-4 lg:mb-1 tracking-wider mt-6 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{type: "spring", stiffness: 100, delay: 0.2, duration: 1 }}
        >
          YAYA MOMT
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          className="text-3xl lg:text-sm font-normal bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Full-Stack Developer 
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-4xl lg:text-sm font-light text-gray-200 w-[80%] lg:w-2/3 text-center leading-relaxed tracking-wide mt-8 lg:mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I am a passionate learner and developer with a diverse skillset in web development, data science, cloud infrastructure, and artificial intelligence.Proficient in Python, R, Swift, Making APIs and Front End development.
        </motion.p>

        {/* Download CV Button */}
        <motion.a 
          className="text-black text-3xl lg:text-base font-semibold py-4 lg:py-2 px-8 bg-gradient-to-r from-[#95BA93] to-[#CFAC2F] rounded-full flex items-center justify-center gap-4 lg:gap-2 focus:outline-none w-[80%] lg:w-fit mt-8 lg:mt-8"
          href={cvPdf}
          download="Yahya Momtaz CV.pdf"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <img src={downloadButton} 
            className="h-12 lg:h-5" 
            alt="Download Arrow" 
          />
          <p className="">Download CV</p>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Header;
