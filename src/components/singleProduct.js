import React from 'react';

const SingleProduct = ({ product, handleClick }) => {
  const { name, price } = product;
  return (
    <div className='single-product' onClick={() => handleClick(product)}>
      <p>{name}</p>
      <p>$ {price.toLocaleString('en-US')}</p>
    </div>
  );
};

export default SingleProduct;
