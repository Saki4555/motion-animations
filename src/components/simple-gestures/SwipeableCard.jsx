"use client";
import { motion } from "motion/react";
import { useState } from "react";

const SwipeableCard = () => {
  const [isRemoved, setIsRemoved] = useState(false);
  const handleSwipe = (_, info) => {
    console.log({ info });
    if (info.offset.x > 100) setIsRemoved(true);
    else if (info.offset.x < -100) setIsRemoved(true);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Swipe
      </h2>
     
        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          onDragEnd={handleSwipe}
         
          className={`w-44 h-20  bg-slate-400 flex items-center justify-center ${
            isRemoved && "hidden"
          }`}
        >
          Swipe and Remove
        </motion.div>
      
    </div>
  );
};

export default SwipeableCard;
