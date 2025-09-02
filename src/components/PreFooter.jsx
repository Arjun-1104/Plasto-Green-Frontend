import React from 'react'

import { preFooterData } from '../data/data'
// import { FaTruckFast } from "react-icons/fa6";
// const Image = preFooterData[0].image
const PreFooter = () => {
  return (
    <div className=' grid grid-cols-1 items-center justify-center'>
        {preFooterData.map(({Image, name, description})=> {
            return  <div className=' flex flex-col items-center w-full space-y-3 p-10'>
            <Image size={120}/>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h6 className='text-lg text-center'>{description}</h6>
        </div>
        })}
    </div>
  )
}

export default PreFooter;