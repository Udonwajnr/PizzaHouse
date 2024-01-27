"use client"
import React from 'react'
import Layout from '../../../components/Layout'
import MenuDetailImage from '../../../components/MenuDetailImage'
import MenuDetails from '../../../components/MenuDetails'
import RelatedFood from '../../../components/RelatedFood'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { redirect } from 'next/navigation';
import ErrorsPage from '@/error/page'

const MenuDetailsSection = ({params}) => {
  const [loading,setLoading] = useState(true)
  const [menuDetails,setMenuDetails] = useState([])
  const [menuData,setMenuData] = useState([])
  const [error,setError] = useState(false)
  
  const {slug} = params
  const getMenuDetail=()=>{        
   const data = axios.get(`https://pizzahouseapi.onrender.com/api/menu/${slug}`)
        .then((data)=>{
          setLoading(false)
          setMenuDetails(data.data)
          setError(false)
        })
        .catch((err)=>{
          setError(true)
        })

      if(menuDetails.length === 0){
        console.log("invalid")
      }
  } 


  const getMenuData=()=>{
    const data =   axios.get(`https://pizzahouseapi.onrender.com/api/menu/`)
        .then((data)=>{
          setLoading(false)
          setMenuData(data.data)
        })
        .catch((err)=>{
          return <>Error</>
        })
      }
  

  useEffect(()=>{
      getMenuDetail()
      getMenuData()
  },[slug])
  return (
    <Layout>
      {
        error?
          <ErrorsPage/> 
        :
        !loading? 
            <div className='flex px-20 py-10 md:px-3 md:py-5 md:flex-col gap-x-3'>
              <div className='w-5/12 md:w-full'>
                <MenuDetailImage image={menuDetails.image}/>
              </div>
              <div className='w-7/12 md:w-full'>
                <MenuDetails categoryName={menuDetails?.category?.name} title={menuDetails?.name} description={menuDetails?.description} price={menuDetails.price}/>
            </div>
            </div>
        :
        <div className='flex px-20 py-10 md:px-3 md:py-5 md:flex-col gap-x-3'>
              <div className='w-5/12 md:w-full'>
                {/* <MenuDetailImage image={menuDetails.image}/> */}
                <Skeleton count={1} className='h-80'/>
              </div>
              <div className='w-7/12 md:w-full'>
                  <Skeleton count={5} className='h-5'/>
                {/* <MenuDetails categoryName={menuDetails?.category?.name} title={menuDetails?.title} description={menuDetails?.description} price={menuDetails.price}/> */}
            </div>
            </div>
      }        
              <RelatedFood menuDetails={menuDetails} menuData={menuData}/> 
    </Layout>
  )
    }

    // .filter((data)=>data.category.name === menuDetails.category.name)
    
export default MenuDetailsSection