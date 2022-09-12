/* eslint-disable react/prop-types */
import React from 'react';
import Counter from './Counter';

const Product = ({ product }) => {
  const { image, title, price, rating, description } = product;
  return (
    <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">Price: $ {price}</p>
        <p className="product__rating">Rating: {rating.rate}/5</p>
        <p className="product__desc">Description: {description}</p>
        <span className="text-primary pb-4 fs-5">
          Quentity: <span className="text-light">{<Counter />}</span>
        </span>
        <button className="product__btn btn-card">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
