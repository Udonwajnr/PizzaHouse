import React from 'react'
import Link from "next/link"
const Menu = () => {
  return (
    <section className=''>
        <div className='flex flex-col  items-center h-[30vh] '>
            <h2 className='text-4xl'>Our Menu</h2>
            <p className='text-xl font-bold my-5'>Quality Ingredients,Tasty Meals</p>
            <p className='text-sm text-center'>Indulge in out tantalizing menu featuring a symphony of flavours. From savory chicken strips to <br /> delightful kebabs. Our dishes promise a culinary journey that delight the senses.</p>
        </div>

        <div className='menu-bg py-5'>
            <div className='grid-menu justify-center items-center py-5 relative bottom-28'>
                <div className=' bg-white p-5 flex flex-col gap-y-5 items-center justify-center border-purple border h-full'>
                    <h3 className='text-2xl font-bold'>Chicken Wrap</h3>
                    <p className='text-center
                    '>Grilled or Fried chicken wrapped in a sort tortilla with fresh vegetable, sauce, and optional extras, creating a convenient and delicious meal</p>
                    <div className='border-t border-b border-black py-2'>
                        <span className='text-xl'>6.00 $</span>
                    </div>
                </div>

                <div>
                    <img src="pexels-saveurs-secretes-5987010.jpg" alt="img" className='w-[300px]'/>
                </div>

                <div className='bg-white p-5 flex flex-col gap-y-5 items-center justify-center border-purple border h-full'>
                    <h3 className='text-2xl font-bold'>Chicken Wrap</h3>
                    <p className='text-center'>Grilled or Fried chicken wrapped in a sort tortilla with fresh vegetable, sauce, and optional extras, creating a convenient and delicious meal</p>
                    <div className='border-t border-b border-black py-2'>
                        <span className='text-xl'>6.00 $</span>
                    </div>
                </div>

                <div>
                    <img src="max-griss-3a4gRjgdweQ-unsplash (1).jpg" alt="img" className=''/>
                </div>

                <div className='bg-white p-5 flex flex-col gap-y-5 items-center justify-center border-purple border h-full'>
                    <h3 className='text-2xl font-bold'>Chicken Wrap</h3>
                    <p className='text-center'>Grilled or Fried chicken wrapped in a sort tortilla with fresh vegetable, sauce, and optional extras, creating a convenient and delicious meal</p>
                    <div className='border-t border-b border-black py-2'>
                        <span className='text-xl'>6.00 $</span>
                    </div>
                </div>

                <div>
                    <img src="max-griss-3a4gRjgdweQ-unsplash (1).jpg" alt="img" className=''/>
                </div>

                <div className='bg-white p-5 flex flex-col gap-y-5 items-center justify-center border-purple border h-full'>
                    <h3 className='text-2xl font-bold'>Chicken Wrap</h3>
                    <p className='text-center'>Grilled or Fried chicken wrapped in a sort tortilla with fresh vegetable, sauce, and optional extras, creating a convenient and delicious meal</p>
                    <div className='border-t border-b py-2'>
                        <span className='text-xl'>6.00 $</span>
                    </div>
                </div>

                <div className=''>
                    <img src="ben-lei-flFd8L7_B3g-unsplash.jpg" alt="img" />
                </div>

                <div className='bg-white p-5 flex flex-col gap-y-5 items-center justify-center border-purple border h-full'>
                    <h3 className='text-2xl font-bold'>Pizza Kebab</h3>
                    <p className='text-center'>A pizza topped with kebab meat sauce and various toppings, combining the best of both worlds for a tasty and filling pizza experience</p>
                    <div className='border-t border-b py-2'>
                        <span className='text-xl'>7.50 $</span>
                    </div>
                </div>
            </div>
                <Link href={"/"} className=' m-auto flex items-center bg-purple w-[200px] justify-center text-white py-2 rounded-3xl mt-10'>
                    Discover more menu
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="white" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path></svg>
                </Link>
            </div>    
    </section>
  )
}

export default Menu