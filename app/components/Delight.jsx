import React from 'react'
import Kebabs from './Kebabs'
import Burger from './Burger'
const Delight = () => {
  return (
    <section className='bg-[#f3f1f6] py-6'>
        <div className='flex justify-center items-center'>
            <h2 className='font-bold my-5 border-b-2 border-black px-7 py-2'>CLUCK DELIGHTS</h2>
        </div>    
        <div className='delight-grid '>
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

        <div className='grid-k-b'>
            <Kebabs/>
            <Burger/>
        </div>
    </section>
  )
}

export default Delight