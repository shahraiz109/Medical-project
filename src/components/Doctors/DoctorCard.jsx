import React from 'react'
import { doctors } from '../../assets/data/doctors'
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"

const DoctorCard = ({doctor}) => {

  const {
     name ,
    specialization ,
    avgRating ,
    totalRating ,
    photo ,
    totalPatients ,
    hospital
   } = doctor

  return (
    <div className='p-3 lg:p-5'>
    <div>
      <img src={photo} className='w-full ' alt="" />
    </div>
    <h2 className='text-[18px] leading-[30px] lg:text-[26] lg:leading-9 text-black font-[700] mt-3 lg:mt-5'>
        {name}
    </h2>
    <div className='mt-2 lg:mt-4 flex items-center justify-between'>
    <span className='bg-[#CCF0F3] text-blue-600 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
           {specialization}
    </span>

    </div>
    <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
    <div>
      <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-black '>+{totalPatients} Patients</h3>

      <p className='text-[14px] leading-6 font-[400] text-gray-950'>At {hospital}</p>
    </div>


        <Link
          to="/doctor/1" className='w-[44px] h-[44px] rounded-full boeder border-solid border-[#181A1E]  justify-center flex items-center group hover:bg-blue-600 hover:border-none'
        >
          <BsArrowRight className='group-hover:text-white w-6 h-5 rounded-full ' />
        </Link>

    </div>
      
    </div>
  )
}

export default DoctorCard
