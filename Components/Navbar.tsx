"use client";

import { useState } from "react";
import Image from "next/image";
import { NavItems } from "@/utils/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Menu, X} from "lucide-react"

const Navbar = () => {
  const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);
const [active, setActive] = useState("home");

const toggleMenu = () => {
    setMenuOpen(!menuOpen)
}

  return (
    <nav className="flex items-center justify-between bg-white text-black py-4 px-16">
      {/* logo */}
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <h1 className="text-lg font-semibold">Trendify</h1>
      </div>

      {/* menu */}
      <div className="hidden md:flex items-center gap-6">
        {NavItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className="relative overflow-hidden h-6 group"
            >
              {/* Text Animation */}
              <span
                className={`block transition-transform duration-300 ${
                  isActive ? "-translate-y-full" : "group-hover:-translate-y-full"
                }`}
              >
                {item.name}
              </span>

              <span
                className={`block absolute top-full left-0 transition-transform duration-300 ${
                  isActive ? "-translate-y-full" : "group-hover:-translate-y-full"
                }`}
              >
                {item.name}
              </span>

              {/* underline */}
              <span
                className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-l from-pink-600 to-purple-600"
                      : "bg-transparent group-hover:bg-red-400"
                  }
                `}
              ></span>
            </Link>
          );
        })}
   </div>

   {/* mobile menu */}
      <div className="block sm:hidden" onClick={toggleMenu}>
      <button >
     {menuOpen ? <X size={24}/> : <Menu size={24}/>}
      </button>
      </div>
 
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[#0f0f11] text-white p-6 flex flex-col justify-between 
      transform transition-transform duration-300
      ${menuOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      {/* Close Button */}
      <button className="mb-6" onClick={toggleMenu}>
        <X size={26} className="text-gray-300 hover:text-white" />
      </button>

      {/* Menu */}
      <div className="flex flex-col gap-3">
        {NavItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
              ${
                active === item.name
                  ? "bg-gradient-to-r from-orange-500 to-orange-600"
                  : "text-gray-300 hover:bg-[#1a1a1c]"
              }
            `}
          >
           
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col gap-2">
        
        <button className="w-full py-2 bg-[#1a1a1c] text-orange-400 rounded-lg">
          Log In
        </button>
        <button className="w-full py-2 bg-orange-500 rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
   
     

    </nav>
  );
};

export default Navbar;
