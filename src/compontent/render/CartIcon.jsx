import React from 'react';

const CartIcon = ({cartItems}) => {
  return (
     <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span class="badge badge-sm indicator-item bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-5 h-5 rounded-full">{cartItems.length}</span>
        </div>
        </div>
  );
};

export default CartIcon;