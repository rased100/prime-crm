import React from "react";
import chartimg from "../../assets/images/manage1/Image.png";
import "./mOne.css";

const ManagementOne = () => {
  return (
    <div className="manageone-container">
      <div className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* first half of the screen */}
          <div className="lg:flex-1 order-2 lg:order-1 lg:mr-0 mr-[7%]">
            <img src={chartimg} alt="" className="mt-10" />
          </div>

          <div className="lg:flex-1 lg:ml-5 mt-5 lg:mt-0 order-1 lg:order-2">
            {/* second half of the screen */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold">
                Allocate Leads and Simplify Lead Management
              </h1>
              <p className="text-lg mt-5">
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </p>
            </div>
            <div className="flex flex-col my-5 lg:border lg:rounded-3xl lg:p-5">
              <span className="h-[21px] w-[21px] bg-[#47CFFF] rounded-full pl-5 ml-5 mr-5"></span>
              <div>
                <h2 className="text-xl font-semibold">Lead generation</h2>
                <p className="text-md mt-2">
                  Guide Helps Companies Increase Customer & Agent Satisfaction,
                  Also Reducing Support Costs.
                </p>
              </div>
            </div>
            <div className="flex flex-col my-5 lg:border lg:rounded-3xl lg:p-5">
              <span className="h-[21px] w-[21px] bg-[#47CFFF] rounded-full pl-5 ml-5 mr-5"></span>
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

export default ManagementOne;
