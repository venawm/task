"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";

// Components
import Logo from "./Logo";
import Nav from "./Nav";
import { MobileNav } from "./MobileNav";
import Stores from "./Stores";

const Header = () => {
  const [header, setHeader] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHeader(scrollPosition > 10); // Update header state based on scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? "fixed top-0 w-full py-4 bg-white dark:bg-accent animate-slideDown shadow-md stick z-50"
          : "py-6 dark:bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between animate-fadeIn">
          <div className="flex items-center gap-8 animate-slideInLeft">
            <Logo />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>

          <div className="flex items-center gap-x-6 animate-slideInRight">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
          </div>
          <div className="flex items-center gap-8">
            <Stores />
            <div className="hidden md:flex">{/* <ThemeToggler /> */}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
