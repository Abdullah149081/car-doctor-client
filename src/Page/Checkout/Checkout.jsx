import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceBanner from "../shared/ServiceBanner/ServiceBanner";

const Checkout = () => {
  const checkout = useLoaderData();

  return (
    <div className="car-container lg:py-10">
      <ServiceBanner>
        <span>Check Out</span>
        <span>Home/Checkout</span>
      </ServiceBanner>

      <div className="my-10">
        <h2 className="text-center text-secondary font-bold   text-lg lg:text-2xl">Services Name: {checkout.title}</h2>

        <div className=" mt-8 rounded-lg bg-info">
          <div className="max-w-screen-xl mx-auto px-4 py-6 lg:py-[96px] lg:px-[96px]">
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="form-control">
                  <input type="text" name="first" placeholder="First Name" className="input input-bordered w-full text-gray-800" />
                </div>
                <div className="form-control">
                  <input type="text" name="last" placeholder="Last Name" className="input input-bordered w-full text-gray-800" />
                </div>
                <div className="form-control">
                  <input type="tel" name="phone" placeholder="Your Phone" className="input input-bordered w-full text-gray-800" />
                </div>
                <div className="form-control">
                  <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full text-gray-800" />
                </div>
              </div>
              <div className="form-control my-4">
                <textarea placeholder="Your Message" name="message" className="input input-bordered w-full text-gray-800 pt-4 h-60 lg:h-96" />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Order Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
