import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutMe() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div 
            id="about"
            className="relative bg-slate-900 flex flex-col items-center justify-center px-8 lg:px-0 mx-auto mt-4 lg:mt-0 w-full lg:w-[90%] pt-0 lg:pt-8">
            <motion.div 
                className="relative bg-slate-900 flex flex-col items-center justify-center"
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                >
                <p
                    className="text-6xl lg:text-2xl font-bold text-white">
                    About Me
                </p>
                <p className="text-3xl lg:text-xs font-normal bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 mt-2 lg:mt-0">
                    Get to know me
                </p>
                <p className="text-4xl lg:text-sm font-light text-gray-200 py-2 w-[85%] text-center leading-relaxed tracking-wider">
                    Hi there! I'm Yahya Momtaz, I started my academic journey with a passion for building software, reflected in my bachelor's degree in Software Engineering.
                    However, I became interested in the interesting field of data science during my Master's program because of my curiosity about data and how it could bring out fresh perspectives.
                    My perspective on technology has been formed by my twin concentration on data science and software engineering. I think it's possible to address complicated issues by combining machine learning techniques, deep learning models, and strong programming abilities.
                    I'm now using my combined skill set as a Full Stack Developer to create software that evaluates and improves the usability of images from ancient books and manuscripts. This project makes use of machine learning, artificial intelligence and web development.
                </p>
            </motion.div>
        </div>
    )
}

export default AboutMe;