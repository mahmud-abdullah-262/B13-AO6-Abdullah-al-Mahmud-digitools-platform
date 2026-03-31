import React from 'react';
import { toast } from 'react-toastify';
const Card = ({product, cartItems, setCartItems, totalPrice, setTotalPrice}) => {

  const exist = cartItems.find(p => p.name === product.name);
  return (
  <div className="card bg-base-100 shadow-lg">
  <div className="card-body relative">
    <span className={`badge badge-xs absolute top-4 right-4 text-sm p-2 
      ${product.tagType === 'Popular' ? 'badge-error' : 
        product.tagType === 'Trending' ? 'badge-warning' : 
        product.tagType === 'Recommended' ? 'badge-accent' : ''
       } 
      `}>{product.tagType}</span>

    <div className="flex flex-col justify-between">
      <div className='rounded-full bg-white shadow-lg p-4 w-fit mb-6'>
        <img src={product.icon} alt={product.icon} />
      </div>
      
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className='text-gray-600'>{product.description}</p>
      <div className='flex items-end'>
         <span className="text-xl font-bold mt-2">${product.price}</span>
      <span className='text-gray-700'>/{product.period}</span>
      </div>
     
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs mb-4">
      {product.features.map(feature => {
        return(
           <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        )
      })}
     
     
     
    </ul>
    <div className="mt-auto">
      <button onClick={() => {
       
        if(exist){
          toast.warn('Product already added!');
          return
        }else{
          setCartItems([...cartItems, product]) 
          toast.success(`${product.name} successfully added!`)
          setTotalPrice(totalPrice + product.price)
        }


       
      } } className={`btn btn-block rounded-full font-bold shadow-sm ${exist ? 'bg-base-200' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`}>
        {exist ? 'Added to cart' : 'Buy Now'}
      </button>
    </div>
  </div>
      </div>
  );
};

export default Card;