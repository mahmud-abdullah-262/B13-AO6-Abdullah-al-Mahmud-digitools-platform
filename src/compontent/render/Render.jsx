import React, { use, useState } from 'react';
import Card from './Card';
import CartItem from './CartItem';
import { toast } from 'react-toastify';





const Render = ({productPromise, cartItems, setCartItems}) => {
  const [toggle, setToggle] = useState('product');
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(cartItems)
  
  const productData = use(productPromise);

  const handleProceed = () => {
    return(
      setCartItems([]),
      setTotalPrice(0),
      toast('Your cart is empty now!')
    )
  }
  
  
  return (
    <div className='flex flex-col gap-6 items-center'>
    <div className='flex flex-col gap-4 my-10 w-11/12 mx-auto'>
      <h1 className='text-5xl font-bold mb-4 text-center'>Premium Digital Tools</h1>
      <p className='text-center text-gray-600'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
    </div>


    <div className='flex gap-2 p-1 shadow-sm bg-gray-100 rounded-full w-fit'>
    <button onClick={() => setToggle('product')} className={`btn rounded-full ${toggle === 'product' ? 'btn-primary' : ''}` }>Products</button>

    <button onClick={() => setToggle('cart')}  className={`btn rounded-full ${toggle === 'product' ? '' : 'btn-primary'}` }>Cart ({cartItems.length})</button>
    </div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
      {toggle === 'product' ? (
        productData.map(product => <Card key={product.name} product={product} cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />)
      ) : (
        <div className='flex flex-col p-10 rounded-2xl border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3'>
          <h1 className='text-3xl font-bold mb-10'>Your Cart</h1>

          {cartItems.length > 0 
          ? <CartItem cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} /> 
          : <p className='text-gray-600'>Your cart is empty. Please select a product from product tab.</p>}
          
          <div className='divider'></div>
          <div className='flex justify-between items-center'>
            <p>Total:</p>
            <p className='font-bold text-2xl'>{totalPrice}</p>
          </div>

          <button onClick={() => handleProceed()} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full mt-6'>Proceed to Checkout</button>
        </div>
        
      )}
    </div>

    </div>
  );
};

export default Render;