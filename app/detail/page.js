import React from 'react'
import Layout from '../components/Layout'
import MenuDetailImage from '../components/MenuDetailImage'
import MenuDetails from '../components/MenuDetails'
import RelatedFood from '../components/RelatedFood'

const MenuDetailsSection = () => {
  return (
    <Layout>
      <>
        <div className='flex px-20 md:px-3 md:py-5 md:flex-col'>
          <div className='w-5/12 md:w-full'>
            <MenuDetailImage/>
          </div>
          <div className='w-7/12 md:w-full'>
            <MenuDetails/>
          </div>
        </div>
        <RelatedFood/>
      </>
    </Layout>
  )
}

export default MenuDetailsSection