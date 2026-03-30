import React from 'react';

const Stats = () => {
  return (
    <div className="stats shadow rounded-none h-48 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
      <div className='w-8/12 mx-auto flex gap-10 text-white'>
  <div className="stat flex flex-col items-center justify-center">
    <div className="stat-value">50K+</div>
    <div className="stat-title text-gray-200 text-xl">Active Users</div>
    
  </div>

  <div className="stat flex flex-col items-center justify-center">
    <div className="stat-value">200+</div>
    <div className="stat-title text-gray-200 text-xl">Premium Tools</div>
  </div>

  <div className="stat flex flex-col items-center justify-center">
    <div className="stat-value">4.9</div>
    <div className="stat-title text-gray-200 text-xl">Rating</div>
  </div>

      </div>
 
</div>
  );
};

export default Stats;