import React from 'react'
import Link from "next/link"
const MenuCard = ({title,category,price,img}) => {
  return (
    <Link href={'/detail'}>
      <div className='max-w-[150px] '>
          <div className='flex justify-center items-center w-full h-96'>
              <img src={img} alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col mt-3'>
              <span className='text-[#c5c2c5] md:text-sm'>{category}</span>
              <h2 className='text-xl font-bold md:text-base'>{title}</h2>
              <span className='md:text-sm'>{price}$</span>
              <button className='bg-purple text-white py-2 px-4 rounded-xl mt-3 text-center md:text-sm md:py-1 md:px-3 md:rounded-md'>Add to Cart</button>
          </div>

      </div>
    </Link>
  )
}

export default MenuCard