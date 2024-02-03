"use client"
import React,{useContext} from 'react'
import Layout from '../components/Layout'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'
import { AuthContext } from '../components/contextApi/context'

const Cart = () => {
  const {getCartTotal} = useContext(AuthContext)
  return (
    <Layout>
        <section className='px-20 md:px-3 py-5 justify-between flex flex-wrap gap-x-5'>
          <div className='w-8/12 md:w-full'>
            <div className='flex justify-between'>
                <h4 className='text-2xl md:text-lg'>Products</h4>
                <h4 className='text-2xl md:text-lg'>Total</h4>
            </div>

            <div className='mt-4'>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
            </div>
          </div>

          <div className='w-3/12 md:w-full'>
            <CartTotal/>
          </div>          

        </section>
    </Layout>
  )
}

export default Cart