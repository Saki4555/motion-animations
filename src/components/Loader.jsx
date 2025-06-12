import * as motion from 'motion/react-client';

const Loader = () => {
  return (
    <div>
        <motion.div animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity, ease: 'linear'}}} className='relative border-slate-400 border-t-4 border-4  w-16 h-16 rounded-full'>
            <motion.div className='absolute inset-0 border-4 border-slate-500 border-t-transparent rounded-full' />

            
        </motion.div>
    </div>
  )
}

export default Loader