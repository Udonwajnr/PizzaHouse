import React from 'react'

const Hero = () => {
  return (
    <div className='hero flex justify-center items-center h-[90vh] md:h-[75vh]'>
      <div className='flex flex-col gap-y-10'>
        {/* <div>
            <img src="download.png" alt="" className='' />
        </div> */}
        <h2 className='text-3xl text-white text-[100px] text-center md:text-[40px]'>Pizza House</h2>
        <span className='text-xl text-purple text-center font-bold'>Italian Specialties</span>

        {/* <div className='flex items-center gap-x-10'>
            <hr className='w-36 border-white border'/>
                <span className="text-white text-lg">Good Food | Good Pizza</span>
            <hr className='w-36 border-white border'/>
        </div> */}
      </div>
    </div>
  )
}

export default Hero