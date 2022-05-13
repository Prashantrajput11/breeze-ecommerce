// Info : contains data related to Showcase component

// Imports
import React from 'react'
import './Showcase.css'

// Function Showcase
const Showcase = () => {

  // Return 
  return (
    <div className='showcase-container ptb-048'>

      <p className='tx-xl text-color-secondary tx-ct ptb-032'>
        <span className='text-color tx-xl'>Grooming should never </span> 
        be boring
        <hr/>
      </p>

      <div className='facts-box  text-color-secondary plr-048'>
      <div className='fact'>
        <span className='text-color tx-xl'>72%</span>
        <p>
          of woman believe bad grooming is a major turn off
        </p>
      </div>

      <div className='fact'>
        <span className='text-color tx-xl'>87%</span>
        <p>
          of Dermatoligst suggest using face washes for clear skin
        </p>
      </div>

      <div className='fact'>
        <span className='text-color tx-xl'>78%</span>
        <p>
          of men believe a good grooming brings confidence in them.
        </p>
      </div>

      </div>
    </div>
  )
}

export default Showcase