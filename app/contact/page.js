"use client"
import React from 'react'
import Layout from '../components/Layout'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Location from '../components/Location';

const libraries = ['places'];
const mapContainerStyle = {
    width: '1000px',
    height: '650px',
  };
  const center = {
    lat: 7.2905715, // default latitude
    lng: 80.6337262, // default longitude
  };
  

const ContactUs = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDrC9M7xXlMLV4w1VEdGHRGJFnVoGA4FK0',
        libraries,
      });

      if (loadError) {
        return console.log('Error loading maps')
      }
    
      if (!isLoaded) {
        return console.log("Loading map");
      }
    
  return (
    <Layout>
        <div className='h-[50vh] contact-hero flex flex-col justify-center px-20'>
            <h3 className='text-3xl text-white'>Book A table</h3>
            <h2 className='text-5xl text-white'>0516331761</h2>
        </div>
        <main>  
            <div className='flex items-center justify-center gap-x-5 py-20 flex-wrap'>
                <div>
                <GoogleMap
                     mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={center}
                        >
                    <Marker position={center} />
                </GoogleMap>
                </div>
                <div className='relative contact-img w-[400px] h-[650px] flex items-end justify-center py-5'>
             <div>
                <h3 className='text-white text-4xl'>Open Everyday</h3>
                 <div className='flex flex-col justify-center items-center mt-6'>
                        <span className='text-white text-base font-bold'>Opening Hours</span>
                        <span className='text-white text-base font-bold'>11:00 to 15:00 & 17:30 to 23:00</span>
                    </div>
                </div>
                </div>
            </div>

            <Location/>
        </main>
    </Layout>
  )
}

export default ContactUs