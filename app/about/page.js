import React from 'react'
import Layout from '../components/Layout'
import AboutRestaurant from '../components/AboutRestaurant'
import Amenities from '../components/Amenities'
import Review from '../components/Review'

const AboutUs = () => {
  return (
    <Layout>
        <div className='h-[50vh] about-hero flex items-center px-20  md:px-3 '>
            <h1 className='text-white text-6xl md:text-2xl'>About US</h1>
        </div>
        <main>
            <AboutRestaurant/>
            <Amenities/>
            <Review/>
        </main>
    </Layout>
  )
}

export default AboutUs