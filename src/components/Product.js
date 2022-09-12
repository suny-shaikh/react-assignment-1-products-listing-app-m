/* eslint-disable react/prop-types */
import React from 'react';
import Counter from './Counter';

const Product = ({ product }) => {
  const { image, title, price, rating, description } = product;
  return (
    <article className="card">
      <img src={image} className="card-img-top" alt="Product" />
      <div className="card-body bg-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-primary fs-5 font-500">Price: $ {price}</p>
        <p className="card-text">Rating: {rating.rate}/5</p>
        <div className="rounded text-center py-2 w-50 bg-primary bg-opacity-25">{<Counter />}</div>
        <p className="card-text mt-3 mb-5">Description: {description}</p>
        <button className="btn btn-primary w-100 shadow">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
