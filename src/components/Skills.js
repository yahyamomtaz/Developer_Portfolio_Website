"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";
import pythonLogo from "../assets/python.png";
import swiftLogo from "../assets/swift.png";
import rLogo from "../assets/r.png";
import jsLogo from "../assets/js2.png";
import reactLogo from "../assets/react.png";
import dockerLogo from "../assets/docker.png";
import awsLogo from "../assets/aws.png";
import aiLogo from "../assets/ai.png";

export function Skills() {

    const [skills, setSkills] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        fetch("/data/skillsData.json")
            .then (response => response.json())
            .then(data => setSkills(data))
    }, [])

    return (
      <div 
          id="skills"
          className="relative bg-slate-900 flex flex-col items-center justify-center px-8 lg:px-0 mx-auto mt-16 sm:mt-16 lg:mt-8 w-full pt-12">
          <motion.div 
            className="relative bg-slate-900 flex flex-col items-center justify-center w-full"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-6xl lg:text-2xl font-bold text-white mb-4 lg:mb-2"
                initial={{ scale:2, opacity: 0 }}
                animate={isInView ? { scale:1, opacity: 1 } : {}}
                transition={{ duration: 1 }}       
              >
                  My Skills
              </motion.p>
              <motion.p 
                className="text-3xl lg:text-xs font-normal bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 mt-2 lg:mt-0"
                initial={{ scale:2, opacity: 0 }}
                animate={isInView ? { scale:1, opacity: 1 } : {}}
                transition={{ duration: 1 }}>
                  My skills and expertise in a look
              </motion.p>
              <motion.div 
                className="grid grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-4 w-full max-w-[80%] mt-8"
                initial={{ scale:0.8, opacity: 0 }}
                animate={isInView ? { scale:1, opacity: 1 } : {}}
                transition={{ duration: 1 }} 
                >

                <div className="flex items-center bg-white w-full aspect-square rounded-full hover:scale-90 duration-300">
                  <img src={pythonLogo} alt="Python" className="h-16 w-16 mx-auto" />
                </div>
                <div className="flex items-center bg-[#FF5034] aspect-square  w-full rounded-full hover:scale-90 duration-300">
                  <img src={swiftLogo} alt="Swift" className="h-16 w-16 mx-auto" />
                </div>
                <div className="flex items-center bg-white aspect-square w-full rounded-full hover:scale-90 duration-300">
                  <img src={rLogo} alt="R" className="h-16 w-16 mx-auto" />
                </div>
                <div className="flex items-center bg-[#FFDF00] aspect-square  w-full rounded-full hover:scale-90 duration-300">
                  <img src={jsLogo} alt="Java Script" className="h-16 w-16 mx-auto" />
                </div>
                <div className="flex items-center bg-white aspect-square w-full rounded-full hover:scale-90 duration-300">
                  <img src={reactLogo} alt="React" className="h-16 w-16 mx-auto object-contain" />
                </div>
                <div className="flex items-center bg-[#1D63ED] aspect-square w-full rounded-full hover:scale-90 duration-300">
                  <img src={dockerLogo} alt="Docker" className="h-16 w-16 mx-auto object-contain" />
                </div>
                <div className="flex items-center bg-white aspect-square w-full rounded-full hover:scale-90 duration-300">
                  <img src={awsLogo} alt="AWS" className="h-16 w-16 mx-auto object-contain" />
                </div>
                <div className="flex items-center bg-slate-400 aspect-square w-full rounded-full hover:scale-90 duration-300">
                  <img src={aiLogo} alt="AI" className="h-16 w-16 mx-auto object-contain" />
                </div>
              </motion.div>
              <div className="flex flex-col lg:flex-row mt-12 lg:mt-4 gap-4 w-[80%] mx-auto justify-between">
                {skills.map((skillSet, index) => (
                    <SkillCard
                        key={index}
                        title={skillSet.title}
                        skills={skillSet.skills}
                        icon={skillSet.icon}
                    />
                ))}
                </div>
          </motion.div>
        </div>
    )
}

export default Skills;