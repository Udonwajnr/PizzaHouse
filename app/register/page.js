"use client"
import React,{useContext,useEffect} from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../components/contextApi/context'
import * as Yup from "yup"


const Register = () => {    
  const {user} = useContext(AuthContext)
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password1,setPassword1] = useState("")
    const [errors, setErrors] = useState({});
    const [duplicateError,setDuplicateError] = useState([])
    const [loading,setLoading] = useState(false)
    const { push } = useRouter();
    const router = useRouter();
    const [userData,setUserData] = useState({})


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
        setLoading(true)
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
          setLoading(false)
          setErrors(newErrors);
        }

        if(password1===password){
            await axios.post("https://pizzahouseapi.onrender.com/api/user/register",data)
            .then((data)=>{
                setLoading(true)
                notify()
                // setLoading(false)
                push("/login")
            })
            //how to handle error
            .catch((error)=>{
              // console.log()
              setLoading(false)
              setDuplicateError(error.response.data.duplicateField)
            })
        }
        else{
            alert("Passwords do not match")
            setLoading(false)
        }
    }

    useEffect(()=>{
      if(Object?.keys(user).length){
        router.push('/')
      }
    },[user,router])
    

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
                <button className='bg-purple text-white py-2 w-full my-1 hover:bg-violet-500 flex justify-center items-center gap-x-3'>
                  {
                    loading?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity={0.25}></path><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg> 
                    : 
                    "Register"
                  }
                </button>
            </form>
        </div>
    </Layout>
  )
}

export default Register