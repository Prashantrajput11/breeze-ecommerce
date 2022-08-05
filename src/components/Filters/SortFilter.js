// Info : file contains data related to sort component

// Imports
import React from 'react';
import { useFilter } from '../../Context/filterContext';



export const SortFilter = () => {


  const{filterState, filterDispatch} = useFilter();

  return (
    <div>
      <h4 class="sort-title tx-md pl-1">Sort</h4>
      <ul className='sort-list flex-col-sb'>

      <li>
      <label>
          <input 
            type="radio" 
            name="low-to-high"
            checked = {filterState.sortBy === "LOW-TO-HIGH"}
            onChange={()=>filterDispatch({type: 'LOW-TO-HIGH'})}
          />
            Low to high
            
        </label>
      </li>

      <li>

      <label>
        <input 
          type="radio" 
          name="low-to-high"
          checked = {filterState.sortBy === "HIGH-TO-LOW"}
          onChange={()=>filterDispatch({type: 'HIGH-TO-LOW'})}
          />
          High to low
          
        </label>
      </li>


    </ul>
     
    </div>
  )
}

