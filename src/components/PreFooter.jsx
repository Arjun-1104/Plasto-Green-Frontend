import React from 'react'

import { preFooterData } from '../data/data'
// import { FaTruckFast } from "react-icons/fa6";
// const Image = preFooterData[0].image
const PreFooter = () => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center lg:items-baseline justify-center  lg:mx-5'>
        {preFooterData.map(({image : Image, name, description})=> {
            return  <div className=' flex flex-col items-center w-full space-y-3 sm:space-y-1 p-10 sm:px-5 '>
            <Image size={80}/>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <h6 className='text-sm text-gray-500 text-center'>{description}</h6>
        </div>
        })}
    </div>
  )
}

export default PreFooter;