import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <Link to='/productItem'>
    <figure className='border h-80'>
        <img src={assets.ply1} alt="image" className='w-full h-[80%] object-cover' />
        <figcaption className='px-4'>
            <p className='font-semibold'>dgjdgdkgdgjd</p>
            <p>from Rs. 1,030</p>
        </figcaption>
    </figure>
    </Link>
  )
}

export default ProductCard