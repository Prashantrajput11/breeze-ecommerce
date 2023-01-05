// Info : file contains data related to sidebar component

// Imports
import React from 'react'
import "./Sidebar.css"
import { RatingFilter } from '../Filters/RatingFilter'
import { CategoryFilter } from '../Filters/CategoryFilter'
import { PricerangeFilter } from '../Filters/PricerangeFilter'
import { SortFilter } from '../Filters/SortFilter'


// Function Sidebar
export const Sidebar = () => {
  return (
    <div className='sidebar-col'>
      <div className='sidebar-title mb-048'>
          <p>FILTER</p>
          <button className='btn clear-cta'>Clear</button>
      </div>
    <PricerangeFilter/>
   
    <CategoryFilter/>
    
    <RatingFilter/>
    <SortFilter/>

    </div>
  )
}
