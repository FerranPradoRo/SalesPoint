import React from 'react';
import SingleProduct from './singleProduct';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const ProductsList = ({ handleClick }) => {
  const dataRef = firestore.collection('products');
  const [data] = useCollectionData(dataRef);
  return (
    <div className='products-list'>
      {data &&
        data.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};

export default ProductsList;
