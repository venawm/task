"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { path: "/", name: "Home" },
  { path: "/", name: "About Us" },
  { path: "/", name: "Nutritional Information" },
  { path: "/", name: "Blogs" },
  { path: "/", name: "Corporate" },
  { path: "/", name: "Contact Us" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const path = usePathname();
  console.log(path);
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles} font-semibold hover:text-[#62A403]`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
