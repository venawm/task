import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import Socials from "./Socials";

const HeaderTop = () => {
  return (
    <div className=" hidden bg-[#1D1D1D] px-12 lg:px-24 text-secondary py-2 font-medium md:flex items-center justify-between text-sm dark:bg-[#383838] dark:text-white">
      <div className="flex gap-4">
        <div className="flex gap-2 items-center">
          <FaPhoneAlt />
          +977 9802036470
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineMail />
          easyfruitsnepal@gmail.com
        </div>
        <div className="flex gap-2 items-center">
          <FaLocationDot />
          Kupondole, Lalitpur
        </div>
      </div>
      <Socials containerStyles="flex gap-4 text-xl" />
    </div>
  );
};

export default HeaderTop;
