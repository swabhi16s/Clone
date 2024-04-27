import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const controls = [useAnimation(), useAnimation()];

    const handleHover = () => {
        controls[0].start({ y: 0 });
    };

    return (
        <div className='w-full px-20 py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-["Founders_Grotesk"]'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <motion.div onMouseEnter={handleHover} className='cardcontainer relative w-1/2 h-[70vh] rounded-xl'>
                        <h1 className='absolute text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] -mb-10 leading-none tracking-tighter font-["Founders_Grotesk"] text-8xl'>FYDE</h1>
                        {"FYDE".split('').map((items, index) => (
                            <motion.span key={index} initial={{ y: "100%" }} animate={controls[0]} className="inline-block">{items}</motion.span>
                        ))}
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='' />
                        </div>
                    </motion.div>
                     <motion.div onMouseEnter={handleHover} className='cardcontainer relative w-1/2 h-[70vh] rounded-xl'>
                        <h1 className='absolute text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] -mb-10 leading-none tracking-tighter font-["Founders_Grotesk"] text-8xl'></h1>
                        {"FYDE".split('').map((items, index) => (
                            <motion.span key={index} initial={{ y: "100%" }} animate={controls[1]} className="inline-block">{items}</motion.span>
                        ))}
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt='' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;



