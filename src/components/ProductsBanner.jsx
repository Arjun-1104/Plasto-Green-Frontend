import React from "react";
import { productBannerImages } from "../assets/assets";
import { Link } from "react-router-dom";
import useAppStore from "../store/store";

// const {image1, image2,image3,image4,image5,image6} = productBannerImages;
const ProductsBanner = () => {
  const {setDisplayData} =  useAppStore();
  return (
    <div className="p-3 md:p-6 lg:p-10">
      <h1 className="text-xl font-semibold mb-5">Shop by Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-3 ">
      
        {productBannerImages.map(({ id, name, image }) => {
          // console.log(id)
          return (
            <Link key={id} to={`./product`} onClick={()=> setDisplayData(name)}>
              <div
                name={name}
                className="border border-gray-200 w-full rounded-xl overflow-hidden"
                
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
