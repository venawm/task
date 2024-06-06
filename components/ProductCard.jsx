import Image from "next/image";
import React from "react";

const ProductCard = ({ image, name }) => {
  return (
    <div className="shadow-sm rounded-md h-[22rem] ">
      <div className="overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className=" rounded-t-md hover:scale-110 duration-500"
        />
      </div>
      <div className="p-4">
        <p className=" text-2xl font-bold text-black bg-zinc-00">{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
