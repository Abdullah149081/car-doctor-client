import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  const [banners, setBanner] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-beta-five.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);

  return (
    <div className="carousel w-full">
      {banners.map((banner) => (
        <div key={banner.id} id={banner.id} className="carousel-item relative w-full">
          <img src={banner.img_banner} className="rounded-xl w-full lg:h-[600px] 2xl:h-[750px] " alt="banner" />
          <div className="absolute  text-white  inset-0 rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   ">
            <div className="lg:left-56 top-1/4  lg:top-1/4 left-4 absolute">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-7xl font-bold  tracking-wide leading-[5.2rem]">
                  Affordable <br /> Price For Car <br /> Servicing
                </h2>
                <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 lg:mt-8 ">
                <button type="button" className="btn btn-primary">
                  Discover More
                </button>
                <button type="button" className="btn btn-outline border-white text-white hover:bg-inherit">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex  transform -translate-y-1/2  gap-4 bottom-3 lg:bottom-12 right-3  lg:right-12 ">
            <a href={banner.previous} className="btn btn-circle border-0 bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-20">
              <FiArrowLeft className="w-6 h-6" />
            </a>
            <a href={banner.next} className="btn btn-circle border-0  bg-[#FF3811] hover:bg-[#FF3811]">
              <FiArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
