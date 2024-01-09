import React from 'react'
import Layout from '../components/Layout'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  return (
    <Layout>
        <section className='px-20 justify-between  flex gap-x-5'>
          <div className='w-8/12'>
            <div className='flex justify-between'>
                <h4 className='text-2xl'>Products</h4>
                <h4 className='text-2xl'>Total</h4>
            </div>

            <div className='mt-4'>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
            </div>
          </div>

          <div className='w-3/12'>
            <CartTotal/>
          </div>          

        </section>
    </Layout>
  )
}

export default Cart