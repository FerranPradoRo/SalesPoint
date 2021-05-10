import React, { useState } from 'react';
import ProductsList from './productsList';
import SelectedProducts from './selectedProducts';

const SalesPoint = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  const cleanSelectedProducts = () => {
    setSelectedProducts([]);
  };
  return (
    <div>
      <ProductsList handleClick={handleClick} />
      <SelectedProducts
        selectedProducts={selectedProducts}
        cleanSelectedProducts={cleanSelectedProducts}
      />
    </div>
  );
};

export default SalesPoint;
