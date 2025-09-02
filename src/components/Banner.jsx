import React from 'react'
// import image from '../assets/images/plyBanner.png'
const Banner = ({image, heading}) => {
  return (
     <div className='relative w-full h-60 border overflow-hidden'>
        <img src={image} alt="image" className='h-full w-full object-cover'/>
        <h2 className='absolute inset-0 flex justify-center items-end mb-15 text-4xl text-white font-bold '>{heading}</h2>
    </div>
  )
}

export default Banner;