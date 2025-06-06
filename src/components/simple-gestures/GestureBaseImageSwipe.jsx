"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
const GestureBaseImageSwipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log({currentIndex});
  const images = [
    "https://img.freepik.com/free-vector/gradient-speed-motion-background_52683-63725.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-761.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/digital-screen-with-environment-day_23-2148884835.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
  ];
 
  const handleSwipe = (_, info) => {
    if(info.offset.y > 100) setCurrentIndex(prev => (prev -1 + images.length) % images.length)
    else if(info.offset.y < -100) setCurrentIndex(prev => (prev + 1) % images.length)
  }
  return (
    <div>
         <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent inline-block bg-clip-text ">
        Gesture Based Image Slide
      </h2>
      
        {/* this div is important */}
        <div className="relative overflow-hidden size-48"> 
<AnimatePresence>
          {" "}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleSwipe}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full cursor-pointer"
          />
        </AnimatePresence>
        </div>
        
     
    </div>
  );
};

export default GestureBaseImageSwipe;
