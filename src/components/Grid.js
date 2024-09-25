import React from "react";

export function GridBackground() {
  return (
    <div className="absolute inset-0 w-full bg-slate-700 bg-grid-black/[10] z-0 h-[90%]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="
          absolute inset-0 pointer-events-none flex items-center justify-center 
          bg-slate-900
          [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black_70%)]
          ">
      </div>
    </div>
  );
}

export default GridBackground;
