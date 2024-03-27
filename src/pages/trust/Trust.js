import React from "react";
import logo1 from "../../assets/images/trust/t1.png";
import logo2 from "../../assets/images/trust/t2.png";
import logo3 from "../../assets/images/trust/t3.png";
import logo4 from "../../assets/images/trust/t4.png";
import logo5 from "../../assets/images/trust/t5.png";
import logo6 from "../../assets/images/trust/t6.png";
import logo7 from "../../assets/images/trust/t7.png";
import logo8 from "../../assets/images/trust/t8.png";
import logo9 from "../../assets/images/trust/t9.png";
import logo10 from "../../assets/images/trust/t10.png";
import logo11 from "../../assets/images/trust/t11.png";
import logo12 from "../../assets/images/trust/t12.png";
import logo13 from "../../assets/images/trust/t13.png";

const Trust = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">
          Trusted by more than 75 million users globally
        </p>
        <p className="text-xl text-center mt-5 pb-12 w-[80%] lg:w-[45%]">
          Unique and powerful suite of software to run your entire business,
          brought to you transform the way you work.
        </p>
      </div>
      {/* row-col */}
      {/* First */}
      <div className="flex items-center justify-center">
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo1} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo2} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo3} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b">
          <img src={logo4} alt="" />
        </div>
      </div>
      {/* second */}
      <div className="flex items-center justify-center">
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo5} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo6} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo7} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b border-r">
          <img src={logo8} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-b">
          <img src={logo9} alt="" />
        </div>
      </div>
      {/* Third */}
      <div className="flex items-center justify-center">
        <div className="w-[289px] h-[146px] flex items-center justify-center border-r">
          <img src={logo10} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-r">
          <img src={logo11} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center border-r">
          <img src={logo12} alt="" />
        </div>
        <div className="w-[289px] h-[146px] flex items-center justify-center">
          <img src={logo13} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
