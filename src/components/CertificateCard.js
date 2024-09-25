import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { SlideUp } from "../utility/animation";

export function CertificateCard({props}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div 
            className="bg-white flex flex-col items-left rounded-xl p-10 lg:p-4 hover-none"
            variants={SlideUp(0.4)}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", stiffness: 300 }}
        >
            <img src={props.image} className="rounded-lg object-contain border border-gray-200"></img>
            <div className="flex flex-col h-full flex-grow">
                <h3 className="text-3xl lg:text-sm font-semibold text-gray-700 text-left mt-8 lg:mt-2">{props.title}</h3>
                <div className="flex items-center gap-2 my-4">
                    <img src={props.logo1} className="h-12 lg:h-4 object-contain"></img>
                    <p className="text-lg lg:text-xs text-gray-500 text-left">
                        {props.logoName}
                    </p>
                </div>
                <p className="text-gray-500 text-xl lg:text-xs mt-auto mb-2 lg:mb-0">
                    {props.details}
                </p>
            </div>
        </motion.div>
    )
}

export default CertificateCard;