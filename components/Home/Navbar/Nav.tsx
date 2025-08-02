"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLinks } from "@/constant/constant";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        mass: 0.5,
        damping: 15,
        stiffness: 70,
        delay: 0.1,
      }}
      className={`transition-all duration-200 h-[12vh] z-[10000] fixed w-full ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            LAMA
          </h1>
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="group relative text-base text-white font-medium transition-all duration-200"
              >
                <p>
                  {link.label}
                  <span className="block absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full origin-right" />
                </p>
              </Link>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="/Lama Alshaikh Ali CV ATS.pdf"
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-900
             transition-all duration-300 text-white flex items-center space-x-2"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
