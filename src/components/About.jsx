import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed =".2"className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black' >
        <h1 className="font-['Founders_Grotesk] text-[3vw] leading-[3.3vw] tracking-tighter">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div data-scroll data-scroll-speed =".2"className=' w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#aac156] rounded-tl-3xl rounded-tr-3xl text-black' >
            <div className='w-1/2'>
                <h1 className="text-[3vw]">Our Approach :</h1>
                <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white'>Read more
                <div className='w-2 h-2 bg-zinc-100 rounded-full text-white'></div>
                
                </button>
            </div>
            <div className='w-1/2 h-[40vh] rounded-3xl bg-[#b0c859]'></div>
        </div>
    </div>
   
  )
}

export default About