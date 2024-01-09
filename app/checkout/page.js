import React from 'react'
import Layout from '../components/Layout'
import Link from "next/link"
import CartTotal from '../components/CartTotal'

const Checkout = () => {
  return (
    <Layout>
      <section className='px-20 py-10'>
      {/* checkout details */}
      <div className='flex gap-x-5 '>
        <div className='w-8/12'>
          <div>
            <div>
              <div className='flex gap-x-4 items-center'>
                <span className='font-bold'>1.</span>
                <h3 className='text-3xl'>Contact Information</h3>  
              </div>
              <div className=' border-l-2  border-gray-300 flex flex-col px-3 my-4 py-2'>
                <p className='mt-1'>We'll use this email to send you details and update you about your order</p>
                <input placeholder='Email Address' className='h-9 border mt-2 px-3 rounded-md'/>
              </div>
            </div>  

            <div>
              <div className='flex gap-x-4 items-center'>
                <span className='font-bold'>2.</span>
                <h3 className='text-3xl'>Shipping Address</h3>  
              </div>

              <div className=' border-l-2  border-gray-300 flex flex-col px-3 my-4 py-2'>
                <label>We'll use this email to send you details and update you about your order</label>
                <div>
                  <div className='flex gap-x-3'>
                    <input placeholder='First Name' className='h-9 border mt-5 w-full rounded-md px-3'/>
                    <input placeholder='Last Name' className='h-9 border mt-5 w-full rounded-md px-3'/>
                  </div>

                  <div>
                    <input placeholder='Address' className='h-9 border mt-5 w-full px-3'/>
                  </div>

                  <div>
                    <input placeholder='Apartment' className='h-9 border mt-5 w-full px-3'/>
                  </div>

                  {/* might change to select */}
                  <div className='flex gap-x-4'>
                    <input placeholder='Country/Region' className='h-9 border mt-5 w-full px-3'/>
                    <input placeholder="Postal Code" className='h-9 border mt-5 w-full px-3'/>
                  </div>
              {/* might change some of the things here */}
                  <div className='flex gap-4'>
                    <input placeholder='City' className='h-9 border mt-5 w-full px-3'/>
                    <input placeholder='Province' className='h-9 border mt-5 w-full px-3'/>
                  </div>

                  <div>
                    <input placeholder='Phone Number' className='h-9 border mt-5 w-full px-3'/>
                  </div>



                </div>
              </div>
            </div>  

            <div>
              <div className='flex gap-x-4 items-center'>
                <span className='font-bold'>3.</span>
                <span className='text-3xl'>Payment Option</span>  
              </div>
              <div className=' border-l-2 border-gray-300 flex flex-col px-3 my-4 py-2 gap-y-3'>
                          {/* takes to the payment gate way we will be using stripe  */}
                          {/* if the form is not complete remove disable the payment button */}
                <button className='bg-purple text-white py-2 px-4 rounded-xl'>Payment on Deliver</button>
                <button className='bg-black text-white py-2 px-4 rounded-xl'>Payment Gateway</button>
              </div>
            </div>  
          </div>  

        </div>

        {/*summary  */}
        <div className='w-4/12'>
          <div>
            <h3>Order Summary</h3>
            <div>
              <div>
                <div className='flex justify-between border-t border-b'>
                  <div className='flex items-center p-4 gap-x-4 '>
                  <div className='max-w-20 relative'>
                      <img src="pngwing.com.png" alt="" />
                      <div className='border bg-purple text-white font-bold w-7 h-7 absolute flex justify-center items-center rounded-full right-0 text-sm -top-4'>1</div>
                  </div>
                  
                  <div>
                      <div className='flex flex-col gap-y-2'>                
                              <span className='text-purple text-sm'>Burger</span>
                              <span className='text-xs'>2.50$</span>
                          <p className='text-[#81748b] text-xs'>A classic burger with a seasoned beef patty,lettuce,tomato, and cheddar cheese, providing a timeless and hearty meal option.</p>
                          
                      </div>
                  </div>
              </div>
          <div className='py-4'>
              <span className='text-xs'>3.50$</span>
          </div>
                </div>

                <div className='flex justify-between border-t border-b'>
                  <div className='flex items-center p-4 gap-x-4 '>
                  <div className='max-w-20 relative'>
                      <img src="pngwing.com.png" alt="" />
                      <div className='border bg-purple text-white font-bold w-7 h-7 absolute flex justify-center items-center rounded-full top-0 right-0 text-sm -top-4'>1</div>
                  </div>
                  
                  <div>
                      <div className='flex flex-col gap-y-2'>                
                              <span className='text-purple text-sm'>Burger</span>
                              <span className='text-xs'>2.50$</span>
                          <p className='text-[#81748b] text-xs'>A classic burger with a seasoned beef patty,lettuce,tomato, and cheddar cheese, providing a timeless and hearty meal option.</p>
                          
                      </div>
                  </div>
              </div>
          <div className='py-4'>
              <span className='text-xs'>3.50$</span>
          </div>
                </div>

              </div>
              
              {/* Total */}
              <div className='bg-[#ede7f7] py-5 px-5 mt-4'>
                <h2 className='mb-5 text-3xl'>Cart totals</h2>
                <div className=''>
                    <div className='flex justify-between'>
                        <span className='text-lg'>SubTotal: </span>
                        <span>300$</span>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <span className='text-lg'>Tax:</span>
                        <span>2.99$</span>
                    </div>
                </div>
                </div>

            </div>
          </div>
        </div>

      </div>
      </section>
    </Layout>
  )
}

export default Checkout