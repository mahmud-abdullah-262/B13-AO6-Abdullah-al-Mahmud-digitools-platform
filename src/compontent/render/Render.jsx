import React from 'react';
import Card from './Card';

const Render = () => {
  return (
    <div className='flex flex-col gap-6 items-center'>
    <div className='flex flex-col gap-4 my-10'>
      <h1 className='text-5xl font-bold mb-4 text-center'>Premium Digital Tools</h1>
      <p className='text-center text-gray-600'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
    </div>


    <div className='flex gap-2 p-1 shadow-sm bg-gray-100 rounded-full w-fit'>
    <button className="btn btn-primary rounded-full">Products</button>
          <button className="btn rounded-full">Cart (2)</button>
    </div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
      <Card/>
    </div>

    </div>
  );
};

export default Render;