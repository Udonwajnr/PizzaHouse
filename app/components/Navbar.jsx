"use client"
import React from 'react'
import Link from "next/link"
import ResponsiveMenu from './ResponsiveMenu'
import { useState } from 'react'

const Navbar = () => {
const [toggle,setToggle] = useState(false)
const toggleNav = ()=>{
  setToggle(!toggle)
} 

return (
    <>
      <header className='px-20 py-3 md:py-1 bg-white md:px-5 shadow-md'>
        <nav className='flex justify-between items-center'>
          <div>
            <Link href={"/"}>
              <img src={"pizzalogo.png"} alt="logo" className=' md:w-10 md:h-10 w-16 h-16'/>
            </Link>
          </div>

          <div className='flex justify-center items-center gap-x-4 md:hidden'>
            <ul className='flex gap-x-4'>
              <li>
                <Link href="/" className='hover:text-purple hover:duration-200 duration-200 transition'>Home</Link>
              </li>

              <li>
                <Link href="/menu" className='hover:text-purple hover:duration-200 duration-200 transition'>Menu</Link>
              </li>

              <li>
                <Link href="/about" className='hover:text-purple hover:duration-200 duration-200 transition'>About Us</Link>
              </li>

              <li>
                <Link href="/contact" className='hover:text-purple hover:duration-200 duration-200 transition'>Contact Us</Link>
              </li>
            </ul>

            <div className='flex items-center gap-x-3'>
              <span>0.00$</span>
              <div className='relative'>
                <Link href={'/cart'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#8f43f1" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775T15.55 13H8.1L7 15h11.025q.425 0 .7.288T19 16q0 .425-.288.713T18 17H7Z"></path></svg>
                </Link>
                <div className='absolute z-20 -top-2 -right-3 bg-purple  w-5 h-5 flex justify-center items-center rounded-full'>
                  <span className='text-white text-xs'>0</span>
                </div>
              </div>
            </div>
          </div>

          <div className='cursor-pointer hidden md:block' onClick={toggleNav}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 5q-.425 0-.713-.288T3 4q0-.425.288-.713T4 3h16q.425 0 .713.288T21 4q0 .425-.288.713T20 5H4Zm0 16q-.425 0-.713-.288T3 20q0-.425.288-.713T4 19h16q.425 0 .713.288T21 20q0 .425-.288.713T20 21H4Zm0-8q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Z"></path></svg>
            </div>

          </div>

        </nav>
      </header>
      {
        toggle&&
        <ResponsiveMenu toggleNav={toggleNav} toggle={toggle}/>
      }
    </>
  )
}

export default Navbar