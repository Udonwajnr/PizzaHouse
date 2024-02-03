"use client"
import React from 'react'
import Link from "next/link"
import { useContext } from 'react'
import { AuthContext } from './contextApi/context'

const MenuCard = ({title,category,price,img,id,menuData,quantity}) => {
  const {menu,loading,addToCart} = useContext(AuthContext)
  
  return (
    <div className='max-w-[350px] '>
        <Link href={`menu/detail/${id}`}>
          <div className='flex justify-center items-center w-full h-96'>
              <img src={img} alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col mt-3'>
              <span className='text-[#c5c2c5] md:text-sm'>{category}</span>
              <h2 className='text-xl font-bold md:text-base'>{title}</h2>
              <span className='md:text-sm'>${price}</span>
              <div>{quantity}</div>
          </div>
    </Link>
      <button className='bg-purple text-white py-2 px-4 rounded-xl mt-3 text-center md:text-sm md:py-1 md:px-3 md:rounded-md w-full' onClick={()=>addToCart(menuData)}>Add to Cart</button>
    </div>
  )
}

export default MenuCard