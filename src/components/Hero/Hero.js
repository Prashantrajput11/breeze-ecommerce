// Info : contains data related to Hero component


// Imports
import React from 'react'
import "./Hero.css"

// Function Hero
export const Hero = () => {

  // Return
  return (

  <div className='hero-container'>
    <div className='hero-text'>
      <h2>Style Yourself Now</h2>
      <p>Get groomed with the best products</p>
      <a hrfe="#" className='btn--shop-now'>Shop Now</a>
    </div>
    <div className='hero-img'>
      <img src="https://res.cloudinary.com/df5hhvtdp/image/upload/v1652210451/FACEWASH_1_xqmwnl.png" alt = "facewash"/>
    </div>
  </div>

  )
}
