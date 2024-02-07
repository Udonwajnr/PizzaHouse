import React,{useContext} from 'react'
import { AuthContext } from './contextApi/context'
const CartItems = ({name,category,price,image,id,items}) => {
  const {addToCart,removeFromCart,cartItems} = useContext(AuthContext)
 return (
  <div className='flex justify-between border-t border-b md:py-2'>
        <div className='flex items-center p-4 md:p-0 gap-x-4 '>
            <div className='max-w-32 md:max-w-20'>
                <img src={image} alt="item-img" />
            </div>
            
            <div>
                <div className='flex flex-col gap-y-2 md:gap-y-1'>                
                        <span className='text-purple md:text-sm'>{category}</span>
                        <h2 className=' md:text-lg'>{name}</h2>
                        <span className='md:text-sm'>{price}$</span>
                    <div className='flex items-center h-10'>

                    <button className='border px-3 h-full hover:bg-slate-100 flex items-center justify-center' onClick={()=>removeFromCart(items)}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10.5 24h28"></path></svg>
                    </button>
                            <div className='px-4 py-1 h-full border text-sm flex items-center justify-center'>
                            {
                                cartItems?.find((item)=>item._id === id)?.quantity
                            }
                            </div>
                    <button className='border px-3 h-full hover:bg-slate-100 flex items-center justify-center' onClick={()=>addToCart(items)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24.06 10l-.036 28M10 24h28"></path></svg>
                    </button>

                    </div>
                </div>
                    {/* <button className='py-1 px-3 md:px-2 block bg-red-700 text-white mt-4  md:text-sm'>Remove Item</button> */}
            </div>
        </div>
        <div className='py-4 md:text-xs'>
            <span>
            {
               cartItems?.find((item)=>item._id === id)?.quantity * price+"$"
             }    
            </span>
        </div>
    </div>
  )
}

export default CartItems