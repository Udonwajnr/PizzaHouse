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
import ErrorsPage from '@/error/page'
import { useContext } from 'react'
import { AuthContext } from '@/app/components/contextApi/context'
import toast, { Toaster } from 'react-hot-toast';


const MenuDetailsSection = ({params}) => {
  const [loading,setLoading] = useState(true)
  const [menuDetails,setMenuDetails] = useState([])
  const [menuData,setMenuData] = useState([])
  const [error,setError] = useState(false)
  const {increment,decrement,quantity,cartItems} = useContext(AuthContext)
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
        {/* <Toaster
             toastOptions={{
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: 'white',
                backgroundColor:'#52b963'
              }  
            }}
        /> */}

      <div className='h-[90vh] bg-[#f3f1f6]'>

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
                <MenuDetails menuDetails={menuDetails} categoryName={menuDetails?.category?.name} title={menuDetails?.name} description={menuDetails?.description} price={menuDetails.price} quantity={quantity}/>
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
       </div>
              <RelatedFood menuDetails={menuDetails} menuData={menuData}/> 
    </Layout>
  )
    }

export default MenuDetailsSection