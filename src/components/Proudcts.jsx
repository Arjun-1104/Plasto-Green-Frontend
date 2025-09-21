import React from "react";
import Banner from "./Banner";
import ProductFilter from "./ProductFilter";
import useAppStore from "../store/store";

const Proudcts = () => {
  const { displayData, setDisplayData, activeNav } = useAppStore();

  React.useEffect(() => {
    if (activeNav.toLowerCase() === "products") {
      setDisplayData("allProducts");
    }
  }, [activeNav, setDisplayData]);
  return (
    <div key={displayData.id}>
      <Banner image={displayData.image} heading={displayData.title} />
      <ProductFilter items={displayData.items} />
    </div>
  );
};

export default Proudcts;
