import React from "react";
import { FaRegCircle } from "react-icons/fa";
const OrangeHeading = ({ text }) => {
  return (
    <div className="flex items-center justify-center text-[10px] text-primary gap-4">
      <div className="flex gap-2">
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </div>
      <p className=" font-bold text-[14px]">{text}</p>
      <div className="flex gap-2">
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </div>
    </div>
  );
};

export default OrangeHeading;
