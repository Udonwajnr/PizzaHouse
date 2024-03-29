"use client"
import React,{useContext, useEffect} from 'react'
import Layout from '../components/Layout'
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { AuthContext } from '../components/contextApi/context'

const Login = () => {
  const [loading,setLoading] = useState(false)
  const {setUser,user,username,setUserName,password,setPassword,loginForm,cartItems} = useContext(AuthContext)
  const router = useRouter();

  useEffect(()=>{
    if(Object?.keys(user).length){
      router.push('/')
    }
  },[user,router])

  return (
    <Layout>
    <div className='flex justify-center items-center h-screen bg-[#f3f1f6]'>
            <form className='max-w-3xl w-full lg:p-3' onSubmit={loginForm}>
                <div className='flex flex-col justify-center items-center my-2'>
                <img src={"/pizzalogo.png"} alt="logo" className=' md:w-10 md:h-10 w-16 h-16'/>
                    <h2 className='text-3xl font-bold'>Login To Your Account</h2>
                </div>
                <div className='flex flex-col'>
                    <input type='text' value={username} onChange={(e)=>setUserName(e.target.value.trim())} className='border h-10 my-1 px-2 focus:outline-none lg:h-7 lg:text-sm' placeholder='Username'/>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='border h-10 my-1 px-2 focus:outline-none lg:h-7 lg:text-sm' placeholder="Password"/>
                </div>
                <button className='bg-purple text-white py-2 w-full my-1 hover:bg-violet-500 flex justify-center items-center gap-x-3 lg:h-7'>Login</button>
            </form>
        </div> 
    </Layout>
  )
}

export default Login