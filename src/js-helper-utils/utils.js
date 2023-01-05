// Info : Boilerplate Library. Contains basic utility functions



  /************************************************************
  Return sorted products (based on price)
  @param  {Set[]} products - List of products to be sorted
  @param  {String} sortBy - Default value of sort 

  @return {Set[]} - sorted products
  ***********************************************************/
  export const getSortedDataForProducts = (products, sortBy)=>{

  // If sort is low to high
  if(sortBy === "LOW-TO-HIGH"){
    return [...products].sort((item1, item2)=>{
      return item1.price-item2.price
    })
  }

  // If sort is high to low
  if(sortBy === "HIGH-TO-LOW"){
    return [...products].sort((item1, item2)=>{
       return item2.price-item1.price
    })
  } 

  // Return 
  return products

  }




  /************************************************************
  Return filtered products (based on categories)
  @param  {Set[]} products - List of products to be sorted
  @param  {Map} category - Categories of product(...Facewash, Hairspray)

  @return {Map} - filtered products
  ***********************************************************/
  export const getFilteredProducts = (products, category)=>{

    return category.length ? products.filter(({ categoryName }) => category.includes(categoryName))
    : products;

  }


    /************************************************************
  Return filtered products (based on categories)
  @param  {Set[]} products - List of products to be sorted
  @param  {Map} category - Categories of product(...Facewash, Hairspray)

  @return {Map} - filtered products
  ***********************************************************/
  export const getProductsByRatings = (products, rating)=>{

    if(rating === '4-and-above'){
      return [...products].filter(product=> product.rating>= 4)
    }

    if(rating === '3-and-above'){
      return [...products].filter(product=> product.rating>=3)
    }

    if(rating === '2-and-above'){
      return [...products].filter(product=> product.rating>=2)
    }


    return products;



  }



