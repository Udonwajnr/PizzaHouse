import React from 'react'
import Layout from '../components/Layout'
const Login = () => {
  return (
    <Layout>
    <div className='flex justify-center items-center h-screen bg-[#f3f1f6]'>
            <form className='max-w-3xl w-full'>
                <div className='flex flex-col justify-center items-center my-2'>
                <img src={"/pizzalogo.png"} alt="logo" className=' md:w-10 md:h-10 w-16 h-16'/>
                    <h2 className='text-3xl font-bold'>Login To Your Account</h2>
                </div>
                <div className='flex flex-col'>
                    <input type='text' className='border h-10 my-1 px-2 focus:outline-none' placeholder='Username' />
                    <input type='text' className='border h-10 my-1 px-2 focus:outline-none' placeholder='Email'/>
                    <input type='text' className='border h-10 my-1 px-2 focus:outline-none' placeHolder="Password"/>
                    <input type='text' className='border h-10 my-1 px-2 focus:outline-none' placeHolder="Repeat Password"/>  
                </div>
                <button className='bg-purple text-white py-2 w-full my-1 hover:bg-violet-500'>Register</button>
            </form>
        </div> 
    </Layout>
  )
}

export default Login