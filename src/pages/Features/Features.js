import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaUserCog } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className="flex justify-center my-36">
      <div className="container">
        <div className="  flex flex-col items-center">
          <p className="text-4xl font-bold">Explore Premium Features</p>
          <p className="text-xl text-center mt-5 w-[80%] lg:w-[60%]">
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </div>
        <div className="pt-10 flex flex-col lg:flex-row">
          <div className="mx-2.5 p-10 my-5 lg:my-0 bg-[#F4F4F4] shadow-lg ">
            <CiSettings size={40} />
            <h1 className="text-2xl font-semibold">Powerful Settings</h1>
            <p>Provide excellent customer service. Answer more tickets.</p>
          </div>
          <div className="mx-2.5 p-10 my-5 lg:my-0 bg-[#FFFFF] shadow-lg">
            <FaUserCog size={40} />
            <h1 className="text-2xl font-semibold">User Friendly</h1>
            <p>
              Use Timeline to plan projects right how the pieces fit together.
            </p>
          </div>
          <div className="mx-2.5 p-10 my-5 lg:my-0 bg-[#F4F4F4] shadow-lg">
            <IoCheckmarkDoneCircleOutline size={40} />
            <h1 className="text-2xl font-semibold">Integrated platform</h1>
            <p>Vivamus massa eleifend etiam neque odio feugiat dolor est.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
