// Info : file contains data related to sort component

// Imports
import React from 'react'
import { useFilter } from '../../Context/filterContext'

export const CategoryFilter = () => {

  const{filterState, filterDispatch} = useFilter();
  const{categories} = filterState;



  return (

    <>
  <div className="categories-wrapper">
    <h4 className="categories-title tx-md pl-1">CATEGORIES</h4>
    <ul className="categories-list">
      <li>
        <label>
          <input 
          type="checkbox"
          name= "Facewash"
          value="Facewash"
          checked = {categories.includes("Facewash")}
          onChange = {(e)=> filterDispatch({type: 'CATEGORY', payload: e.target.value})}

          />
          Facewash
        </label>
      </li>

      <li>
      <label>
          <input 
            type="checkbox" 
            value="Hairspray" 
            name ="hairspray" 
            // id="hairspray" 
            checked = {categories.includes("Hairspray")}
            onChange = {(e)=> filterDispatch({type: 'CATEGORY', payload: e.target.value})}
          />
          Hairspray
        </label>
      </li>

      <li>
        <input 
          type="checkbox" 
          value="Combos" 
          checked = {categories.includes("Combos")}
          onChange = {(e)=> filterDispatch({type: 'CATEGORY', payload: e.target.value})}

        />
        <label>Combos</label>
      </li>
    </ul>
  </div>
    </>

  )
}
