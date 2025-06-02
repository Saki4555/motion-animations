"use client";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const UsinguseMotionValueHook = () => {
  //   const x = useMotionValue(0);
  //   useMotionValueEvent(x, 'animationStart', () => {
  //     console.log('animation stared on x')
  //   })
  //   useMotionValueEvent(x, 'change', (latest) => {
  //     console.log('animation stared on x', latest)
  //   })

  const scale = useMotionValue(1);
 

  const handleChange = (e) => {
 
    scale.set(parseFloat(e.target.value));
  }
  return (
    <div>
      {/* <motion.div
      style={{ x: x }}
      drag
      dragConstraints={{top: 50 , left:50, right: 50, bottom: 50}}
      className="bg-slate-400 w-20 h-20 rounded-full"
    /> */}
        <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        useMotionValue Hook
      </h2>
      <motion.div style={{ scaleX: scale }} className="bg-slate-400 mb-2  w-20 h-20" />
      <input
        type="range"
        min={0.5}
        max={1.5}
        defaultValue={1}
        step={0.01}
        className="accent-slate-400 "
        onChange={ handleChange}
      />
    </div>
  );
};

export default UsinguseMotionValueHook;
