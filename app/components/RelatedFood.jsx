import React from 'react'
import CardMenu from '../components/MenuCard'

const RelatedFood = ({menuDetails,menuData}) => {
  return (
    <div className='py-10 px-20 md:px-3'>
      <h2 className='text-3xl my-5 md:text-2xl'>Related Products</h2>
      <div className='flex gap-5 flex-wrap justify-around'>
        {
          menuData.slice(0,4).filter((data)=>data?.category?.name === menuDetails?.category?.name).map((data,index)=>{
            return(
                <CardMenu key={index} title={data.name} category={data.category.name} img={data.image} price={data.price}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default RelatedFood