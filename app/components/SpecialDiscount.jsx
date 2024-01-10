import React from 'react'
import Link from "next/link"
const SpecialDiscount = () => {
  return (
    <section className='py-10'>
        <div className='flex w-7/12 m-auto gap-x-10 md:flex-col md:w-full'>
            <div className='special-discount-img  w-6/12 flex justify-center items-end md:hidden'>
                <span className='text-white text-lg'>Good Food | Good Pizza</span>
            </div>
            <div className='w-6/12 px-3 md:w-full md:flex md:flex-col md:justify-center md:items-center'>
                <h2 className='text-4xl mt-2 mb-5'>Special Discount</h2>
                <h4 className='text-2xl mb-5'>Savings Galore</h4>
                <p>Dive into a world of saving with iur exclusive discounts! indulge in your favorite dishes while enjoying special offers crafted just for you. From tantalizing combo deals to limited-time promotion. Ouer discounts we designed to make your dining experience more delightful.Explore and savor the flavor without breaking the bank!</p>
                <Link href={"/menu"} className=' flex items-center bg-purple w-[200px] justify-center text-white py-2 rounded-3xl mt-10'>
                    Discover Offer
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="white" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path></svg>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default SpecialDiscount