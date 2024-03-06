import React from 'react'
import Link from "next/link"
import { useContext } from 'react'
import { AuthContext } from './contextApi/context'
const CartTotal = () => {
  const {getCartTotal,user,cartItems} = useContext(AuthContext)
  return (
    <div className='bg-[#ede7f7] py-5 px-5'>
        <h2 className='mb-5 text-3xl md:text-lg'>Cart totals</h2>
        <div className=''>
            {/* <div className='flex justify-between mt-2 md:text-sm'>
                <span className='text-lg md:text-base'>Tax:</span>
                <span>2.99$</span>
            </div> */}
            <div className='flex justify-between md:text-sm'>
                <span className='text-lg md:text-base'>SubTotal: </span>
                <span>{getCartTotal()}$</span>
            </div>
        </div>
        {
          cartItems.length !== 0 &&
        <Link href={user.length !== 0?"/checkout":"/login"} className={cartItems.length!==0 ?'text-white bg-purple hover:bg-violet-500  w-full rounded-lg mt-4 inline-block text-center py-2':"text-white bg-slate-400 hover:bg-slate-500  w-full rounded-lg mt-4 inline-block text-center py-2"}>Proceed to Checkout</Link>
        }
    </div>
  )
}

export default CartTotal