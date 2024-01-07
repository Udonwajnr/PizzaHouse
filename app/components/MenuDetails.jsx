import React from 'react'

const MenuDetails = () => {
  return (
    <div className='flex flex-col gap-y-3'>
        <span className='text-purple'>Burger</span>
        <h2 className='text-3xl'>Beef Burger</h2>
        <span className='text-xl'>6.00$ - 8.00$</span>
        <p className='text-sm'>A classic burger with a seasoned beef patty,lettuce,tomato, and cheddar cheese, providing a timeless and hearty meal option.</p>
        <div className='flex gap-x-5'>
            <input type="number" className='border bg-white w-20 focus outline-none px-2' defaultValue={1} min={0}/>
            <button className='py-1 px-3 bg-purple text-white rounded-md'>Add to Cart</button>
        </div>

    </div>
  )
}

export default MenuDetails