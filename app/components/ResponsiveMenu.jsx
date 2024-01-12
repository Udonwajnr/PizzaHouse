import React from 'react'
import Link from 'next/link'

const ResponsiveMenu = ({toggleNav}) => {
  
  return (
    <header className='w-full h-screen fixed z-20 top-0 responsive-menu  justify-end hidden md:flex'>
      <nav className='flex gap-y-5 flex-col justify-between w-full max-w-[300px] bg-white h-screen py-10 px-4'>
        
          <div className='absolute right-4 top-2 cursor-pointer' onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>
            </div>
        
        <div className='flex flex-col gap-y-5 items-start'>
          <ul className='flex gap-y-5 flex-col '>
            <li>
              <Link href="/" className='hover:text-purple hover:duration-200 duration-200 transition text-sm'>Home</Link>
            </li>

            <li>
              <Link href="/menu" className='hover:text-purple hover:duration-200 duration-200 transition text-sm'>Menu</Link>
            </li>

            <li>
              <Link href="/about" className='hover:text-purple hover:duration-200 duration-200 transition text-sm'>About Us</Link>
            </li>

            <li>
              <Link href="/contact" className='hover:text-purple hover:duration-200 duration-200 transition text-sm'>Contact Us</Link>
            </li>
          </ul>

          <div className='flex items-center gap-x-3 '>
            <span className='md:hidden text-lg'>$0.00</span>
            <div className='relative md:flex'>
              <Link href={'/cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#8f43f1" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775T15.55 13H8.1L7 15h11.025q.425 0 .7.288T19 16q0 .425-.288.713T18 17H7Z"></path></svg>
              </Link>
              <div className='absolute  z-20 -top-2 -right-3 bg-purple  w-5 h-5 flex justify-center items-center rounded-full'>
                <span className='text-white text-xs'>0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default ResponsiveMenu