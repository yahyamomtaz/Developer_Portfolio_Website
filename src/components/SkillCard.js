import { animate, motion, useInView } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { SlideUp } from "../utility/animation";

export function SkillCard({title, skills}) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    (<div className="my-4 w-full lg:w-fit h-fit items-center justify-center text-center lg:text-left mx-auto lg:mx-0 border-b lg:border-none pb-8 lg:pb-0">
        <motion.h3 
          className="font-semibold text-5xl lg:text-sm text-[#95BA92]"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          exit={{ delay: 0.3, duration: 1.2 }}
        >
          {title}
        </motion.h3>
        <p className="text-4xl lg:text-sm my-2 lg:my-2 flex flex-col font-light tracking-wider">
          {skills.map((skill, index) => (
                          <motion.p 
                            key={index} 
                            className="inline-block text-gray-200 py-2 mt-4 lg:mt-2"
                            variants={SlideUp(0.4)}
                            ref={ref}
                            initial="hidden"
                            animate={isInView ? "visible" : {}}
                          >
                              {skill}
                          </motion.p>
                      ))}
        </p>
    </div>)
  );
}


export default SkillCard;