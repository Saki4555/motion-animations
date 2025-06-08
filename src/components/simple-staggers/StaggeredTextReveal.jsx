import { scale } from "motion";
import * as motion from "motion/react-client";

const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1},
};

const StaggeredTextReveal = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Staggered Text Reveal
      </h2>
     <motion.h3 initial='initial' animate="animate" variants={parentVariants}>
         {"Hello World".split("").map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="text-5xl font-bold  text-white"
        >
          {char}
        </motion.span>
      ))}
     </motion.h3>
    </div>
  );
};

export default StaggeredTextReveal;
