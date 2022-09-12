/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, id) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
