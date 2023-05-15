/* eslint-disable no-underscore-dangle */
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import ServiceBanner from "../shared/ServiceBanner/ServiceBanner";

const BookService = () => {
  const booking = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const price = form.price.value;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      price,
      date,
      serviceId: booking._id,
      serviceName: booking.title,
      img: booking.img,
    };

    fetch("https://car-doctor-server-beta-five.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Order successfully placed");
        }
      });
  };

  return (
    <div className="car-container lg:py-10">
      <ServiceBanner>
        <span>Booking Services</span>
        <span>Home/Book Services</span>
      </ServiceBanner>

      <div className="my-10">
        <h2 className="text-center text-secondary font-bold   text-lg lg:text-2xl">Services Name: {booking.title}</h2>

        <div className=" mt-8 rounded-lg bg-info">
          <div className="max-w-screen-xl mx-auto px-4 py-6 lg:py-[96px] lg:px-[96px]">
            <form onSubmit={handlerSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="form-control">
                  <input type="text" defaultValue={user?.displayName} name="name" placeholder="Your name" className="input input-bordered w-full text-gray-800" />
                </div>
                <div className="form-control">
                  <DatePicker
                    name="date"
                    className="input input-bordered w-full text-gray-800"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    isClearable
                    placeholderText="Date"
                    withPortal
                    portalId="root-portal"
                  />
                </div>
                <div className="form-control">
                  <input type="email" defaultValue={user?.email} name="email" placeholder="Your Email" className="input input-bordered w-full text-gray-800" />
                </div>
                <div className="form-control">
                  <input type="text" name="price" placeholder="Price" className="input input-bordered w-full text-gray-800" defaultValue={booking.price} />
                </div>
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

export default BookService;
