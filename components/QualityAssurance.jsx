import React from "react";
import OrangeHeading from "./OrangeHeading";
import Image from "next/image";

const QualityAssurance = () => {
  return (
    <div className="bg-qa px-12 xl:px-24 py-8 bg-cover">
      <div>
        <OrangeHeading text="Quality Assurance" />
        <h1 className="h1 text-center">Quality Assurance</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col max-w-[300px] text-right">
              <h2 className="h4">Assured Hygiene</h2>
              <p className="text-[#7A7B78]">
                Our top quality ozonisation machine, automatic peeling machines
                and top quality chilling and packaging facility assures top in
                class hygiene that you can be assured.
              </p>
            </div>
            <div>
              <Image src="/icons/accept.png" width={44} height={44} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col max-w-[300px] text-right">
              <h2 className="h4">Eco Friendly Commitment</h2>
              <p className="text-[#7A7B78]">
                Our top quality ozonisation machine, automatic peeling machines
                and top quality chilling and packaging facility assures top in
                class hygiene that you can be assured.
              </p>
            </div>
            <div>
              <Image src="/icons/environmentalism.png" width={44} height={44} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col max-w-[300px] text-right">
              <h2 className="h4">Nutrition and Wellness </h2>
              <p className="text-[#7A7B78]">
                Our top quality ozonisation machine, automatic peeling machines
                and top quality chilling and packaging facility assures top in
                class hygiene that you can be assured.
              </p>
            </div>
            <div>
              <Image src="/icons/nutrient.png" width={44} height={44} />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/animation/Orange.png"}
            width={400}
            height={400}
            className=" animate-slow-bounce"
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div>
                <Image src="/icons/accept.png" width={44} height={44} />
              </div>
              <div className="flex flex-col max-w-[300px] text-left">
                <h2 className="h4">Assured Hygiene</h2>
                <p className="text-[#7A7B78]">
                  Our top quality ozonisation machine, automatic peeling
                  machines and top quality chilling and packaging facility
                  assures top in class hygiene that you can be assured.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src="/icons/environmentalism.png"
                  width={44}
                  height={44}
                />
              </div>
              <div className="flex flex-col max-w-[300px] text-left">
                <h2 className="h4">Eco Friendly Commitment</h2>
                <p className="text-[#7A7B78]">
                  Our top quality ozonisation machine, automatic peeling
                  machines and top quality chilling and packaging facility
                  assures top in class hygiene that you can be assured.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Image src="/icons/nutrient.png" width={44} height={44} />
              </div>
              <div className="flex flex-col max-w-[300px] text-left">
                <h2 className="h4">Nutrition and Wellness </h2>
                <p className="text-[#7A7B78]">
                  Our top quality ozonisation machine, automatic peeling
                  machines and top quality chilling and packaging facility
                  assures top in class hygiene that you can be assured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
