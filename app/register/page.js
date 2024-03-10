"use client"
import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from "yup"

const Register = () => {    

    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password1,setPassword1] = useState("")
    const [errors, setErrors] = useState({});
    const [duplicateError,setDuplicateError] = useState([])
    const { push } = useRouter();

    const validationSchema = Yup.object({
        username: Yup.string().required("username is Required") .min(6, "Username must be at least 6 characters"),
        email: Yup.string()
          .required("Email is Required")
          .email("Invalid email format")
          .trim(),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters")
          .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one symbol"
          )
          .matches(/[0-9]/, "Password must contain at least one number")
          .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
          .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
        password1: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm password is required")
      });
    
    const notify = () => toast('Registration Successful');
    
    
    const submitForm =async(e)=>{
        e.preventDefault()

        const nonParsed = {
          username:username,
          email: email,
          password: password,
          password1: password1,
        };

        const parsedUser = validationSchema.cast(nonParsed);

        const data = {username,email,password,password1}

        console.log(nonParsed, parsedUser);

        try {
          await validationSchema.validate(data, {abortEarly: false});
          console.log("Form Submitted", data);
        }
        catch (error) {
          const newErrors = {};
    
          error.inner.forEach((err) => {
            newErrors[err.path] = err.message;
          });

          console.log(newErrors)
    
          setErrors(newErrors);
        }

        if(password1===password){
            await axios.post("https://pizzahouseapi.onrender.com/api/user/register",data)
            .then((data)=>{
                notify()
                push("/login")
            })
            //how to handle error
            .catch((error)=>{
              // console.log()
                setDuplicateError(error.response.data.duplicateField)
            })
        }
        else{
            alert("Passwords do not match")
        }
    }
    console.log(duplicateError)
    return (
    <Layout>
         <Toaster
          toastOptions={{
            style: {
              border: '',
              padding: '16px',
              color: 'white',
              backgroundColor:'#52b963'
            }  
          }}
        />
        <div className='flex justify-center items-center h-screen bg-[#f3f1f6]'>
            <form className='max-w-3xl w-full' onSubmit={submitForm}>
                <div className='flex flex-col justify-center items-center my-2'>
                <img src={"/pizzalogo.png"} alt="logo" className=' md:w-10 md:h-10 w-16 h-16'/>
                    <h2 className='text-3xl font-bold'>Create Your Account</h2>
                </div>
                <div className='flex flex-col'>
                    <input type='text' value={username} onChange={(e)=>setUserName(e.target.value.trim())} className='border h-10 my-1 px-2 focus:outline-none' placeholder='Username' />
                    {duplicateError?.includes("username")&& <div className="error text-red-500">Username Already Exist</div>}
                    {errors.username && <div className="error">{errors.username}</div>}
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value.trim())} className='border h-10 my-1 px-2 focus:outline-none' placeholder='Email'/>
                    {duplicateError?.includes("email")&& <div className="error text-red-500">Email Already Exist</div>}
                    {errors.email && <div className="error">{errors.email}</div>}
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border h-10 my-1 px-2 focus:outline-none' placeholder="Password"/>
                    {errors.password && <div className="error">{errors.password}</div>}
                    <input type='password' value={password1} onChange={(e)=>setPassword1(e.target.value)} className='border h-10 my-1 px-2 focus:outline-none' placeholder="Repeat Password"/>  
                    {errors.password1 && <div className="error">{errors.password1}</div>}
                
                </div>
                <button className='bg-purple text-white py-2 w-full my-1 hover:bg-violet-500'>Register</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register