import React from "react";
import arrowIcon from "../assets/arrow3.svg";

export function LinkButton({ href, alt}) {
    return (
        <a className="text-black bg-white rounded-full px-4 py-2 flex flex-row absolute bottom-[10%] cursor-pointer" href={href} target="_blank" >
            <img src={arrowIcon} alt={alt} className="w-6" />
            <span className="ml-2">Take a look</span>
        </a>
    )
}

export default LinkButton;