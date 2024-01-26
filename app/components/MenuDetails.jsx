import React from 'react'

const MenuDetails = ({categoryName,title,price,description}) => {
  return (
    <div className='flex flex-col gap-y-3 md:gap-y-1'>
        <span className='text-purple text-sm'>{categoryName}</span>
        <h2 className='text-3xl md:text-xl'>{title}</h2>
        <span className='text-xl md:text-base'>${price}</span>
        <p className='text-sm md:text-sm'>{description}</p>
        <div className='flex gap-x-5 mt-1'>
            <input type="number" className='border bg-white w-20 focus outline-none px-2 md:px-1 md:text-sm' defaultValue={1} min={0}/>
            <button className='py-1 px-3 bg-purple text-white rounded-md md:px-2 md:text-sm'>Add to Cart</button>
        </div>

    </div>
  )
}

export default MenuDetails