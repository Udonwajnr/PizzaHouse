import React from 'react'

const Amenities = () => {
  return (
    <div className='h-[25vh] bg-[#ede7f7] py-10'>
        <h2 className='text-4xl text-center'>Restaurant Amenities</h2>
        <div className='flex items-center justify-center mt-20 gap-x-5'>
            <div className='flex  items-center gap-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#8b3ef0" d="m1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3l3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg>
                <span className='text-xl'>Free WIFI</span>
            </div>
            <div className='flex  items-center gap-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="#8b3ef0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path><path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path></g></svg>
                <span className='text-xl'>Delivery</span>
            </div>
            <div className='flex  items-center gap-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#8b3ef0" d="M5.23 18v1.5q0 .213-.143.356T4.731 20H4.5q-.213 0-.356-.144T4 19.5v-7.346L5.985 6.5q.073-.238.281-.37q.209-.13.465-.13h3.192V4.462h4.23V6h3.193q.227 0 .412.138q.186.137.257.362L20 12.154V19.5q0 .213-.144.356T19.5 20h-.23q-.213 0-.357-.144t-.144-.356V18H5.231Zm.185-6.846h13.17L17.112 7H6.888l-1.473 4.154Zm2.013 4.538q.466 0 .788-.326q.322-.327.322-.794t-.326-.788q-.327-.322-.793-.322t-.79.326q-.321.327-.321.793t.326.79q.327.321.794.321Zm9.153 0q.467 0 .79-.326q.321-.327.321-.794t-.326-.788q-.327-.322-.794-.322t-.788.326q-.322.327-.322.793t.326.79q.327.321.793.321Z"></path></svg>
                <span className='text-xl'>Parking</span>
            </div>
        </div>

    </div>
  )
}

export default Amenities