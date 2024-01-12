import React from 'react'

const CartItems = () => {
  return (
  <div className='flex justify-between border-t border-b md:py-2'>
        <div className='flex items-center p-4 md:p-0 gap-x-4 '>
            <div className='max-w-32 md:max-w-20'>
                <img src="pngwing.com.png" alt="" />
            </div>
            
            <div>
                <div className='flex flex-col gap-y-2 md:gap-y-1'>                
                        <span className='text-purple md:text-sm'>Burger</span>
                        <h2 className=' md:text-lg'>Burger</h2>
                        <span className='md:text-sm'>2.50$</span>
                    <div className='flex gap-x-5 flex-col'>
                        <input type="number" className='border bg-white w-20 focus outline-none px-2 md:px-1' defaultValue={1} min={0}/>
                    </div>
                </div>
                    {/* <button className='py-1 px-3 md:px-2 block bg-red-700 text-white mt-4  md:text-sm'>Remove Item</button> */}
            </div>
        </div>
        <div className='py-4 md:text-xs'>
            <span>3.50$</span>
        </div>
    </div>
  )
}

export default CartItems