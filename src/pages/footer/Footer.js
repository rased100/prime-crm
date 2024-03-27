import React from "react";
import footerlogo from "../../assets/images/footer/Logo.png";
import footerimg from "../../assets/images/footer/image.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import "./foote.css";

const Footer = () => {
  return (
    <footer className="bg-[#303030] text-white rounded-lg shadow m-4 dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={footerlogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PrimeCRM
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
            <li className="cursor-pointer mx-3">
              <FaInstagram />
            </li>
            <li className="cursor-pointer mx-3">
              <FaFacebook />
            </li>
            <li className="cursor-pointer mx-3">
              <FaTwitter />
            </li>
            <li className="cursor-pointer mx-3">
              <FaLinkedin />
            </li>
            <li className="cursor-pointer mx-3">
              <FaYoutube />
            </li>
          </ul>
        </div>
        {/* items 1 */}
        <div className="flex border-y border-gray-600 p-2 mt-10 mb-5">
          <div className="w-[20%]">
            <p className="text-xl">Usefull Link</p>
          </div>
          <div className="w-[20%]  ml-2">
            <p className="text-xl">Service</p>
          </div>
          <div className="w-[20%]  ml-2">
            <p className="text-xl">Contact Us</p>
          </div>
          <div className="w-[40%]  ml-2">
            <p className="text-xl">Our Latest News</p>
          </div>
        </div>
        {/* items 2 */}
        <div className="flex">
          <div className="w-[20%]">
            <p className="py-1">Solution</p>
            <p className="py-1">Industries</p>
            <p className="py-1">Products</p>
            <p className="py-1">Resources</p>
            <p className="py-1">Pricing</p>
          </div>
          <div className="w-[20%]  ml-2">
            <p className="py-1">Sale</p>
            <p className="py-1">Marketing</p>
            <p className="py-1">Real Estate</p>
            <p className="py-1">Autimotive</p>
            <p className="py-1">Education</p>
          </div>
          <div className="w-[20%]  ml-2">
            <div className="my-2 p-4 border border-gray-500 rounded-2xl">
              <p>1700 W Blancke St, kiyev </p>
              <p>port south USA, American</p>
            </div>
            <div className="my-2 p-4 border border-gray-500 rounded-2xl">
              <p>+3255 456 789 </p>
              <p>mail@primarily.com</p>
            </div>
          </div>
          <div className="w-[40%]  ml-5 footer-container flex items-center justify-center">
            {/* <img src={footerimg} alt="" /> */}
            <button
              type="button"
              className="btncolor text-black hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[20px] px-8 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Read Now
            </button>
          </div>
        </div>
        {/* items end */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center dark:text-gray-400">
          <p>Copyright © Primarly | Designed by VictorFlow Templates </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
