import React from 'react'
import image from '../assets/images/plyBanner.png'
import ProductCard from './ProductCard'
import Banner from './Banner'
import useAppStore from '../store/store'
import ProductFilter from './ProductFilter'



const Product = () => {
  const {displayData} = useAppStore();
  const {id,title,image,items} = displayData;
  

    // let arr = [1,2,3,4,5,6,7]
  return (
    <div key={id}>
    <Banner image={image} heading={title}></Banner>

    {/* <div className='w-full grid grid-cols-2 gap-5'>
        {arr.map(()=> {
            return <ProductCard />
        })}
    </div> */}
    <ProductFilter itmes={items}></ProductFilter>
    </div>
  )
}

export default Product