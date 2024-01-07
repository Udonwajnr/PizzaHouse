import React from 'react'
import CardMenu from '../components/MenuCard'

const RelatedFood = () => {
  return (
    <div className='py-10 px-20'>
      <h2 className='text-3xl my-5'>Related Products</h2>
      <div className='flex gap-x-5 '>
          <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
                <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
                <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
      </div>
    </div>
  )
}

export default RelatedFood