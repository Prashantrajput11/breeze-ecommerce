import React from 'react';
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const{id,img,title,price, rating} = product;
  return (
    <div className='card mt-048'>
      <div className='card-header'>
        <img src={img}/>
      </div>

      <div className='card-body flex-col-sb'>
      <p className='card-title tx-lg mb-1'>{title}</p>
      <div className='item-price mb-1'>Rs.{price}</div>
      <div className='item-rating'> ⭐️{rating}/5</div>
      </div>
      

      <div className='card-footer mt-1 pb-1'>
        <button className='btn btn--primary'>Add To Cart</button>
      </div>

    </div>
  )
}
