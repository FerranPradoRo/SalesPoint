import React from 'react';
import SingleProduct from './singleProduct';

const ProductsList = ({ data, handleClick }) => {
  return (
    <select>
      {data &&
        data.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
    </select>
  );
};

export default ProductsList;
