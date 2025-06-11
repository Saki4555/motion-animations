// 'use client';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'motion/react';

// const ScrollIndicator = () => {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     container: scrollRef, // ✔ use container, not target
//   });

//   const calculatedLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
//   const smoothLineWidth = useSpring(calculatedLineWidth)

//   return (
//     <div className="h-screen bg-slate-700 text-white flex flex-col">
//       {/* Scrollable container */}
//       <div
//         ref={scrollRef}
//         className="relative flex-1 overflow-y-scroll"
//       >
//         {/* Container-relative progress bar */}
//         <motion.div

//           style={{ width: smoothLineWidth }}
//         // style={{ scaleX: smoothLineWidth, originX: 0}}
//           className="sticky top-0 left-0 h-1.5 bg-yellow-400"
//         />

//         {/* Lots of content */}
//         <div className="p-4 space-y-2">
//           {[...Array(100)].map((_, i) => (
//             <p key={i}>Lorem ipsum dolor sit amet...</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollIndicator;

"use client";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const ScrollIndicator = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const calculatedLineWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const smoothLineWidth = useSpring(calculatedLineWidth);

  return (
    <div className="h-[70vh] bg-slate-700 w-full">
     
        <motion.div
        //   style={{ width: calculatedLineWidth, transition: 'width 0.3 ease' }}
          style={{ width: smoothLineWidth }}
        
          className="h-1.5 sticky top-0 left-0 bg-yellow-400"
        />
         <div ref={scrollRef} className="relative  h-full overflow-x-hidden overflow-y-scroll">
          <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Scroll Indicator
      </h2>
        <div className="p-4 space-y-4 text-white">
          {[...Array(100)].map((_, i) => (
            <motion.p initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.3}} key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.....
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
