import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
    <footer className='footer h-[50vh] flex flex-col justify-center items-center text-center'>
        <h2 className='text-4xl text-white'>Call for all your Reservations</h2>
        <h4 className='text-2xl mt-7 text-white'>0516331761</h4>
        <small className='mt-9 text-white'>copy@ 2023 pizza House | Powered by Pizza House</small>
        <small className='mt-3 text-white'><Link href={"/"}>FAQs</Link></small>
    </footer>
  )
}

export default Footer