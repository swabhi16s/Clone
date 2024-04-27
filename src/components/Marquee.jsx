import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl h-[40vh] bg-[#004d4E]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
        <motion.h1 
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }} 
          transition={{ erase: "linear", repeat: Infinity, duration: 10 }} 
          className='text-[10vw] leading-none font-["Founders_Grotesk"] font-medium uppercase pt-10 mb-[6vw]'
          style={{ marginRight: '28px' }} 
        >
          we are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: '0%' }} 
          animate={{ x: '-100%' }} 
          transition={{ erase: "linear", repeat: Infinity, duration: 10}} 
          className='text-[10vw] leading-none font-["Founders_Grotesk"] font-medium uppercase pt-10 mb-[6vw] '
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
