import React, { useState } from 'react';
import ProductsList from './productsList';
import SelectedProducts from './selectedProducts';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const SalesPoint = () => {
  const dataRef = firestore.collection('products');
  const [data] = useCollectionData(dataRef);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  const cleanSelectedProducts = () => {
    setSelectedProducts([]);
  };
  return (
    <div>
      <ProductsList data={data} handleClick={handleClick} />
      <SelectedProducts
        selectedProducts={selectedProducts}
        cleanSelectedProducts={cleanSelectedProducts}
      />
    </div>
  );
};

export default SalesPoint;
