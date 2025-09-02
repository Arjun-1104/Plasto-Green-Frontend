import React from 'react'
import image from '../assets/images/plyBanner.png'
import ProductCard from './ProductCard'
import Banner from './Banner'
import { UseAppStore } from '../store/store'

const Product = () => {
  const {activeBannerCardName, setActiveBannerCardName} = UseAppStore();

  

    let arr = [1,2,3,4,5,6,7]
  return (
    <div>
    <Banner image={image} heading=''></Banner>

    <div className='w-full grid grid-cols-2 gap-5'>
        {arr.map(()=> {
            return <ProductCard />
        })}
       
    </div>
    </div>
  )
}

export default Product