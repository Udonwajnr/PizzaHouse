import React from 'react'
import Link from "next/link"
const MenuCard = ({title,category,price,img}) => {
  return (
    <Link href={'/detail'}>
      <div className='w-[200px] '>
          <div className='flex justify-center items-center w-full h-96'>
              <img src={img} alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col mt-3'>
              <span className='text-[#c5c2c5]'>{category}</span>
              <h2 className='text-2xl font-bold'>{title}</h2>
              <span>{price}$</span>
              <button className='bg-purple text-white py-2 px-4 rounded-xl mt-3 text-center'>Add to Cart</button>
          </div>

      </div>
    </Link>
  )
}

export default MenuCard