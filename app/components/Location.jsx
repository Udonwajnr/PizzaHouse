import React from 'react'
import Link from "next/link"
const Location = () => {
  return (
    <section className='bg-[#eee8f7] h-[40vh] flex justify-center items-center flex-col'>
        <div>   
            <h3 className='text-2xl text-center'>Our Location</h3>
            <span className=''>Via Eleonora Duse,11\E - Bologna,Italy</span>
        </div>
            <hr className='border border-black  w-[800px] my-9'/>
        <div className='text-center flex flex-col'>
            <h3 className='text-2xl mb-8'>Contact Us</h3>
            <span>0516331761</span>
            <span>0516331761</span>
            <span>34962092(vodafone)</span>
            <span>34962092(vodafone)</span>
        </div>        

        <div>
            <h3>Reach Us At</h3>
            <Link href={""}></Link>
        </div>
    </section>
  )
}

export default Location