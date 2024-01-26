import React from 'react'
import Layout from '../components/Layout'
import AboutRestaurant from '../components/AboutRestaurant'
import Amenities from '../components/Amenities'
import Review from '../components/Review'

const AboutUs = () => {
  return (
    <Layout>
        <div className='h] about-hero flex items-center px-20'>
            <h1 className='text-white text-6xl'>About US</h1>
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