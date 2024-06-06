import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" py-6 bg-footer bg-cover">
      <div className="flex justify-between border-b-2 border-[#282828] px-12 xl:px-24 py-4">
        <Logo />
        <Socials
          containerStyles="text-3xl  flex gap-4"
          iconStyles="p-2 bg-white rounded-full"
        />
      </div>
      <div className="px-12 xl:px-24 py-4 flex justify-evelnly items-start flex-wrap">
        <div className="flex flex-col gap-4 border-r-2 border-[#282828] w-[500px]">
          <p className="text-white text-xl underline font-bold">Quick Links</p>
          <ul className="text-[#504F4F] text-md font-semibold flex flex-col gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Corporate</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>{" "}
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-12 border-r-2 border-[#282828]  w-[400px]">
          <p className="text-white text-xl underline font-bold">Information</p>
          <ul className="text-[#504F4F] text-md font-semibold flex flex-col gap-4">
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Terms and Condition</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-12 ">
          <p className="text-white text-xl underline font-bold">Contact Us</p>
          <ul className="text-[#504F4F] text-md font-semibold flex flex-col gap-4">
            <li>
              <p className="text-white">
                Address:{" "}
                <span className="text-[#504F4F]">Kupondole,Lalitpur</span>
              </p>
            </li>
            <p className="text-white">
              Email:{" "}
              <span className="text-[#504F4F]"> easyfruitsnepal@gmail.com</span>
            </p>
            <p className="text-white">
              Phone: <span className="text-[#504F4F]">+977 9802036470</span>
            </p>
            <p className="text-white">Payment Accepted</p>
          </ul>
          <div className="flex gap-6 items-center">
            <Image src="/payment/esewa.png" width={100} height={100} />
            <Image src="/payment/khalti.png" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className=" border-b border-[#282828]"></div>
      <div className="px-12 xl:px-24 py-4 flex justify-between">
        <p className="text-[#504F4F] font-semibold">
          Copyright © 2023{" "}
          <span className=" text-[#5E9D03]">Easy Fruits Pvt. Ltd..</span> All
          rights reserved.
        </p>
        <div className=" font-semibold flex gap-4">
          <span className=" text-[#5E9D03]">Kupondole, Lalitpur</span>
          <p className="text-[#504F4F] font-semibold border-x px-4 border-[#282828]">
            easyfruitsnepal@gmail.com
          </p>
          <p className="text-[#504F4F] font-semibold">+977 9802036470</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
