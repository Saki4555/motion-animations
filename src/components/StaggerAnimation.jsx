// import * as motion from "motion/react-client";
"use client";
import { motion } from "motion/react";


const parentVariants = {
 
  visible: {
    
    transition: {
      
      staggerChildren: 0.5, 
    },
  },
};

const childVariants = {
  hidden: { opacity: 0,  },
  visible: { opacity: 1,},
};
const StaggerAnimation = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Stagger Animation
      </h2>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 "
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            variants={childVariants}
            
            key={index}
            className="bg-slate-400 w-20 h-20"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default StaggerAnimation;
