import React from 'react'

const MenuDetails = () => {
  return (
    <div className='flex flex-col gap-y-3 md:gap-y-1'>
        <span className='text-purple text-sm'>Burger</span>
        <h2 className='text-3xl md:text-xl'>Beef Burger</h2>
        <span className='text-xl md:text-base'>$6.00</span>
        <p className='text-sm md:text-sm'>A classic burger with a seasoned beef patty,lettuce,tomato, and cheddar cheese, providing a timeless and hearty meal option.</p>
        <div className='flex gap-x-5 mt-1'>
            <input type="number" className='border bg-white w-20 focus outline-none px-2 md:px-1 md:text-sm' defaultValue={1} min={0}/>
            <button className='py-1 px-3 bg-purple text-white rounded-md md:px-2 md:text-sm'>Add to Cart</button>
        </div>

    </div>
  )
}

export default MenuDetails