import { once } from "events";
import * as motion from "motion/react-client";

const MovingRotation = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-8 text-transparent bg-clip-text inline-block">
       Moving Rotation
      </h2>
      <motion.div
        whileInView={{ x: 200, rotate: 360, scale: 1.5 }}
        viewport={{ once: true}}
        drag
        transition={{ duration: 2,  ease: 'linear'}}
        className="w-20 h-20 bg-slate-400"
      />
    </div>
  );
};

export default MovingRotation;
