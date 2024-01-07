import React from 'react'
import Link from "next/link"
const Kebabs = () => {
  return (
    <div className=''>
        <h2 className='text-4xl py-10 text-center'>Kebabs</h2>
        <div className='kebabs-grid'>
            <div className='flex justify-between relative border-[#e7e6e9] border max-w-[550px] gap-x-10 px-2'>
                <div className='w-8/12 py-4'>
                    <h1 className='font-bold text-lg'>Chicken Stripes (5 pieces)</h1>
                    <p className='text-[#857f92] mt-4'>Savor the delicious crunch of our succulent chicken wings strips. Hand-breaded and expertly seasoned our chicken.</p>
                </div>
                <div className='w-4/12'>
                    <img src="pngegg (1).png" alt="" className='max-w-[150px]' />
                </div>

                <div className='absolute right-2 top-1'>
                    <span className='bg-[#ffe317] py-0.5 px-1 text-xs rounded-sm'>$5.50 - $7.00</span>
                </div>

            </div>

            <div className='flex justify-between relative border-[#e7e6e9] border max-w-[550px] gap-x-10 px-2'>
                <div className='w-8/12 py-4'>
                    <h1 className='font-bold text-lg'>Chicken Stripes (5 pieces)</h1>
                    <p className='text-[#857f92] mt-4'>Savor the delicious crunch of our succulent chicken wings strips. Hand-breaded and expertly seasoned our chicken.</p>
                </div>
                <div className='w-4/12'>
                    <img src="pngegg (1).png" alt="" className='max-w-[150px]' />
                </div>

                <div className='absolute right-2 top-1'>
                    <span className='bg-[#ffe317] py-0.5 px-1 text-xs rounded-sm'>$5.50 - $7.00</span>
                </div>

            </div>

            <div className='flex justify-between relative border-[#e7e6e9] border max-w-[550px] gap-x-10 px-2'>
                <div className='w-8/12 py-4'>
                    <h1 className='font-bold text-lg'>Chicken Stripes (5 pieces)</h1>
                    <p className='text-[#857f92] mt-4'>Savor the delicious crunch of our succulent chicken wings strips. Hand-breaded and expertly seasoned our chicken.</p>
                </div>
                <div className='w-4/12'>
                    <img src="pngegg (1).png" alt="" className='max-w-[150px]' />
                </div>

                <div className='absolute right-2 top-1'>
                    <span className='bg-[#ffe317] py-0.5 px-1 text-xs rounded-sm'>$5.50 - $7.00</span>
                </div>
            </div>
        </div>
        <Link href={"/"} className=' m-auto flex items-center bg-purple w-[200px] justify-center text-white py-2 rounded-3xl mt-10'>
             Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="white" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path></svg>
        </Link>
    </div>
  )
}

export default Kebabs