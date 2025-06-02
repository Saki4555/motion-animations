'use client';
import {motion, useScroll, useMotionValueEvent, useTransform} from 'motion/react';
import { useRef } from 'react';

const UsinguseScrollHook = () => {
    const ref = useRef(null)
    const {scrollY} = useScroll({target: ref});
    useMotionValueEvent(scrollY, 'change', (latest) => {
        console.log(latest);
    })

    const scale = useTransform(scrollY, [520, 800], [1, 0.7])
    const borderRadius = useTransform(scrollY, [520, 800], ['0%', '100%']);
   
  return (
    <motion.div ref={ref} >
       <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        useScroll Hook
      </h2>
        <motion.div style={{scale, borderRadius}} className='w-40 h-40 bg-slate-400'/>
    </motion.div>
  )
}

export default UsinguseScrollHook

