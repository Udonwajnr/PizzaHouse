import React from 'react'

const CartItems = () => {
  return (
  <div className='flex justify-between border-t border-b'>
        <div className='flex items-center p-4 gap-x-4 '>
            <div className='max-w-32'>
                <img src="pngwing.com.png" alt="" />
            </div>
            
            <div>
                <div className='flex flex-col gap-y-2'>                
                        <span className='text-purple'>Burger</span>
                        <span>2.50$</span>
                    <p className='text-sm'>A classic burger with a seasoned beef patty,lettuce,tomato, and cheddar cheese, providing a timeless and hearty meal option.</p>
                    <div className='flex gap-x-5 flex-col'>
                        <input type="number" className='border bg-white w-20 focus outline-none px-2' defaultValue={1} min={0}/>
                    </div>
                </div>
                    <button className='py-1 px-3 block bg-red-700 text-white mt-4'>Remove Item</button>
            </div>
        </div>
        <div className='py-4'>
            <span>3.50$</span>
        </div>
    </div>
  )
}

export default CartItems