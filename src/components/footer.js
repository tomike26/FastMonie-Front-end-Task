

"use client"
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {

  return (
    <>
      <footer className="bg-[#0b0c23] text-white px-6 pt-30 pb-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-8">CreativeLogo</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 border-b pb-4">
              Welcome to our consultancy agency. Lorem ipsum simply text amet cing elit simply text amet cing elit.
            </p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Image
                  src="/images/footer-phone.png"
                  width={20}
                  height={20}
                  alt="Phone icon"
                  className="text-blue-400"
                />
                <span>+92 666 888 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/images/footer-phone.png"
                  width={20}
                  height={20}
                  alt="Phone icon"
                  className="text-blue-400"
                />
                <span>needhelp@company.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/images/footer-phone.png"
                  width={20}
                  height={20}
                  alt="Phone icon"
                  className="text-blue-400"
                />
                <span>66 Broklyn Street New York, USA</span>
              </li>

            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">EXPLORE</h4>
              <ul className="space-y-6 text-gray-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Meet our Team</a></li>
                <li><a href="#">Case studies</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="invisible mb-3">Hidden</h4> {/* spacer */}
              <ul className="space-y-6 text-gray-400">
                <li><a href="#">Support</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8">NEWSLETTER</h4>
            <div className="bg-black p-12 rounded-md">
              <p className="text-sm mb-4 text-gray-300">Subscribe for latest articles and resources</p>

              <form className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 pr-28 bg-white text-black text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-600 px-4 py-2 text-sm text-white  hover:bg-blue-700"
                >
                  REGISTER
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
          <p>© Copyright 2021 by Company</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <FaInstagram className="text-white text-2xl cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="text-white text-2xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-white text-2xl cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="text-white text-2xl cursor-pointer hover:text-blue-700" />
            <FaSearch className="text-white text-2xl cursor-pointer hover:text-gray-300" />

          </div>
        </div>
      </footer>


    </>
  );
}