import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from '../productdetailsingle/productdeets';
import ProductListing from '../productdetail/App';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
