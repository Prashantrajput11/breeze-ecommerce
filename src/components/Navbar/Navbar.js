// Info : contains data related to Navbar component


// Imports
import React from 'react'
import "./Navbar.css"


// Function Navbar
const Navbar = () => {

  // Return 
  return (
  <div className="nav-container">
  
    <div className="logo tx-xl"><a href= "#">Breeze<span className='text-color'>Qoosh</span></a></div>
   
    <input type="search" className="navbar-search" placeholder="search for products"/>
   
    <a href="#" className="btn btn--login">Login</a>
    
    <div className="usericon-container">
      <a className="user-profile-icon"><i className="fa fa-shopping-cart icons"></i></a>
      <a className="user-profile-cart"><i className="fa fa-heart icons"></i></a>
      <a className="user-profile-cart"><i className="fa fa-user icons"></i></a>
    </div>
  </div>
  )
}

export default Navbar