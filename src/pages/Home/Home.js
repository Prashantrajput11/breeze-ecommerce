// Info : contains data related to Home page

// Imports
import React from 'react'
import Categories from '../../components/Categories/Categories.js'
import {Hero} from '../../components/Hero/Hero.js'
import Showcase from '../../components/Showcase/Showcase.js'

// Function Home
const Home = () => {

  // Return
  return (
    <div>
     <Hero/>
     <Categories/>
     <Showcase/>
    </div>
  )
}

export default Home