import React, {useRef} from "react";
import { motion, useInView } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../utility/animation";
import gmailIcon from "../assets/gmail.png";
import writeIcon from "../assets/pencil.svg";

function ContactMe() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col lg:flex-row gap-8 items-center mx-auto p-8 justify-between w-full h-full px-12 lg:px-0 lg:w-[80%] h-40 my-16 lg:my-0">
            <div className="flex items-start justify-center">
                <motion.img src={writeIcon} alt="profile" 
                    className="w-32 lg:w-12 object-contain"
                    variants={SlideRight(0.4)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                />
                <motion.h3 
                    className="text-7xl lg:text-4xl font-normal text-white mb-4 lg:mb-2 tracking-wider ml-8 my-auto"
                    variants={SlideLeft(0.5)}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                >
                    Contact me by
                </motion.h3>
            </div>
            <motion.a  
                href="mailto:yahyamomtaz@gmail.com"
                className="bg-black flex text-3xl lg:text-base font-semibold py-4 lg:py-2 px-8 items-center border border-gray-500 rounded-full justify-center gap-8 lg:gap-4 focus:outline-none w-[80%] lg:w-fit mt-4 lg:mt-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 300 }}
                variants={SlideUp(0.6)}
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : {}}
                >
                <img src={gmailIcon} alt="gmail" className="w-10 lg:w-4 object-contain" />
                <p className="text-gray-200">yahyamomtaz@gmail.com</p>
            </motion.a>
        </div>
    )
}

export default ContactMe;