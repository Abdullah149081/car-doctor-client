import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Area = ({ service }) => {
  const { img, _id, price, title } = service;

  return (
    <div>
      <div className="card w-full bg-base-100 hover:shadow-xl border">
        <figure className="rounded-lg p-4">
          <img src={img} alt={img} className="object-cover h-[208.01px] w-full  rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-accent">{title}</h2>
          <div className="card-actions justify-end mt-2">
            <p className="text-primary font-bold">Price: ${price}</p>
            <div className="">
              <FiArrowRight className="w-6 h-6 text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;