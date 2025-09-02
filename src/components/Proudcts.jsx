import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/images/plyBanner.png'
import Banner from './Banner';

const Proudcts = () => {
  const navigate = useNavigate();
  return (
    <div>
          <Banner image={image} heading='Product'/>
          <h1>ply iamges</h1>
          <h1>wood iamges</h1>
          <h1>door iamges</h1>
    </div>
      
    
    
  )
}

export default Proudcts