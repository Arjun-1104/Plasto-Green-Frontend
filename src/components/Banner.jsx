import React from "react";
// import image from '../assets/images/plyBanner.png'
const Banner = ({ image, heading }) => {
  return (
    <div className="relative w-full h-60 sm:h-80 md:h-100 lg:h-120 overflow-hidden mt-20">
      <img src={image} alt="image" className="h-full w-full object-cover" />
      <h2 className="absolute inset-0 flex justify-center items-center  text-4xl sm:text-5xl md:text-6xl text-white font-bold ">
        {heading}
      </h2>
    </div>
  );
};

export default Banner;
