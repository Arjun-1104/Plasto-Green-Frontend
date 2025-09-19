import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to="/productItem" className="block group">
      <figure className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
        {/* Image */}
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={assets.ply1}
            alt="image"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Caption */}
        <figcaption className="px-5 py-4 space-y-1">
          <p className="font-semibold text-gray-900 text-base md:text-lg line-clamp-1">
            {"Premium Plywood"}
          </p>
          <p className="text-green-600 font-medium text-sm md:text-base">
            from Rs. {"1,030"}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default ProductCard;
