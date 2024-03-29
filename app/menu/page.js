"use client"
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import CardMenu from '../components/MenuCard'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from '../components/SkeletonCard'
import { AuthContext } from '../components/contextApi/context'
import toast, { Toaster } from 'react-hot-toast';

const MainMenu = () => {
  const {menu,loading} = useContext(AuthContext)
  return (
    <Layout>
        <Toaster
          toastOptions={{
            style: {
              border: '',
              padding: '16px',
              color: 'white',
              backgroundColor:'#52b963'
            }  
          }}
        />
      <section className='px-20 md:px-3 py-10 md:py-5 bg-[#f3f1f6]'>
          <div><h1 className='text-4xl md:text-xl'>Menu</h1></div>
          <div className=''>
            {/* <div className='flex justify-between my-5'>
              <span className='md:text-xs'>Showing 1-12 of 23 results</span>
                <span className='md:text-xs'>Default Sorting</span>
            </div> */}
            <div>
              <div className='flex flex-wrap gap-5 justify-around items-center md:items-center py-10'>
                  {loading && <SkeletonCard/>}
                {
                  !loading&&
                  menu.map((menu,index)=>{
                    return(
                      <CardMenu key={index} id={menu._id} title={menu.name} category={menu?.category?.name} img={menu.image} price={menu.price} menuData={menu} quantity={menu.quantity}/>        
                    )
                  })                 
                }
              </div>
            {/* pagination */}
             
            
            {/* <div className='flex gap-x-3'>
              <div className='border-purple border py-2 px-3 bg-purple text-white font-bold'>1</div>
              <div className='border-purple border py-2 px-3'>2</div>
              <div className='border-purple border py-2 px-3'>3</div>
            </div> */}
            </div>
          </div>

      </section>
    </Layout>
  )
}

export default MainMenu