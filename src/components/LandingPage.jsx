import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
 
  const index = 1;

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.8' className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        <div className='masker'>
          <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-medium'>We Create</h1>
        </div>
        <div className='masker'>
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}  className="w-fit flex items-end overflow-hidden">
            {index === 1 && <div className="mr-3 w-[7.5vw] rounded-md h-[5.5vw] -top[-1.2vw] relative top-[1vw] bg-green-500"></div>}
            <h1 className='flex items-center uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-medium'>Eye opening</h1>
          </motion.div>
        </div>
        <div className='masker'>
          <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-medium'>Presentation</h1>
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-25 justify-between items-center py-5 px-20">
          <div className="start flex items-center gap-5">
            <p className="text-md font-light tracking-tight leading-none">
              For public and private companies
              <span style={{ marginLeft: '250px' }}>From the first pitch to IPO</span>
            </p>
            <div className="px-4 py-2 border-[1px] rounded-full border-zinc-800" style={{ marginLeft: '300px' }}>START THE PROJECT</div>
            <div className="w-3 h-3 rounded-full">
              <FaArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;






