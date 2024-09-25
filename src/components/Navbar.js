import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/yLogo.png"

function Navbar() {

    return (
        <>
            <div className="bg-slate-900 w-full max-w-full overflow-hidden flex justify-center items-center mx-auto py-6 px-12 mt-2 hidden lg:flex">
                <img src={logoImage} alt="logo" className="w-12 object-contain" />
                <nav className="w-full pl-12">
                    <a 
                        href="#about"
                        className="text-white font-semibold py-2 px-4">
                            About
                        </a>
                        <a 
                            href="#projects"
                            className="text-white font-semibold py-2 px-4">
                                Projects
                        </a>
                        <a 
                            href="#skills"
                            className="text-white font-semibold py-2 px-4">
                                Skills
                        </a>
                </nav>
                <nav className="flex justify-center items-center">
                    <a
                        href="mailto:yahyamomtaz@gmail.com"
                        className="py-2 px-4 bg-[#95BA93] rounded-xl">
                        <p className="text-black font-semibold">Contact</p>
                    </a>
                </nav>
            </div>

             {/* Mobile Nav */}
            <motion.div 
                className="lg:hidden flex justify-between items-center px-12 w-full mt-12 pt-12"
            >
                <p className="text-4xl font-semibold text-white tracking-wider uppercase">Welcome !</p>
                <img src={logoImage} alt="Yaya Momt" className="w-24 object-contain" />
                
            </motion.div>
        </>
    )
}

export default Navbar;