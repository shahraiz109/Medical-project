import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ item, index }) => {
  const { name, desc, textColor, bgColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-black font-[700]">{name}</h2>
      <p className="text-[16px] leading-7 font-[400] text-blue-600 mt-4">{desc}</p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctor"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto justify-center flex items-center group hover:bg-blue-600 hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5 rounded-full" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: '6px 0 0 6px',
          }}
        ></span>
      </div>
    </div>
  );
};

export default ServiceCard;
