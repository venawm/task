"use client";

import React, { useState } from "react";

import ProductCard from "./ProductCard";
import OrangeHeading from "./OrangeHeading";
import { Button } from "./ui/button";

const productData = [
  {
    image: "/product/product-1.png",
    title: "Daily Essential Bowl (Basic)",
  },
  {
    image: "/product/product-2.png",
    title: "Daily Essential Bowl",
  },
  {
    image: "/product/product-3.png",
    title: "Daily Essential Bowl (Basic)",
  },
  {
    image: "/product/product-1.png",
    title: "Daily  Bowl (Basic)",
  },
  {
    image: "/product/product-2.png",
    title: "Daily Essential Bowl (Basic)",
  },
  {
    image: "/product/product-3.png",
    title: "Daily Essential Bowl (Basic)",
  },
  {
    image: "/product/product-1.png",
    title: "Daily Essential Bowl (Basic)",
  },
  {
    image: "/product/product-2.png",
    title: "Daily Essential Bowl (Basic)",
  },
  {
    image: "/product/product-3.png",
    title: " Bowl (Basic)",
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const data = () => {
    const start = currentPage * itemsPerPage;
    return productData.slice(start, start + itemsPerPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-12 xl:px-24 pt-24">
      <OrangeHeading text={"FRUITS GOT EASY"} />
      <h1 className="h1 text-center">Our Products</h1>
      <div className="flex flex-wrap gap-8 justify-center ">
        {data().map((item, index) => {
          return (
            <div key={index}>
              <ProductCard image={item.image} name={item.title} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8 py-4">
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`px-2 py-2 mx-2 bg-green-600 ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          } hover:bg-green-400 rounded-full`}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 mx-2 rounded-full ${
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Products;
