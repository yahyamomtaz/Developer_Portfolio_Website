import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CertificateCard from "./CertificateCard";

export function Certificates() {

    const [certificates, setCertificates] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        fetch("/data/certificatesData.json")
            .then( response => response.json())
            .then(data => setCertificates(data))
    })
    return (
        <div className="relative bg-slate-900 flex flex-col items-center justify-center px-8 lg:px-0 mx-auto mt-16 sm:mt-16 lg:mt-8 w-full lg:w-[80%] pt-12 lg:pt-12">
            <motion.p 
                className="text-6xl lg:text-2xl font-bold text-white mb-4 lg:mb-2"
                ref={ref}
                initial={{ scale:2, opacity: 0 }}
                animate={isInView ? { scale:1, opacity: 1 } : {}}
                transition={{ duration: 1 }} 
            >
                Certificates
            </motion.p>
            <p className="text-xs font-normal bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 py-2">
                
            </p>
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 w-full px-12 lg:px-0"
            >
                {certificates.map((certificateSet, index) => (
                    <CertificateCard key={index} props={certificateSet} />
                ))}
            </motion.div>
        </div>
    )
}

export default Certificates;