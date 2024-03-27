import React from "react";
import Carousel from "./CarouselComponent";
import { FaStar } from "react-icons/fa6";
import profile from "../../assets/images/profile.png";
import profile2 from "../../assets/images/profile2.jpg";

const Slide = () => {
  const slides = [
    <div className="mt-[200px] h-full flex flex-col justify-center items-center text-white">
      {/* <h1 className="text-white text-3xl font-bold">Slide 1</h1> */}
      <div>
        <img src={profile} width={120} alt="" />
      </div>
      <div className="mx-5 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold ">Adam Chen</p>
        <p className="text-sm">Analyst</p>
        <div className="flex">
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
        </div>
      </div>
      <div className="w-[40%] py-5">
        <p>
          “ PrimeCRM Is The Most Intuitive And Modern Live Chat We Found. Live
          Chat Obviously Made{" "}
          <span className="font-bold text-[#47CFFF]">Our Users Happier</span>{" "}
          And Our Service Department More Efficient
        </p>
      </div>
    </div>,
    <div className="mt-[200px] h-full flex flex-col justify-center items-center text-white">
      {/* <h1 className="text-white text-3xl font-bold">Slide 1</h1> */}
      <div>
        <img className="rounded-full" src={profile2} width={120} alt="" />
      </div>
      <div className="mx-5 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold ">Rased</p>
        <p className="text-sm">Developer</p>
        <div className="flex">
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
          <FaStar color="#FFB545" size={20} className="mx-1" />
        </div>
      </div>
      <div className="w-[40%] py-5">
        <p>
          “The Most Intuitive And Modern Live Chat We Found. Live Chat Obviously
          Made{" "}
          <span className="font-bold text-[#47CFFF]">Our Users Happier</span>{" "}
          And Our Service Department More Efficient
        </p>
      </div>
    </div>,
  ];
  return (
    <div className="flex justify-center">
      <div className="container mx-auto my-8 bg-[#303030]">
        {/* <h1 className="text-4xl font-bold text-center mb-8">Tailwind Carousel</h1> */}
        <div className="p-5 ">
          <Carousel slides={slides} />
        </div>
        <div>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
          <p>more text</p>
        </div>
        <div className="flex justify-center">
          <div className="w-[80%] border-t">
            <div className="text-white flex justify-around items-center py-5">
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">
                  4.9<span>/</span>5
                </h1>
                <p>User Rating</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">
                  350<span>K</span>+
                </h1>
                <p>Customers</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">
                  99<span>+</span>
                </h1>
                <p>Team Members</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">
                  41<span>M</span>
                </h1>
                <p>Current Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
