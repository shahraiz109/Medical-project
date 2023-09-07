import React from 'react'
import picture from "../../assets/images/about.png"
import card from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

        {/* ABOUT img */}

        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 '>
   <img src={picture} alt="" />
   <div className='absolute z-20 bottom-5 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] mb-[300px] mt-[300px]'>
      <img  src={card} alt="" />

   </div>
        </div>
        {/* about content */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 '>
        <h2 className='mt-[10px] text-[44px]  leading-[54px] font-bold'>We feel proud that we have best doctors as compare all over the area around us.</h2>
        <p className="mt-[10px]">
          Here you can come for your treatment without  any hesitation.We will provide you better treatment.We are hiring <span className='font-bold bg-red-600'>200+</span> doctors in every year
        </p>
        <p className='mt-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quas dignissimos pariatur alias velit corrupti officiis dolorum omnis. Facilis veniam voluptate repellat placeat a inventore provident excepturi omnis consectetur? Veniam?</p>
        <p className='mt-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus, sint voluptatum nemo, amet culpa laboriosam minima voluptas fugit quasi labore saepe? Quibusdam, asperiores iste quaerat deserunt nam consequatur iusto?</p>
   <Link to="/">
   <button className='btn'>Learn More</button>
   </Link>
        </div>

        </div>
    </div>
   </section>
  )
}

export default About
