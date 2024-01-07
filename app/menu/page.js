import React from 'react'
import Layout from '../components/Layout'
import CardMenu from '../components/MenuCard'

const MainMenu = () => {
  return (
    <Layout>
      <section className='px-20 py-10 bg-[#f3f1f6]'>
          <div><h1 className='text-4xl'>Main Menu</h1></div>
          <div className=''>
            <div className='flex justify-between my-5'>
              <span>Showing 1-12 of 23 results</span>
                <span>Default Sorting</span>
            </div>
            <div>
              <div className='flex flex-wrap gap-4 justify-between py-10'>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
                <CardMenu title={"1 Liter Drinks"} category={'Soft Drinks'} img={'klipartz.com.png'} price={"3.00$"}/>
              </div>
            {/* pagination */}
            
            <div className='flex gap-x-3'>
              <div className='border-purple border py-2 px-3 bg-purple text-white font-bold'>1</div>
              <div className='border-purple border py-2 px-3'>2</div>
              <div className='border-purple border py-2 px-3'>2</div>

            </div>

            </div>
          </div>

      </section>
    </Layout>
  )
}

export default MainMenu