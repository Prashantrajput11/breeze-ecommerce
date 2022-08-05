import React from 'react'
import "./Pricerange.css"

export const PricerangeFilter = () => {
  return (

  <div className='slider-container flex-col-sb'>
    <h4 class="slider-title tx-md pl-1 mb-1">Price</h4>
					<p class="tx-md pl-1 flex-row-sb">
						<span class="min-price">200</span>
						<span class="max-price pr-1">700</span>
					</p>
    <input type="range" name="" id="" className='slider'/>
  </div>

  )
}
