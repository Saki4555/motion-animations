'use client';
import {motion} from 'motion/react';
import { useState } from 'react';

const RotateOnDrag = () => {
    const [rotation, setRotation] = useState(0);
    const handleDrag = (_, info) => {
        console.log(info.offset.x);
        const newRotation = rotation + info.offset.x ;
        setRotation(newRotation)
    }
  return (
    <div>
         <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Rotate on Drag
      </h2>

        <motion.div drag onDrag={handleDrag} style={{ rotate: rotation}} className="w-20 h-20 bg-slate-400" />
    </div>
  )
}

export default RotateOnDrag