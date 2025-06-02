'use client';
import {motion, useTransform, useMotionValue} from 'motion/react';
import { div } from 'motion/react-client';

const UsinguseTransformHook = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
 const backgroundColor = useTransform(x, [-20, 10, 20], ['red', 'green', 'red']);


  return (
    <div>
      <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        useTransform Hook
      </h2>
      <motion.div style={{x, y, backgroundColor}} drag dragConstraints={ {top: -20, left: 0, right: 200, bottom: 20 }} className='bg-slate-300 w-20 h-20' />
    </div>
    
  )
}

export default UsinguseTransformHook