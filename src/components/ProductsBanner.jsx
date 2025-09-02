import React from "react";
import { productBannerImages } from "../assets/assets";
import { Link } from "react-router-dom";
import { UseAppStore } from "../store/store";

// const {image1, image2,image3,image4,image5,image6} = productBannerImages;
const ProductsBanner = () => {
  const {setDisplayData} =  UseAppStore();
  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold mb-5">Shop by Product</h1>
      <div className="space-y-3 ">
        {productBannerImages.map(({ id, name, image }) => {
          return (
            <Link to={`./product`}>
              <div
                key={id}
                name={name}
                className="border border-gray-200 w-full rounded-xl overflow-hidden"
                onClick={()=> setDisplayData(name)}
              >
                <img
                  src={image}
                  alt="image"
                  className="rounded-xl shadow-md hover:shadow-lg w-full transition duration-400 hover:scale-105"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsBanner;
