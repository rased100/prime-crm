import React from "react";
import chartimg from "../../assets/images/manage1/Image2.png";
import "./howworks.css";
import { GrShieldSecurity } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";
import CustomButton from "../../components/CustomButton";

const HowWorks = () => {
  return (
    <div className="">
      <div className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* First half of the screen */}
          <div className="lg:flex-1 lg:ml-5 px-5 lg:mt-0">
            <div className="mb-10">
              <h1 className="text-3xl font-bold">How It Works</h1>
              <p className="text-lg mt-5">
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </p>
            </div>
            <div className="flex my-5 lg:border lg:rounded-3xl lg:p-5">
              <h2 className="pl-5 mr-5 font-semibold text-[#47CFFF] text-2xl">
                01
              </h2>
              <div>
                <h2 className="text-xl font-semibold ">Download Our App</h2>
                <p className="text-md mt-2">
                  CentraHub CRM automatically logs in any reactions made by your
                  leads, prospects
                </p>
              </div>
            </div>
            <div className="flex my-5 lg:border lg:rounded-3xl lg:p-5">
              <h2 className="pl-5 mr-5 font-semibold text-[#47CFFF] text-2xl">
                02
              </h2>
              <div>
                <h2 className="text-xl font-semibold">
                  List Your Company Detail
                </h2>
                <p className="text-md mt-2">
                  Customers making it easier for your sales team members
                  audience they make contact.
                </p>
              </div>
            </div>
            <div className="flex my-5 lg:border lg:rounded-3xl lg:p-5">
              <h2 className="pl-5 mr-5 font-semibold text-[#47CFFF] text-2xl">
                03
              </h2>
              <div>
                <h2 className="text-xl font-semibold">Enjoy Your Business</h2>
                <p className="text-md mt-2">
                  customers, making it easier for your sales team members
                  audience before make contact.
                </p>
              </div>
            </div>
          </div>
          {/* second half of the screen */}

          <div className="lg:flex-1 lg:ml-5 px-5 py-24 lg:mt-0 works-container rounded-l-2xl bg-[#F6F6F6]">
            <div className="mb-10 w-[60%]">
              <h1 className="text-2xl font-semibold ">
                The Perfect CRM Software: Boost Your Field Sales Team’s
                Efficiency
              </h1>
              <p className="text-lg mt-5">
                Depending on the Sales Approaches Standardize a Marketing
                Process
              </p>
              <p className="text-md mt-5">
                Unique and powerful suite of software to run your entire
                business, brought to you by a company.
              </p>
            </div>
            <div className="flex">
              {/* <CustomButton name="Apple" /> */}
              <button
                type="button"
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 mx-1"
              >
                <svg
                  className="w-5 h-5 me-2 -ms-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                App Store
              </button>
              {/* <CustomButton name="Google" /> */}
              <button
                type="button"
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 mx-1"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
