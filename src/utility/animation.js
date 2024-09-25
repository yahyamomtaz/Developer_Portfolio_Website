export const SlideUp = (delay) => {
  return {
    hidden: { 
        y: 30, 
        opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
    transition: { 
        type: "spring", 
        stiffness: 100,
    },
  }
};


export const SlideLeft = (delay) => {
  return {
    hidden: { 
        x: 100, 
        opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
    transition: { 
        type: "spring", 
        stiffness: 100,
    },
  }
};

export const SlideRight = (delay) => {
  return {
    hidden: { 
        x: -100, 
        opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
    transition: { 
        type: "spring", 
        stiffness: 100,
    },
  }
};