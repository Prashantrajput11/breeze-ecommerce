// Info : file contains Filter Context

// Imports
import React, {useReducer, createContext, useContext} from 'react'
import { filterReducer } from '../Reducers/filterReducer';


// Initial state
const initialFilterState = {
  products: [],
  sortBy : null,
  ratings: '',
  categories : []
}

// create context
 const filterContext = createContext()


function FilterProvider({children}){

  // Globally used filter state
  const[filterState, filterDispatch] = useReducer(filterReducer, initialFilterState)

  return(
    <filterContext.Provider value = {{filterState, filterDispatch}}>
      {children}
    </filterContext.Provider>
  )
}


// custom hook to use Filter
const useFilter = ()=> useContext(filterContext)



// exports
export {FilterProvider, useFilter}