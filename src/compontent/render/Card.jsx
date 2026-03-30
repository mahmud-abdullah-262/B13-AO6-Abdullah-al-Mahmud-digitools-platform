import React from 'react';
import dummy from '/products/operation.png'
const Card = () => {
  return (
  <div className="card bg-base-100 shadow-lg">
  <div className="card-body relative">
    <span className="badge badge-xs badge-warning absolute top-4 right-4 text-sm p-2">Most Popular</span>

    <div className="flex flex-col justify-between">
      <div className='rounded-full bg-gray-100 p-4 w-fit mb-6'>
        <img src={dummy} alt="dummy" />
      </div>
      
      <h2 className="text-2xl font-bold">AI Writing Pro</h2>
      <p className='text-gray-600'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
      <div className='flex items-end'>
         <span className="text-xl font-bold mt-2">$0</span>
      <span className='text-gray-700'>/month</span>
      </div>
     
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
     
    </ul>
    <div className="mt-auto">
      <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
    </div>
  </div>
      </div>
  );
};

export default Card;