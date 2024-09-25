import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Profiles from "./components/Profiles";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="mx-auto bg-slate-900 overflow-x-hidden overflow-y-hidden w-full">
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Certificates />
            <Profiles />
            <ContactMe />
            <Footer />
        </div>  
    )
}
