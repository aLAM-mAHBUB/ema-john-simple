import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  console.log(cart)

  useEffect(() => {
    fetch('products.json')
    .then (res => res.json())
    .then (data => setProducts(data))
  }, [])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }
  return (
    <div className='shop'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;