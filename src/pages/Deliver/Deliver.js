import React from "react";
import "./deliver.css";
import { HiSpeakerphone } from "react-icons/hi";
import { MdDone } from "react-icons/md";
import { GiStarShuriken } from "react-icons/gi";

const Deliver = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">
            Deliver End-To-End Retail Billing & Solutions
          </p>
          <p className="text-xl text-center mt-5 pb-12 w-[80%] lg:w-[65%]">
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </div>
        <div className="delever-container">
          {/* Border area start */}
          <div className="">
            <div className="flex flex-col lg:flex-row justify-center m-2 pt-16">
              {/* First Col */}
              <div>
                {/* <button
                  type="button"
                  className="text-white bg-[#303030] hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-medium rounded-md text-[15px]  px-8 ml-5 h-[42px]"
                >
                  <p className="text-white">In Need</p>
                </button> */}
                <div className="flex items-center ml-5">
                  <GiStarShuriken size={30} />
                  <h1 className="text-2xl font-semibold pl-2">Starter</h1>
                </div>
                <div className="bg-[#F9F9F9] rounded-2xl mx-5">
                  <div className="flex items-center my-5 lg:p-5">
                    <div className=" border-b pb-5 border-[#D9D9D9]">
                      <h2 className="text-4xl font-semibold pl-5">$45/Mo</h2>
                      <div className="py-5">
                        <p className="text-sm  pl-5">
                          Includes 1,000 marketing contacts. Additional
                        </p>
                        <p className="text-sm pl-5">
                          marketing contacts are sold in increments of
                        </p>
                        <p className="text-sm pl-5">1,000 from</p>
                      </div>
                    </div>
                  </div>
                  {/* LIst items start */}
                  <div className="pl-2">
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className=" py-5 mx-5">
                      <button
                        type="button"
                        className="w-full text-black bg-[#EAEAEA] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[20px] px-8 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                  {/* LIst items end */}
                </div>
              </div>
              {/* Second Col */}
              <div>
                {/* <button
                  type="button"
                  className="text-white bg-[#303030] hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-medium rounded-md text-[15px]  px-8 ml-5 h-[42px]"
                >
                  <p className="text-white">In Need</p>
                </button> */}
                <div className="flex items-center ml-5">
                  <GiStarShuriken size={30} />
                  <h1 className="text-2xl font-semibold pl-2">Professional</h1>
                </div>
                <div className="bg-[#F9F9F9] rounded-2xl mx-5">
                  <div className="flex items-center my-5 lg:p-5">
                    <div className=" border-b pb-5 border-[#D9D9D9]">
                      <h2 className="text-4xl font-semibold pl-5">$60/Mo</h2>
                      <div className="py-5">
                        <p className="text-sm  pl-5">
                          Includes 1,000 marketing contacts. Additional
                        </p>
                        <p className="text-sm pl-5">
                          marketing contacts are sold in increments of
                        </p>
                        <p className="text-sm pl-5">1,000 from</p>
                      </div>
                    </div>
                  </div>
                  {/* LIst items start */}
                  <div className="pl-2">
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="mx-2">
                        <MdDone size={20} color="#49E4EB" />
                      </span>
                      <p className="text-sm">Outbound email and in-product</p>
                    </div>
                    <div className=" py-5 mx-5">
                      <button
                        type="button"
                        className="w-full text-white bg-[#303030] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[20px] px-8 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                  {/* LIst items end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
