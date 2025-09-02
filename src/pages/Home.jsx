import React from 'react'
import Navbar from '../components/Navbar'
import MainSlider from '../components/MainSlider'
import ProductsBanner from '../components/ProductsBanner'
import CustomerReview from '../components/CustomerReview'
import PreFooter from '../components/PreFooter'
import Product from '../components/Product'
import ProductItem from '../components/ProductItem'

const Home = () => {
  return (
    <div className='space-y-5'>
        <Navbar/>
        <MainSlider/>
        <ProductsBanner/>
        <CustomerReview/>
        <PreFooter/>
    </div>
    // <Product></Product>
    // <ProductItem />
  )
}

export default Home