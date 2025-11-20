"use client";

import { useState } from "react";
import Image from "next/image";
import { NavItems } from "@/utils/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="hidden sm:flex items-center gap-6">
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

    {/* mobile menu */}
      <div className="block md:hidden">
      <button>
     {menuOpen ? "" : ""}
      </button>
      </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
