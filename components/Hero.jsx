import React from "react";
import AnimatedText from "./AnimatedText";
import DrawOutlineButton from "./ui/OutlineButton";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" px-4 lg:px-24 text-center md:text-left md:bg-hero bg-no-repeat bg-cover py-32">
      <div className="md:w-[500px] xl:w-full">
        <h1 className="h1">Your healthy eating partner</h1>
        <AnimatedText />
        <p className="w-auto sm:w-[750px] text-slate-500 mt-4">
          The hassle free way to enjoy fresh, cut fruits delivered straight to
          your doorstep. With our convenient subscription service, you will
          never have to worry about running out of your favorite fruits again.
          Simply choose the subscription plan that works for you
        </p>
        <div className="mt-8"></div>
        <DrawOutlineButton text="Learn More">
          <FaLongArrowAltRight />
        </DrawOutlineButton>
      </div>
    </div>
  );
};

export default Hero;
