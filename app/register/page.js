"use client"
import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const Register = () => {
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password1,setPassword1] = useState("")
    const { push } = useRouter();

    const submitForm =async(e)=>{
        e.preventDefault()
        const data = {username,email,password,password1}
        if(password1===password){
            await axios.post("https://pizzahouseapi.onrender.com/api/user/register",data)
            .then((data)=>{
                console.log("successful")
                push("/login")
            })
            //how to handle error
            .catch((error)=>{
                console.log(error)
            })
        }

        else{
            alert("Passwords do not match")
        }
    }
    
    return (
    <Layout>
        <div className='flex justify-center items-center h-screen bg-[#f3f1f6]'>
            <form className='max-w-3xl w-full' onSubmit={submitForm}>
                <div className='flex flex-col justify-center items-center my-2'>
                <img src={"/pizzalogo.png"} alt="logo" className=' md:w-10 md:h-10 w-16 h-16'/>
                    <h2 className='text-3xl font-bold'>Create Your Account</h2>
                </div>
                <div className='flex flex-col'>
                    <input type='text' value={username} onChange={(e)=>setUserName(e.target.value.trim())} className='border h-10 my-1 px-2 focus:outline-none' placeholder='Username' />
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value.trim())} className='border h-10 my-1 px-2 focus:outline-none' placeholder='Email'/>
                    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className='border h-10 my-1 px-2 focus:outline-none' placeHolder="Password"/>
                    <input type='text' value={password1} onChange={(e)=>setPassword1(e.target.value)} className='border h-10 my-1 px-2 focus:outline-none' placeHolder="Repeat Password"/>  
                </div>
                <button className='bg-purple text-white py-2 w-full my-1 hover:bg-violet-500'>Register</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register