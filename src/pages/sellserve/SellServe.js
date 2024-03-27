import React from "react";
import "./sellserve.css";
import dashboardimg from "../../assets/images/sellserve/image3a.png";

const SellServe = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="container banner-sellserve">
        <div className="flex justify-center items-center  py-20">
          <div className="flex-1">
            <div className="flex justify-center">
              <div className="">
                <div className="flex text-2xl  font-semibold text-white">
                  <h1 className="pr-5">Sell</h1>
                  <span className="px-5 border-x-4 border-white">
                    <h1>Serve</h1>
                  </span>
                  <h1 className="pl-5">Automate</h1>
                </div>
                <div>
                  <p className="text-md mt-2 text-white">
                    Boost enrolment and manage student lifecycle <br /> with our
                    360° CRM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex mb-4">
              <div className="flex-grow mr-2">
                <div className="flex justify-center items-end">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      *Your Business Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full md:w-[366px] px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      placeholder="Email"
                    />
                  </div>
                  <button
                    type="button"
                    className="text-white bg-[#4BE3EB] hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-medium rounded-lg text-[15px]  px-8 ml-2 h-[42px]"
                  >
                    <p className="text-black">Try Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="cursor-pointer">
            <img src={dashboardimg} alt="" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellServe;
