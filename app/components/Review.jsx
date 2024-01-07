"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Review = () => {
        const settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3500,
          pauseOnHover: true,
          cssEase: "linear"
        }
    return (
    <section >
        <div className='max-w-5xl m-auto py-10'> 
            <Slider {...settings}>
                <div className='w-full'>
                    <p className='text-center italic'>The pizza here are a masterpiece! Each slice is a burst of authentic italian flavours, from the Perfectly thi crust to the rich tomato sauce and premium toppings. A true homage to the art of Neapolitan pizza-making</p>
                    <div className='flex items-center gap-x-2 justify-center mt-5'>
                        <img src="images (2).jpeg" alt="avatar" className='w-20 h-20 rounded-full' />
                        <span>Shamika Smith</span>
                    </div>
                </div>

                <div className=' '>
                    <p className='text-center italic'>The pizza here are a masterpiece! Each slice is a burst of authentic italian flavours, from the Perfectly thi crust to the rich tomato sauce and premium toppings. A true homage to the art of Neapolitan pizza-making</p>
                    <div className='flex items-center gap-x-2 justify-center mt-5'>
                        <img src="haircuts-for-round-face-2000-dbc9189937e84a028d3ca7be79f072a5.jpg" alt="avatar" className='w-20 h-20 rounded-full' />
                        <span>Shamika Smith</span>
                    </div>
                </div>

                <div className=' '>
                    <p className='text-center italic'>The pizza here are a masterpiece! Each slice is a burst of authentic italian flavours, from the Perfectly thi crust to the rich tomato sauce and premium toppings. A true homage to the art of Neapolitan pizza-making</p>
                    <div className='flex items-center gap-x-2 justify-center mt-5'>
                        <img src="images (1).jpeg" alt="avatar" className='w-20 h-20 rounded-full' />
                        <span>Shamika Smith</span>
                    </div>
                </div>

                <div className=''>
                    <p className='text-center italic'>The pizza here are a masterpiece! Each slice is a burst of authentic italian flavours, from the Perfectly thi crust to the rich tomato sauce and premium toppings. A true homage to the art of Neapolitan pizza-making</p>
                    <div className='flex items-center gap-x-2 justify-center mt-5'>
                        <img src="550-profile-image-1675424436-thumb.jpg" alt="avatar" className='w-20 h-20 rounded-full' />
                        <span>Shamika Smith</span>
                    </div>
                </div>
            </Slider>
        </div>
    </section>
  )
}

export default Review