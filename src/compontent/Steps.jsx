import React from 'react';
import profile from '/user.png';
import packageImg from '/package.png';
import rocket from '/rocket.png';
const Steps = () => {
  return (
    <div className='flex flex-col w-11/12 mx-auto text-center my-24'>
      <h1 className='text-3xl md:text-5xl font-bold mb-4'>Get Started in 3 Steps</h1>
      <p>Start using premium digital tools in minutes, not hours.</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 mx-auto mt-10'>

        <div className='space-x-4 shadow rounded-2xl bg-gray-100 flex flex-col items-center p-10 relative'>
          <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-1 h-6 w-6 text-white flex justify-center items-center absolute top-4 right-4'><p className='font-light text-sm'>01</p></div>
          <div className='bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full p-4'>
            <img src={profile} alt="" />
          </div>
          <h1 className='text-2xl font-bold'>Create Account</h1>
          <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        <div className='space-x-4 shadow rounded-2xl bg-gray-100 flex flex-col items-center p-10 relative'>
          <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-1 h-6 w-6 text-white flex justify-center items-center absolute top-4 right-4'><p className='font-light text-sm'>02</p></div>
          <div className='bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full p-4'>
            <img src={packageImg} alt="" />
          </div>
          <h1 className='text-2xl font-bold'>Choose Products</h1>
          <p className='text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
        </div>

         <div className='space-x-4 shadow rounded-2xl bg-gray-100 flex flex-col items-center p-10 relative'>
          <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-1 h-6 w-6 text-white flex justify-center items-center absolute top-4 right-4'><p className='font-light text-sm'>03</p></div>
          <div className='bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full p-4'>
            <img src={rocket} alt="" />
          </div>
          <h1 className='text-2xl font-bold'>Start Creating</h1>
          <p className='text-center'>Download and start using your premium tools immediately.</p>
        </div>

      </div>


    </div>
  );
};

export default Steps;