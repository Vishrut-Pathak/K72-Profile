import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className='font-[font2] text-white pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[9.5vw]  justify-center flex items-center'>The spark for</div>
      <div className='text-[9.5vw] uppercase leading-[9.5vw] justify-center flex items-center'>all <div className='h-[8vw] rounded-full overflow-hidden'><Video></Video></div> things</div>
      <div className='text-[9.5vw] uppercase leading-[9.5vw]  justify-center flex items-center'>creative</div>
    </div>
  );
};

export default HomeHeroText;
