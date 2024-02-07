import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './contextApi/context'

const MenuDetails = ({categoryName,title,price,description,menuDetails}) => {
  const {addToCart,removeFromCart,cartItems} = useContext(AuthContext)

  console.log(cartItems)

  return (
    <div className='flex flex-col gap-y-3 md:gap-y-1'>
        <span className='text-purple text-sm'>{categoryName}</span>
        <h2 className='text-3xl md:text-xl'>{title}</h2>
        <span className='text-xl md:text-base'>${price}</span>
        <p className='text-sm md:text-sm'>{description}</p>
        <div className='flex gap-x-5 mt-1'>
            <div className='flex items-center'>
            <button className='border px-3 py-1 h-full hover:bg-slate-100' onClick={()=>removeFromCart(menuDetails)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10.5 24h28"></path></svg>
              </button>
                <div className='px-4 py-1 border text-sm h-full'>
                  {
                    cartItems?.find((item)=>item._id === menuDetails._id)?.quantity || 0
                  }
                </div>
              <button className='border px-3 py-1 h-full hover:bg-slate-100' onClick={()=>addToCart(menuDetails)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24.06 10l-.036 28M10 24h28"></path></svg>
              </button>
            </div>
            <button className='py-1 px-3 bg-purple text-white rounded-md md:px-2 md:text-sm'>Add to Cart</button>
        </div>
    </div>
  )
}

export default MenuDetails