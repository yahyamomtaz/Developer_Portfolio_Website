"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { WobbleCard } from "./ui/wobble-card";
import LinkButton from "./LinkButton";

export function Projects() {

    const [projects, setProjects] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        fetch("/data/projectsData.json")
            .then(response => response.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div 
            id="projects"
            className="relative bg-slate-900 flex flex-col items-center justify-center px-8 lg:px-0 mx-auto mt-16 sm:mt-16 lg:mt-8 w-full lg:w-[80%] pt-12 lg:pt-12">
            <motion.p 
            className="text-6xl lg:text-2xl font-bold text-white mb-4 lg:mb-2"
            ref={ref}
            initial={{ scale:2, opacity: 0 }}
            animate={isInView ? { scale:1, opacity: 1 } : {}}
            transition={{ duration: 1 }}      
            >
                Projects
            </motion.p>
            <p className="text-3xl lg:text-xs font-normal bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 mt-2 lg:mt-0">
                Some of my recent projects
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full mt-12 lg:mt-6">
                {projects[0] && (
                        <WobbleCard
                            containerClassName="col-span-1 lg:col-span-2 h-96 lg:h-full bg-gray-800 min-h-[50px] lg:min-h-[300px]"
                            className=""
                            >
                            <div className="">
                                <h2 className="text-left text-balance text-3xl lg:text-3xl font-semibold tracking-wide text-white absolute inset-x-10 inset-y-10">
                                    {projects[0].title}
                                </h2>
                                <p className="mt-2 pr-16 lg:pr-0 text-left text-2xl lg:text-sm text-neutral-200 w-1/2 lg:w-[40%] 2xl:w-1/3 tracking-wide leading-10">
                                    {projects[0].details}
                                </p>
                                <LinkButton href={projects[0].link} alt="AI Image" />
                            </div>
                            <img
                                src={projects[0].image}
                                alt={projects[0].title}
                                className="absolute -right-40 lg:-right-[15%] 2xl:-right-[5%] bottom-[2%] lg:-bottom-[2%] 2xl:-bottom-[25%] filter object-contain rounded-2xl w-2/3"
                            />
                        </WobbleCard>
                    )}
                    {projects[1] && (
                        <WobbleCard
                            containerClassName="col-span-1 min-h-[100px] bg-[#3A3B55] h-96 lg:h-full lg:min-h-[300px]"
                            className=""
                            >
                            <div className="">
                                <h2 className="text-left text-balance text-3xl lg:text-3xl font-semibold tracking-wide text-white absolute inset-x-10 inset-y-10">
                                {projects[1].title}
                                </h2>
                                <p className="mt-2 pr-16 lg:pr-0 text-left text-2xl lg:text-sm text-neutral-200 w-1/2 lg:w-[50%] tracking-wide leading-10">
                                {projects[1].details}
                                </p>
                                <LinkButton href={projects[1].link} alt="Scape Inout" />
                            </div>
                            <img
                                src={projects[1].image}
                                alt={projects[1].title}
                                className="absolute -right-4 lg:-right-[5%] lg:top-[12%] lg:w-40 filter -bottom-56 scale-50 lg:scale-100 object-contain rounded-2xl"
                            />
                        </WobbleCard>
                    )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto w-full mt-6">
                    {projects[2] && (
                        <WobbleCard
                            containerClassName="col-span-2 min-h-[100px] bg-sky-900 h-96 lg:h-full lg:min-h-[300px]"
                            className=""
                            >
                            <div className="">
                                <h2 className="text-left text-balance text-3xl lg:text-3xl font-semibold tracking-wide text-white absolute inset-x-10 inset-y-10">
                                {projects[2].title}
                                </h2>
                                <p className="mt-2 pr-16 lg:pr-0 text-left text-2xl lg:text-sm text-neutral-200 w-[40%] lg:w-[30%] tracking-wide leading-10">
                                {projects[2].details}
                                </p>
                                <LinkButton href={projects[2].link} alt="AI Prompt Analyzer" />
                            </div>
                            <img
                                src={projects[2].image}
                                alt={projects[2].title}
                                className="absolute  -bottom-[60%] -right-60 lg:-right-[40%] filter lg:-bottom-[50%] 2xl:-bottom-[90%] object-contain rounded-2xl"
                            />
                        </WobbleCard>
                    )}
                    {projects[3] && (
                        <WobbleCard
                            containerClassName="col-span-2 lg:col-span-2 h-80 bg-stone-800 lg:min-h-[300px] h-fit lg:h-full"
                            className=""
                            >
                            <div className="">
                                <h2 className="text-left text-balance text-3xl lg:text-3xl font-semibold tracking-wide text-white absolute inset-x-10 inset-y-10">
                                {projects[3].title}
                                </h2>
                                <p className="mt-2 pr-16 lg:pr-0 text-left text-2xl lg:text-sm text-neutral-200 w-[60%] lg:w-[48%] 2xl:w-[40%] tracking-wide leading-10">
                                {projects[3].details}
                                </p>
                                <LinkButton href={projects[3].link} alt="Magic Website" />
                            </div>
                            <img
                                src={projects[3].image}
                                alt={projects[3].title}
                                className="absolute -right-40 lg:-right-[35%] 2xl:-right-[15%]  filter bottom-[10%] lg:-bottom-[2%] 2xl:-bottom-[3%] object-contain rounded-2xl"
                            />
                        </WobbleCard>
                    )}
            </div>
        </div>
    );
}

export default Projects;
