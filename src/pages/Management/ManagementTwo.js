import React from "react";
import chartimg from "../../assets/images/manage1/Image2.png";
import "./mOne.css";
import { GrShieldSecurity } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";

const ManagementTwo = () => {
  return (
    <div className="managetwo-container">
      <div className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* first half of the screen */}
          <div className="lg:flex-1 order-2 lg:mr-0 mr-[7%]">
            <img src={chartimg} alt="" className="mt-10" />
          </div>

          <div className="lg:flex-1 lg:ml-5 mt-5 lg:mt-0 order-1 ">
            {/* second half of the screen */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold w-[70%]">
                Ways A Project Management Tool Can Help Your Team
              </h1>
              <p className="text-lg mt-5">
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </p>
            </div>
            <div className="flex">
              <div className=" my-5  lg:p-5">
                <span className="">
                  <GrShieldSecurity size={30} color="#49E4EB" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">CRM Security</h2>
                  <p className="text-md mt-2">
                    cards and make more sales while chatting
                  </p>
                </div>
              </div>
              <div className=" my-5 lg:p-5">
                <span className="">
                  <HiSpeakerphone size={30} color="#49E4EB" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Marketing Hub</h2>
                  <p className="text-md mt-2">
                    Show off your goods in elegant product cards and mak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTwo;
