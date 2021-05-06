import React, { useState } from 'react';
import SingleProduct from './singleProduct';
import SelectedProduct from './selectedProduct';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const ProductList = () => {
  const dataRef = firestore.collection('products');
  const ticketsRef = firestore
    .collection('tickets')
    .doc()
    .collection('products');
  const [data] = useCollectionData(dataRef);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [ticket, setTicket] = useState([]);
  const handleClickTicket = (finalProduct) => {
    const foundProduct = ticket.find(
      (ticketProduct) =>
        ticketProduct.idTicketProduct === finalProduct.idTicketProduct
    );
    if (foundProduct) {
      const productIndex = ticket.indexOf(foundProduct);
      console.log(productIndex);
      ticket.splice(productIndex);
      setTicket([...ticket, finalProduct]);
    } else {
      setTicket([...ticket, finalProduct]);
    }
  };
  const createTicket = async () => {
    ticket.map((product) => {
      ticketsRef.add({
        id: product.id,
        idTicketProduct: product.idTicketProduct,
        name: product.name,
        price: product.price,
        productQuantity: product.productQuantity,
        amount: product.amount,
      });
    });
  };
  let idTicketProduct = 0;
  const handleClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  return (
    <div>
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
      <table className='products-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            idTicketProduct = idTicketProduct + 1;
            return (
              <SelectedProduct
                key={idTicketProduct}
                product={product}
                handleClickTicket={handleClickTicket}
                idTicketProduct={idTicketProduct}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={() => createTicket()}>Save</button>
    </div>
  );
};

export default ProductList;
