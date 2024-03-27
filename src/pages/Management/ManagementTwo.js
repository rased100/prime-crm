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
            <div className=" my-5 lg:border lg:rounded-3xl lg:p-5">
              <span className="">
                <GrShieldSecurity size={30} color="#49E4EB" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Lead generation</h2>
                <p className="text-md mt-2">
                  Guide Helps Companies Increase Customer & Agent Satisfaction,
                  Also Reducing Support Costs.
                </p>
              </div>
            </div>
            <div className=" my-5 lg:border lg:rounded-3xl lg:p-5">
              <span className="">
                <HiSpeakerphone size={30} color="#49E4EB" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Team Email</h2>
                <p className="text-md mt-2">
                  Group Your Contacts By Location, Age, And Almost Any Behavior
                  With Advanced Segmentation Tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTwo;
