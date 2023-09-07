import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"
import hero from "../assets/images/hero-img01.png"
import hero2 from "../assets/images/hero-img02.png"
import hero3 from "../assets/images/hero-img03.png"
import icon1 from "../assets/images/icon01.png"
import icon2 from "../assets/images/icon02.png"
import icon3 from "../assets/images/icon03.png"
import vidi from "../assets/images/video-icon.png"
import feature from "../assets/images/feature-img.png"
import avatar from "../assets/images/avatar-icon.png"
import faq from "../assets/images/faq-img.png"
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'

const Home = () => {
  return (
   <>
    {/* hero section */}
    
      <section
      className='hero__section pt-[60px] 2xl:h-[80px]'
      >
      <div className="container">
        <div className='flex flec-col lg:flex-row gap-[90px] items-center justify-between'>
        {/* hero content */}
        <div>
          <div className='lg:w-[570px]'>
          <h1 className='text-[36px] leading-[46px] text-black font-semibold  font-[200px] md:text-[60px] md:leading-[70px]'>We help patient to live healthy and survive better and long life</h1>
          <p className='mt-[5px]'>
          Being doctors our first priority is to protect everyone from disease,It is not only the part of our duty its our aim as  doctors .We advise people to protect yourself from disese as you can. 
          </p>
          <button className='btn'>Reaquest an Appointment</button>

          </div>
          {/* hero counter */}
    <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
    <div>
      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black'>50+</h2>
      <span className='w-[100px] h-2 bg-orange-500 rounded-full block mt-[-14px] '></span>
      <p className='mt-[10px]'>Years of Experience</p>
    </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black'>25+</h2>
                    <span className='w-[100px] h-2 bg-pink-500 rounded-full block mt-[-14px] '></span>
                    <p className='mt-[10px]'>Client location</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black'>100%</h2>
                    <span className='w-[100px] h-2 bg-blue-600  rounded-full block mt-[-14px] '></span>
                    <p className='mt-[10px]'>Patient Satisfection</p>
                  </div>

    </div>
        
        </div>

        {/* hero contents */}
        <div className='flex gap-[30px] justify-end'>
          <div>
   <img className='w-full' src={hero} alt="" />
          </div>
          <div>
            <img className='w-full mb-[30px]' src={hero2} alt="" />
            <img className='w-full' src={hero3} alt="" />
          </div>
        </div>

        </div>
      </div>

      </section>
      {/* hero section end */}

    <section>
      <div className="container">
          <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Providing best medical services</h2>

          <p className='mt-[10px] text-center font-siz-[20px]'>We are providing best services all over te World.There is no  in institution in our compitition</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-g lg:gap-[30px] lg:mt-[55px]'>
        <div className='py-[30px] px-5'>
        <div className='flex items-center justify-center'>
        <img src={icon1} alt="" />
        </div>

        <div className='mt-[30px]'>
   <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>Find a doctor here</h2>
   <p className='text-center'>There are Wordclass and very experienced and skill having doctor are working on our institution.We will provide you with better treatment</p>
          
             <Link
             to="/doctor" className='w-[44px] h-[44px] rounded-full boeder border-solid border-[#181A1E] mt-[30px] mx-auto justify-center flex items-center group hover:bg-blue-600 hover:border-none'
             >
        <BsArrowRight className='group-hover:text-white w-6 h-5 rounded-full '/>
             </Link>

        </div>

        </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon2} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>Find Location</h2>
                <p className='text-center'>There are Wordclass and very experienced and skill having doctor are working on our institution.We will provide you with better treatment</p>

                <Link
                  to="/doctor" className='w-[44px] h-[44px] rounded-full boeder border-solid border-[#181A1E] mt-[30px] mx-auto justify-center flex items-center group hover:bg-blue-600 hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5 rounded-full ' />
                </Link>

              </div>

            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon3} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>Book Appointment</h2>
                <p className='text-center'>There are Wordclass and very experienced and skill having doctor are working on our institution.We will provide you with better treatment</p>

                <Link
                  to="/doctor" className='w-[44px] h-[44px] rounded-full boeder border-solid border-[#181A1E] mt-[30px] mx-auto justify-center flex items-center group hover:bg-blue-600 hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5 rounded-full ' />
                </Link>

              </div>

            </div>

        </div>
      </div>
    </section>

    <About/>

    {/* services section  */}
    <section>
      <div className="container">
        <div className='xl:w-470px] mx-auto'>
            <h2 className='text-[44px] leading-[54px] font-[700] text-center'>
     Our Medical Services
        </h2>
        <p className='mt-[20px] text-center'>
    There is unmatced care with us in our area so, come to us we feel proud
        </p>

        </div>
        <ServiceList/>
      </div>
    </section>

{/* feature section */}

   <section>
    <div className="container">
      <div className='flex items-center justify-between flex-col lg:flex-row'>

      {/* feature content */}
      <div className='xl:w-[670px]'>
              <h2 className='text-[44px] leading-[54px] font-[700]'>
  Get better treatment <br /> anytime.
   </h2>
   <ul className='pl-4'>
<li className='mt-[10px]'>
  1. Schedule the Appointment directly
</li>
                <li className='mt-[10px]'>
                  2. Search your physician here and contact in office
                </li>
                <li className='mt-[10px]'>
                  3. Home facilities are also available
                </li>
   </ul>
   <Link to="/">
<button className='btn'>Learn More</button>
   </Link>
      </div>
      {/* feature image  */}
      <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
   <img src={feature} className='w-3/4' alt="" />

   <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
   <div className="flex items-center justify-between">
    <div className="flex items-center gap-[6px] lg:gap-3">
      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[600] text-black'>
    Tue, 24
      </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[400] text-black'>
                     10:00AM
                    </p>
    </div>
    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-600 rounded py-1 px-[6px] lg:py-3 lg:px-9'>
    <img src={vidi} alt="" />

    </span>
   </div>

   <div className='w-[65px] lg:w-[95px] bg-[#CCF0F3] py-1 px-2 lg:py-6 lg:px-10 text-[8px] leading-[8px] lg:text[12px] lg:leading-3 text-blue-700 font-[500] mt-2 lg:mt-4 rounded-full'>
      Consulation
   </div>

   <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
      <img src={avatar} alt="" />
      <h4 className=' text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] '>
        Mitchel Satener
      </h4>
   </div>

   </div>
      </div>
      </div>

      <DoctorList/>
    </div>
   </section>

   {/*our doctors */}
   <section>
    <div className="container">
          <div className='xl:w-470px] mx-auto'>
            <h2 className='text-[44px] leading-[54px] font-[700] text-center'>
              Our great doctors
            </h2>
            <p className='mt-[20px] text-center'>
              There is unmatced care with us in our area so, come to us we feel proud
            </p>

          </div>
    </div>
   </section>

   {/* faq section  */}

   <section>
    <div className="container">
      <div className='flex justify-between gap-[50px] lg:gap-0'>
      <div className='w-1/2 hidden md:block'>
      <img src={faq} alt="" />

      </div>

      <div className='w-full md:w-1/2'>
              <h2 className='text-[44px] leading-[54px] font-[700]'>
         Common questions asked by our regular patients
      </h2>
      <FaqList/>

      </div>

      </div>
    </div>
   </section>

    </>
   
  )
}

export default Home
