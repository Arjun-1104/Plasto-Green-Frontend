import React from "react";
import ProductCard from "./ProductCard";
import Banner from "./Banner";
import useAppStore from "../store/store";
import ProductFilter from "./ProductFilter";
import defaultImage from "../assets/images/plyBanner.png";

const Product = () => {
  const { displayData } = useAppStore();
  const { id, title, image, items } = displayData;
  // console.log(id, title, image, items);

  return (
    <div key={id}>
      <Banner
        image={image ? image : defaultImage}
        heading={title ? title : "Product"}
      ></Banner>

      <ProductFilter items={items}></ProductFilter>
    </div>
  );
};

export default Product;
