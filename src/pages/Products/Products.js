// Info : file contains data related to Products component

// Imports
import React, {useEffect} from 'react'
import axios from "axios"
import "./Products.css";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useFilter } from '../../Context/filterContext';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import {getSortedDataForProducts, getFilteredProducts, getProductsByRatings} from "../../js-helper-utils/utils.js"

export const Products = () => {
  const{ filterState, filterDispatch} = useFilter();
  const{products, categories, ratings} = filterState;

  const sortedProducts = getSortedDataForProducts(products, filterState.sortBy)
  const filteredOnCategoriesProducts = getFilteredProducts(sortedProducts, categories)
  const filteredOnRatingProducts = getProductsByRatings(filteredOnCategoriesProducts, ratings)




  useEffect(() => {
    (async () => {
        try {
           await axios.get("/api/products")
           .then((res) => {
             console.log(res);
                filterDispatch({type:'GET_PRODUCTS',payload:res.data.products})
            })
        }catch(err) { console.log(err)};
        
      })();
}, [])



  return (
    <>


      <div className='main-container flex-row-sb'>
      <div>
      <Sidebar/>
      </div>
      
      <main className='products-col ml-024 mr-024 grid--4-col'>
        {
          filteredOnRatingProducts.map((product)=>{
            return <ProductCard product= {product}/>
          })
        }
      </main>
      </div>
      

    </>
  )
}
