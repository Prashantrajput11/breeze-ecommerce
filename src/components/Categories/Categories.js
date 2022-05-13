// Info : contains data related to Categories component

// Imports
import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import './Categories.css'

// Function Categroies
const Categories = () => {

  // Initialize State
  const[categories, setCategories] = useState([])

  // Runs only once
  useEffect(()=>{
    
      // Get data from Db
      axios.get('api/categories')
      .then(response => setCategories(response.data.categories)) // If success update state
      .catch(err => console.log(err)) // If error
    },[])

  // Return 
  return (
    <div className='categories-container mt-032'>
      <h1 className='tx-lg tx-ct text-color'>Featured Categories</h1>
      <div className='categories-card'>

      {
        categories.map(({_id, categoryName, categoryImg })=>{
          return <div key={_id} className='category-card'>
            <img src= {categoryImg} alt="facewash hairspray combos"/>
            <p className='tx-lg tx-ct text-color p-016'>{categoryName}</p>
          </div>
        })
      }
        
      </div>
    </div>
  )
}

export default Categories