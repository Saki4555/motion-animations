import * as motion from "motion/react-client";

const WaveEffect = () => {
  const boxes = Array.from({ length: 5 });
  return (
    <div>
         <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Wave Effect
      </h2>
      <div className="flex gap-0.5">
        {boxes.map((_, index) => (
        <motion.div animate={{y: [0, -20, 0]}} transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: index * 0.1}} key={index} className="w-14 h-14 bg-slate-400 rounded-md" />
      ))}
      </div>
    </div>
  );
};

export default WaveEffect;
