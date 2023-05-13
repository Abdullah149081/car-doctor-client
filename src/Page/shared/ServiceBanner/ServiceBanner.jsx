import React from "react";
import checkout from "../../../assets/images/checkout/checkout.png";

const ServiceBanner = ({ children }) => {
  return (
    <div className="">
      <div className=" relative w-full">
        <img src={checkout} className="rounded-lg w-full  " alt="banner" />
        <div className="absolute  text-white  inset-0 rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:left-56 top-1/4  lg:top-1/4 left-4 absolute">
            <div className="">
              <h2 className="text-2xl lg:text-5xl font-bold  tracking-wide">{children[0].props.children}</h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/4 lg:left-[45%]">
          <p className="text-xs lg:text-xl font-medium">
            <span className="service-clip bg-primary text-white px-7  lg:px-10  py-[0.625rem]">{children[1].props.children}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
