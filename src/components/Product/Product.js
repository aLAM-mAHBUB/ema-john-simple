import React from 'react';
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
  const {product, handleAddToCart} = props
  const {img,name, seller, price, ratings} = product
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
      <h6 className='product-name'>{name}</h6>
      <p className='product-price'>Price: ${price}</p>
      <p className='product-manufacturer'>Manufacturer: {seller}</p>
      <p className='product-ratings'><small>Ratings: {ratings} Stars</small></p>
      </div>
      <button onClick={() => {handleAddToCart(product)}} className='product-button'> 
        Add to Cart 
        {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
        </button>
    </div>
  );
};

export default Product;