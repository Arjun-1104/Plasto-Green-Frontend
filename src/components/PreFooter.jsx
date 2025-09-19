import React from "react";
import { preFooterData } from "../data/data";

const PreFooter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-50 via-green-50 to-pink-50 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {preFooterData.map(({ image: Image, name, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-4 bg-gradient-to-tr from-yellow-200 via-green-200 to-pink-200 rounded-full p-4 shadow-md">
              <Image size={64} className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-green-700 mb-2">{name}</h2>
            <h6 className="text-sm text-gray-500 text-center">{description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreFooter;
