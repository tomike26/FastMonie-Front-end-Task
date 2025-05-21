"use client";
import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaSearch,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#2c2c2c] text-white font-sans">
      <nav className="max-w-[1920px] mx-auto flex items-center h-[100px] text-sm border-b border-white/30 px-4">
        <div className="h-full flex items-center pr-6 border-r border-white/60">
          <span className="text-[18px] font-semibold tracking-wide ml-4 md:ml-12">
            CreativeLogo
          </span>
        </div>

        <ul className="hidden md:flex items-center h-full ml-2 space-x-4">
          {["Home", "Services", "Pages", "Case Shop", "Blog", "Content"].map((item, i) => (
            <li
              key={i}
              className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium"
            >
              {item}
              {item === "Services" && (
                <span className="ml-1 text-xs">&#9662;</span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex-grow" />
        <div className="hidden md:flex items-center h-full">
          <div className="flex items-center space-x-4 px-6 h-full border-r border-white/60">
            <FaInstagram className="cursor-pointer hover:text-pink-400 text-2xl" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500 text-2xl" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 text-2xl" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700 text-2xl" />
          </div>

          <div className="flex items-center px-6 h-full border-r border-white/60">
            <FaSearch className="cursor-pointer hover:text-gray-300 text-2xl" />
          </div>

          {/* Help Info */}
          <div className="flex flex-col items-start text-[12px] font-semibold px-4">
            <p className="leading-3 mb-2">Need help?</p>
            <p className="text-white">+92 666 888 0000</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden pl-4 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#2c2c2c] px-6 py-4 space-y-4 text-sm uppercase font-semibold border-t border-white/20">
          <div className="space-y-2">
            {["Home", "Services", "Pages", "Case Shop", "Blog", "Content"].map((item) => (
              <p key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </p>
            ))}
          </div>

          <div className="flex gap-4 text-2xl pt-4 border-t border-white/20">
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaSearch className="cursor-pointer hover:text-gray-300" />
          </div>

          <div className="pt-4 text-xs font-semibold border-t border-white/20">
            <p className="leading-4">Need help?</p>
            <p className="text-white">+92 666 888 0000</p>
          </div>
        </div>
      )}
    </div>
  );
}
