import React from 'react'
import CardMenu from '../components/MenuCard'

const RelatedFood = () => {
  return (
    <div className='py-10 px-20 md:px-3'>
      <h2 className='text-3xl my-5 md:text-2xl'>Related Products</h2>
      <div className='flex gap-5 flex-wrap justify-around'>
                <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
                <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
                <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
      </div>
    </div>
  )
}

export default RelatedFood