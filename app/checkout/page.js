"use client"
import React,{useEffect} from 'react'
import Layout from '../components/Layout'
import Link from "next/link"
import CartTotal from '../components/CartTotal'
import { AuthContext } from '../components/contextApi/context'
import { useContext,useState } from 'react'
import axios from 'axios'
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const {getCartTotal,cartItems,user,clearCart} = useContext(AuthContext)
  const [firstName,SetFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [address,setAddress] = useState("")
  const [city,setCity] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [done,setDone] = useState(false)
  const router = useRouter();


  if(done === true){    
    clearCart()
    router.push("/")  
  }

  const config = {
    public_key:'FLWPUBK_TEST-ed31f789819346c8b94d7e45de9b3b47-X',
    tx_ref: Date.now(),
    amount: getCartTotal(),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.email,
      phone_number: phoneNumber,
      name: firstName + lastName,
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const isAnyFieldEmpty = () => {
  return (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    address.trim() === "" ||
    city.trim() === "" ||
    phoneNumber.trim() === ""
  );
};

  const orders =async()=>{    
      const data={user:user._id,menuData:cartItems,totalPrice:getCartTotal(),firstName,lastName,address,city,phoneNumber,paymentId:41413,paymentStatus:true}
      await axios.post("https://pizzahouseapi.onrender.com/api/orders",data)
      .then((data)=>{
        console.log(data)
      }
      )
      .catch((err)=>{
        console.log(err)
      })
  }

  if(Object?.keys(user).length === 0){
    router.push('/login')
  }
  else if(!cartItems){
    router.push('/menu')  
  }

    const handleFlutterPayment = useFlutterwave(config);
  return (
    <Layout>
      <section className='px-20 py-10 md:px-3  md:py-5'>
      {/* checkout details */}
      <div className='flex gap-x-5  md:flex-col'>
        <div className='w-8/12 md:w-full'>
          <div>
            <div className="my-5">
              <div className='flex gap-x-4 items-center'>
                {/* <span className='font-bold'>1.</span> */}
                <h3 className='text-3xl md:text-lg'>Contact Information</h3>  
              </div>
              {/* <div className=' border-l-2  border-gray-300 flex flex-col px-3 my-4 py-2'>
                <p className='mt-1 md:text-xs'>We'll use this email to send you details and update you about your order</p>
                <input placeholder='Email Address' className='h-9 md:h-6 md:text-sm border mt-2 px-3 rounded-md'/>
              </div> */}
            </div>

            <div>
              <div className='flex gap-x-4 items-center'>
                <span className='font-bold'>1.</span>
                <h3 className='text-3xl md:text-lg'>Shipping Address</h3>  
              </div>

              <div className=' border-l-2  border-gray-300 flex flex-col px-3 my-4 py-2'>
                <label className='mt-1 md:text-xs'>We'll use this email to send you details and update you about your order</label>
                <div>
                  <div className='flex gap-x-3'>
                    <input placeholder='First Name' onChange={(e)=>SetFirstName(e.target.value)} value={firstName.trim()} className='h-9 md:h-6 md:text-sm border mt-5 w-full rounded-md px-3'/>
                    <input  value={lastName.trim()} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' className='h-9 md:h-6 md:text-sm border mt-5 w-full rounded-md px-3'/>
                  </div>

                  <div>
                    <input placeholder='Address' value={address.trim()} onChange={(e)=>setAddress(e.target.value)} className='h-9 md:h-6 md:text-sm border mt-5 w-full px-3'/>
                  </div>

                  {/* might change to select */}
                  <div className='flex gap-x-4'>
                    <input placeholder='City' value={city.trim()} onChange={(e)=>setCity(e.target.value)} className='h-9 md:h-6 md:text-sm border mt-5 w-full px-3'/>
                    {/* <input placeholder="Postal Code" className='h-9 md:h-6 md:text-sm border mt-5 w-full px-3'/> */}
                  </div>
              {/* might change some of the things here */}
                  
                  <div>
                    <input placeholder='Phone Number' value={phoneNumber.trim()} onChange={(e)=>setPhoneNumber(e.target.value)}  className='h-9 md:h-6 md:text-sm border mt-5 w-full px-3'/>
                  </div>
                </div>
              </div>
            </div>  

            <div>
              <div className='flex gap-x-4 items-center'>
                <span className='font-bold'>2.</span>
                <span className='text-3xl md:text-lg'>Payment Option</span>  
              </div>
              <div className=' border-l-2 border-gray-300 flex flex-col px-3 my-4 py-2 gap-y-3'>
                          {/* takes to the payment gate way we will be using stripe  */}
                          {/* if the form is not complete remove disable the payment button */}
                {/* <button className='bg-purple text-white py-2 px-4 rounded-xl md:text-sm md:py-1 md:px-3' onClick={clearCart} disabled={true}>Payment on Deliver</button> */}
                <button className={'bg-black text-white py-2 px-4 rounded-xl md:text-sm md:py-1 md:px-3'}
                 onClick={()=>{
                  if (isAnyFieldEmpty()) {
                    alert("Please fill in all fields");
                  } 
                  else{
                    handleFlutterPayment({
                    callback: (response) => {
                    // console.log(response);
                    orders()
                    closePaymentModal();
                    setDone(true)
                    },
                    onClose: () => {},})
                  }
                }
                }
                  >Flutterwave Payment</button>
              </div>
            </div>  
          </div>  

        </div>

        {/*summary  */}
        <div className='w-4/12 md:w-full'>
          <div>
            <h3>Order Summary</h3>
            <div>
              <div className='overflow-y-scroll h-[600px] px-5 lg:px-2'>
              {
                cartItems.map((item,index)=>{
                  return(
                    <div key={index} className='flex justify-between border-t border-b'>
                      <div className='flex items-center p-4 gap-x-4 '>
                      <div className='max-w-16 relative'>
                          <img src={item.image} alt="" />
                          <div className='border bg-purple text-white font-bold w-7 h-7 absolute flex justify-center items-center rounded-full right-0 text-sm -top-4'>{item.quantity}</div>
                      </div>
                      
                      <div>
                          <div className='flex flex-col gap-y-2'>                
                                  <span className='text-purple text-sm'>{item.category.name}</span>
                                  <span className='text-xs'>${item.price}</span>
                              {/* <p className='text-[#81748b] text-xs'>A classic burger with a seasoned beef patty,lettuce,tomato, and cheddar cheese, providing a timeless and hearty meal option.</p> */}
                              
                          </div>
                      </div>
                    </div>
                      <div className='py-4'>
                          <span className='text-xs'>${item.price * item.quantity}</span>
                      </div>
                    </div>
                  )
                })
              }
              </div>
              
              {/* Total */}
              <div className='bg-[#ede7f7] py-5 px-5 mt-4'>
                <h2 className='mb-5 text-3xl md:text-lg'>Cart totals</h2>
                <div className='md:text-sm'>
                    
                    {/* <div className='flex justify-between mt-2'>
                        <span className='text-lg md:text-base'>Tax:</span>
                        <span>2.99$</span>
                    </div> */}

                    <div className='flex justify-between'>
                        <span className='text-lg md:text-base'>SubTotal: </span>
                        <span>{getCartTotal()}$</span>
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