import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (a) => {
      let mouseX = a.clientX;
      let mouseY = a.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    });

    return () => {
      window.removeEventListener("mousemove", (a) => {
        let mouseX = a.clientX;
        let mouseY = a.clientY;

        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle-180);
      });
    };
  }, []);

  return (
    <div className='eyes relative w-full h-screen overflow-hidden flex justify-center items-center'>
      <div data-scroll data-scroll-section data-scroll-speed='-.7' className='relative flex justify-center items-center w-[60%] h-[80%] bg-cover bg-center bg-[url("https://wallpaperaccess.com/full/2654072.jpg")]'>
        <div className='absolute flex justify-center items-center gap-10 w-1/2'>
          <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div className={`line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10`} style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div className={`line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10`} style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
