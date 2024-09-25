import React, {useRef} from "react";
import { animate, motion, useInView } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../utility/animation";
import gitLogo from "../assets/github.png";
import kaggleLogo from "../assets/kaggle.png";
import linkedinLogo from "../assets/linkedin.png";
import profileIcon from "../assets/head.svg";

export function Profiles() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return ( 
        <div className="flex flex-col lg:flex-row gap-8 items-center mx-auto p-8 justify-between w-full h-full px-12 lg:px-0 lg:w-[80%] h-40 my-16 lg:my-0 pt-12 mt-16 sm:mt-16 lg:mt-8">
            <div className="flex items-center justify-center">
                <motion.img src={profileIcon} alt="profile" 
                    className="w-20 lg:w-10 object-contain"
                    variants={SlideRight(0.4)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                />
                <motion.h3 
                    className="text-7xl lg:text-4xl font-normal text-white mb-4 lg:mb-2 tracking-wider ml-8 my-auto"
                    variants={SlideLeft(0.4)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                >
                    Explore My 
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#95BA93] relative inline-block ml-2">
                        <span className="relative text-slate-900 italic">Profiles</span>
                    </span>
                </motion.h3>
            </div>
            <section className="flex mt-8 lg:mt-0">
                <motion.a
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-white to-white text-white font-semibold mx-4"
                    href="https://github.com/yahyamomtaz"
                    target="_blank" 
                    variants={SlideUp(0.6)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                    whileHover={{
                        translateY: 12,
                        borderRadius: "50%", 
                    }}
                >
                    <img src={gitLogo} alt="GitHub" className="w-1/3 lg:w-12 object-contain" />
                    <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                    GitHub
                    </span>
                </motion.a>
                <motion.a
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-white to-white text-white font-semibold mx-4"
                    href="https://www.kaggle.com/yahyamomtaz"
                    target="_blank" 
                    variants={SlideUp(0.6)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                    whileHover={{
                        translateY: 12,
                        borderRadius: "50%", 
                    }}
                >
                    <img src={kaggleLogo} alt="Kaggle" className="w-1/3 lg:w-12 object-contain" />
                    <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                    Kaggle
                    </span>
                </motion.a>
                <motion.a
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-white to-white text-white font-semibold mx-4"
                    href="https://www.linkedin.com/in/yahya-momtaz-601b34108/"
                    target="_blank" 
                    variants={SlideUp(0.6)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                    whileHover={{
                        translateY: 12,
                        borderRadius: "50%", 
                    }}
                >
                    <img src={linkedinLogo} alt="Linkedin" className="w-1/3 lg:w-12 object-contain" />
                    <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                    Linkedin
                    </span>
                </motion.a>
            </section>

        </div>
    )
}

export default Profiles;