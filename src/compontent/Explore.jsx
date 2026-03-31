import React from 'react';

const Explore = () => {
  return (
    <div className='flex flex-col gap-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-16 text-center text-white'>

      <h1 className='text-2xl md:text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
      <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

      <div className='flex gap-2 mx-auto'>
        <button className='btn bg-white rounded-full text-primary'>View Pricing</button>
        <button className='btn btn-outline rounded-full'>View Pricing</button>
      </div>

      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Explore;