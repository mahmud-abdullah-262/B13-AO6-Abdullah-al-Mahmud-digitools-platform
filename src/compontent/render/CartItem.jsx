import React from 'react';

const CartItem = ({cartItems}) => {
  console.log(cartItems)
  return (
    cartItems.map(item => {
      return(
        <div key={item.name} className='flex justify-between items-center p-6 bg-gray-100 rounded-2xl mb-6'>
      <div className='flex items-center gap-4'>
            <div className='rounded-full bg-white shadow-lg p-4 '>
              <img src={item.icon} alt={item.name} />
          </div>
          <div>
              <h1 className='text-2xl font-bold'>{item.name}</h1>
              <p>$<span>{item.price}</span></p>
          </div>
      </div>
      <button className='btn btn-error'>Remove</button>
      
    </div>
      )
    })
    
  );
};

export default CartItem;