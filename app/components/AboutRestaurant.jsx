import React from 'react'

const AboutRestaurant = () => {
  return (
    <section className='p-20'>
        <div className='flex gap-x-6 items-center'>
            <div>
                <div className='pr-10'>
                    <article className='flex flex-col gap-y-8 text-[#a19cab]'>
                        <h3 className='text-4xl text-black'>Our Restaurant Is A Collection Of Amazing People Striving To Build Delightful Fusion Cuisine.</h3>
                        <p>
                            Welcome to Pizza House a gastronomic haven born out of a shared love for exceptional food and warm hospitality. Nestled in the hear of your location.Our culinary journey began with a simple yet profound idea to create an inviting space where flavors tell a story. 
                        </p>
                        <p>
                            At Pizz house, we believe in the artistry of foodOur chefs's fueled by passion,meticulously curate each dish, blending innovation with tradition. From farm-fresh produce to premium cut of meet. We source the finest ingredients to ensure a dining experience that transcends the ordinary.
                        </p>
                        <p>Beyond the delectable creations,our commitment extends to building connections whether you're here for a cozy family dinner, a celebration with friends or a solo culinary adventure we strive to make every moment special.the warmth of our ambiance mirrors the dedication we pour into our recipes.</p>
                        <p>more than just a restaurant, we are a community of food enthusiasts who appreciate the harmony of taste and joy of share moments.Join us on ths flavorful expedition, where each bite is a chapter, and every visit is a celebration of good food and great company.</p>
                        <p>
                            thank you for choosing Pizza House - where every meal is a master piece and every guest is a cherished part of our story
                        </p>
                    </article>
                </div>
            </div>

            <div className='grid gap-4 about-img-grid'>
                <img src="vadim-markin-Dn82UF7qsso-unsplash.jpg" alt="" className='rounded-3xl row-span-2 justify-self-center self-center'/>
                <img src="foad-roshan-Y6OgisiGBjM-unsplash.jpg" alt="" className='rounded-3xl' />
                <img src="amirali-mirhashemian-sc5sTPMrVfk-unsplash (1).jpg" alt="" className='rounded-3xl' />
            </div>

        </div>
    </section>
  )
}

export default AboutRestaurant