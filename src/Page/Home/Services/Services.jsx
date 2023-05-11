/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";
import Area from "./Area";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-20 lg:py-32">
      <div className="text-center space-y-4 ">
        <h2 className="text-primary font-bold">Service</h2>
        <h2 className="text-3xl lg:text-5xl text-secondary font-bold">Our Service Area</h2>
        <p className="text-neutral">
          The majority have suffered alteration in some form, by injected humour, or randomized <br className="hidden lg:block" /> words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <Area key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
