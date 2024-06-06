import React from "react";
import OrangeHeading from "./OrangeHeading";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const Experts = () => {
  return (
    <div className=" px-12 xl:px-24 py-12">
      <OrangeHeading text="Deitician" />
      <h1 className="h1 text-center">Meet Our Expert</h1>
      <div>
        <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5 hover:scale-105 duration-500 hover:shadow-xl">
          <Image
            class=" rounded-full mx-auto"
            src="/Expert.png"
            width={180}
            height={180}
            alt="Profile picture"
          />
          <h2 class="text-center text-2xl font-semibold mt-3 text-primary">
            Rashmi Bajimaya Shrestha
          </h2>
          <p class="text-center text-gray-600 mt-1 text-xl font-semibold">
            Master in Food and nutrition
          </p>

          <div class="mt-5">
            <p class="text-gray-600 mt-2 text-left flex gap-2">
              <FaQuoteLeft className="text-primary" />
              Incorporating fruits in your daily diet is a simple path towards a
              healthy lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
