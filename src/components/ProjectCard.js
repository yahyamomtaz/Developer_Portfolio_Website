import React from "react";

export function ProjectCard({props}) {
    return (
        <div className="bg-transparent flex flex-col items-center border border-2 border-blue-400 rounded-xl p-4 h-96">
            <img src={props.image} className="w-full"></img>
            <h3 className="text-2xl font-semibold text-white">{props.title}</h3>
            <p className="text-gray-400 text-sm">
                {props.details}
            </p>
        </div>
    )
}

export default ProjectCard;