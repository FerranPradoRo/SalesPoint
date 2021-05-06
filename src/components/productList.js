import React, { useState } from 'react';
import { data } from '../data/data';
import SingleProduct from './singleProduct';
import SelectedProduct from './selectedProduct';

const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  return (
    <div>
      <select>
        {data.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </select>
      {console.log(selectedProducts)}
      {selectedProducts.map((product) => (
        <SelectedProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
