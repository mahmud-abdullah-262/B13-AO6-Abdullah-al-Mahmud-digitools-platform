import React from 'react';
import BannerImage from '/banner.png';
import play from '/Play.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className='flex-1'>
      <img
      src={BannerImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    
    <div className='space-y-4'>
      <div className='w-fit flex gap-4 items-center py-2 px-6 bg-gray-200 rounded-full '>
        <div className="h-2 w-2 rounded-full animate-ping bg-purple-500"></div>
        <p className='text-xl text-purple-500 font-medium'>New: AI-Powered Tools Available</p>
      </div>
      <h1 className="text-6xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6">
       Access premium AI tools, design assets, templates, and productivity <br /> 
software—all in one place. Start creating faster today.
<br />
Explore Products
      </p>
      <div className='flex items-center gap-2'>
         <button className="btn btn-primary rounded-full">Explore Products</button>
      <button className="btn btn-outline rounded-full text-primary"><img src={play} alt="" /> Watch Demo</button>
      </div>
     

    </div>
  </div>
</div>
  );
};

export default Banner;