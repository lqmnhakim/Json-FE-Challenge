import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productdeets.css'
import ProductImages from './productimages';


const ProductDetails = () => {
    const { productId } = useParams();

  const [product, setProduct] = useState(null);


  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`, {
    })
    .then(response => {
      setProduct(response.data);
      console.log(response)
      console.log("Product", product);
    })
    .catch(error => {
      console.error('Error fetching product details:', error);
    });
    console.log(productId)
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single-product-page'>
    <div className='single-product-view'>
      <div className='photocarousel'>
        <ProductImages title={product.title} img={product.images}/>
      </div>
      <div className='productdeets'>
        <p>{product.brand}</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
          <div className='pricediscount'>
            <div className='current-price'>
              <h2>${product.price}</h2>
            </div>
            <div className='discount'>
              <h3>{Math.round(product.discountPercentage)}%</h3>
            </div>
          </div>
        <h2><sr>${Math.round(product.price / (1 - product.discountPercentage / 100))}</sr></h2>
      </div>

    </div>
    </div>
  );
};

export default ProductDetails;
