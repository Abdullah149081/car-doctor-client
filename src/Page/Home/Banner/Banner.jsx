import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  const [banners, setBanner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);

  return (
    <div className="carousel w-full">
      {banners.map((banner) => (
        <div key={banner.id} id={banner.id} className="carousel-item relative w-full">
          <img src={banner.img_banner} className="rounded-lg w-full lg:h-[600px] 2xl:h-[750px] " alt="banner" />
          <div className="absolute flex justify-between transform -translate-y-1/2  gap-4 bottom-3 lg:bottom-12 right-3  lg:right-12 ">
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
