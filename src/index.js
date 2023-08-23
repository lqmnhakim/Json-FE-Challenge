import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductListing from './components/productdetail/App';
import ProductDetails from './components/productdetailsingle/productdeets';
import AppRouter from './components/header/routercomponents';
import ProductImages from './components/productdetailsingle/productimages';
import Cart from './components/cart-system/cartsystem';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ProductListing />
  // <ProductImages />
  // <ProductDetails />
  <AppRouter />
  
  
);

