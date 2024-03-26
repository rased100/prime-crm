import React from "react";
import CustomButton from "../../components/CustomButton";
import leftimg from "../../assets/images/Group.png";
import rightimg from "../../assets/images/Group2.png";
import springimg from "../../assets/images/spring.png";
import chart1 from "../../assets/images/chart/a1.png";
import chart2 from "../../assets/images/chart/a2.png";
import chart3 from "../../assets/images/chart/a3.png";
import chart4 from "../../assets/images/chart/a4.png";
import chart5 from "../../assets/images/chart/a5.png";
import { FaStar } from "react-icons/fa6";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container  flex items-center justify-center">
      <div className="flex items-center  w-full max-w-screen-xl">
        <div className="w-full lg:w-1/2 pl-10">
          {/* Left side content */}
          <div className="text-[#303030] mt-32 lg:mt-0">
            <div>
              <h1 className="text-2xl text-[40px] md:text-[45px] lg:text-[40px] xl:text-[50px] font-semibold text-center lg:text-left leading-relaxed lg:leading-10">
                The CRM Platform <br /> Your Whole Business <br /> Will Love
              </h1>
            </div>
            <div>
              <p className="mt-8 text-md lg:text-lg mb-2 text-center lg:text-left">
                Provide excellent customer service. Answer more <br /> tickets
                all-in-one Primarily software.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-8">
              <CustomButton name="Get Started" />
              <h2 className="text-[20px] font-semibold ml-5 hidden lg:block">
                How It Work
              </h2>
            </div>
            <div className="mx-auto flex items-center justify-center lg:justify-start mt-20 lg:mt-10">
              <div>
                <img src={leftimg} alt="" />
              </div>
              <div className="mx-5">
                <img src={springimg} alt="" />
              </div>
              <div className="mx-5">
                <p className="text-2xl font-bold ">5 Star Awards</p>
                <p className="text-sm">For Customer Services</p>
                <div className="flex">
                  <FaStar color="#FFB545" size={20} className="mx-1" />
                  <FaStar color="#FFB545" size={20} className="mx-1" />
                  <FaStar color="#FFB545" size={20} className="mx-1" />
                  <FaStar color="#FFB545" size={20} className="mx-1" />
                  <FaStar color="#FFB545" size={20} className="mx-1" />
                </div>
              </div>
              <div>
                <img src={rightimg} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] rotated-content hidden lg:block">
          {/* Right side content */}
          <div className="text-black">
            <div className="flex">
              <div className="mr-2">
                <img src={chart1} alt="" />
              </div>
              <div className="mt-auto ml-2">
                <img src={chart2} alt="" />
              </div>
            </div>
            <div className="flex items-center my-3">
              <div className="mr-2">
                <img src={chart3} alt="" />
              </div>
              <div className="ml-2">
                <img src={chart4} alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <img src={chart5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
