import React from 'react'
import Link from "next/link"

const MostLoved = () => {
  return (
    <section className='flex justify-between px-20 h-[90vh] items-center bg-[#f4f3f7]'>
        <div className='w-6/12'>
            <h6 className='text-2xl'>Country Most Loved</h6>
            <h2 className='text-4xl font-bold mt-3'>Welcome</h2>
            <article className='mt-10'>
                Welcome to our digital Oasis of flavour step into a world where culinary artistry meets your cravings.Explore our menu crafted with passion,savor the taste of excellence and embark on a delightful journey through our detectable offering.Your culinary adventure begin here - enjoy the feast for yur senses!
            </article>
            <Link href={"/"} className=' flex items-center bg-purple w-[200px] justify-center text-white py-2 rounded-3xl mt-10'>
                More About Us
                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="white" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path></svg>
             </Link>
        </div>

        <div className='w-[400px] h-[650px] pizza-bg'>
            {/* <img src="pablo-pacheco-D3Mag4BKqns-unsplash (1).jpg" alt="img" /> */}
        </div>

        <div className='relative burger w-[400px] h-[650px] flex items-end justify-center py-5'>
            <div className=''>
                <h3 className='text-white text-4xl'>Open Everyday</h3>
                <div className='flex flex-col justify-center items-center mt-6'>
                    <span className='text-white text-base font-bold'>Opening Hours</span>
                    <span className='text-white text-base font-bold'>11:00 to 15:00 & 17:30 to 23:00</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MostLoved