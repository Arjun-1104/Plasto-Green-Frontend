import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/images/plyBanner.png'
import Banner from './Banner';
import ProductFilter from './ProductFilter';
import useAppStore from '../store/store';

const Proudcts = () => {
  const {displayData } = useAppStore();
  const navigate = useNavigate();
  // const allData = Object.values(allProductData).flatMap(category => category.items)
  // console.log(allData)
  return (
    <div key={displayData.id}>
          <Banner image={displayData.image} heading={displayData.title}/>
          <ProductFilter items={displayData.items}/>
    </div>
      
    
    
  )
}

export default Proudcts