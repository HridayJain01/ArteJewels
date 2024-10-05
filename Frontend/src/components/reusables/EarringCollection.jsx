import React from 'react';

export default function EarringCollection({ title, imageUrl }) {
  return (
/*<div className="max-w-xs md:max-w-sm lg:max-w-md h-96 md:h-[28rem] lg:h-[32rem] relative bg-[#2a264e] rounded-tl-[25%] rounded-tr-[25%] rounded-bl-[10%] rounded-br-[10%] flex flex-col items-center justify-center text-white p-2 md:p-3 lg:p-4 shadow-custom-dark">*/
<div className='flex flex-col items-center p-6 rounded-lg bg-[#2a264e] rounded-tl-[25%] rounded-tr-[25%] rounded-bl-[10%] rounded-br-[10%] text-white w-90 h-90 cursor-pointer shadow-custom-dark'>



    
      <img
        className="w-1/3 md:w-1/2 lg:w-2/3 h-auto mt-2 md:mt-3 lg:mt-4" 
        src={imageUrl}
        alt={title}
      />
      <h2 className="text-base md:text-lg lg:text-3xl pt-4 pb-4 font-semibold font-sans text-center mt-2 md:mt-3 lg:mt-4">
        {title}
      </h2>
    </div>
  );
}