import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import Cart from '../cart-system/cartsystem';



const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products', {
      
    })
    .then(response => {
      setProducts(response.data.products);
      console.log(response)
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    console.log(product)
    // setCartItems([...cartItems, product]);
    console.log(existingItem);

    if (existingItem) {
      existingItem.quantity++;
      setCartItems([...cartItems]);

    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
 
  return (
    <div>
      <div className='cart-system'>
        <h3>Cart</h3>
          <table>
              <tr>
                <th>Photo</th>
                <th>Quantity</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            {cartItems.map((cartProduct, index) => (
              <tr key={index}>
                <th><div className='cart-thumbnail'><img src={cartProduct.thumbnail}/></div></th>
                <th><button>-</button>{cartProduct.quantity}<button>+</button></th>
                <th>{cartProduct.title}</th>
                <th>{(cartProduct.price * cartProduct.quantity)}</th>
              </tr>
            ))
            }
          </table>
      </div>
    <div className='product-list'>
      {products.slice(0,10).map(product => (
        <div className='product-card' key={product.id}>
          <img src={product.thumbnail} alt={product.name} />
          <h2>{product.title}</h2>
          <p>Stock left: {product.stock}</p>
          <div className='productbutton'>
            <button className='product-button-style' onClick={() => {addToCart(product);}}>Add to Cart</button>
          </div>
          <Link to={`/product/${product.id}`} className='view-more-bttn'>View More</Link>
        </div>
      ))}
    </div> 
    </div>

  );
};

export default ProductListing;

