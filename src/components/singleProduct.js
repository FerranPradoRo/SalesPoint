import React, { useState } from 'react';

const SingleProduct = ({ product, handleClick }) => {
  const { id, name, price } = product;
  return (
    <option
      value={id}
      className='single-product'
      onClick={() => handleClick(product)}
    >
      {name} : {price}
    </option>
  );
};

export default SingleProduct;
