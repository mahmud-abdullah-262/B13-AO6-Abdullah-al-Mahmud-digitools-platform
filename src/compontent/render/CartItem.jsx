import React from 'react';
import { toast } from 'react-toastify';

const CartItem = ({cartItems, setCartItems, totalPrice, setTotalPrice}) => {
  const handleRemove = (item) => {
    const filteredItems = cartItems.filter(i => i.name !== item.name);
    setCartItems(filteredItems)
    toast.error(`${item.name} is removed`)
    setTotalPrice(totalPrice - item.price)
    
  }


  console.log(cartItems)
  return (
    cartItems.map(item => {
      return(
        <div key={item.name} className='flex flex-col md:flex-row justify-between items-center p-6 bg-gray-100 rounded-2xl mb-6'>
      <div className='flex flex-col md:flex-row items-center gap-4'>
            <div className='rounded-full bg-white shadow-lg p-4 '>
              <img src={item.icon} alt={item.name} />
          </div>
          <div>
              <h1 className='text-2xl font-bold text-center md:text-left mb-2'>{item.name}</h1>
              <p className='text-center md:text-left mb-2'>$<span>{item.price}</span></p>
          </div>
      </div>
      <button
       onClick={() => handleRemove(item)} 
       className='btn btn-error'>Remove</button>
      
    </div>
      )
    })
    
  );
};

export default CartItem;