import React, { useState } from 'react';
import SingleSelectedProduct from './singleSelectedProduct';
import { useCreateTicket } from '../hooks/useCreateTicket';
import Loading from './loading';

const SelectedProducts = ({ selectedProducts, cleanSelectedProducts }) => {
  const [ticket, setTicket] = useState([]);
  const handleClick = (finalProduct) => {
    const foundProduct = ticket.find(
      (ticketProduct) =>
        ticketProduct.idTicketProduct === finalProduct.idTicketProduct
    );
    if (foundProduct) {
      const productIndex = ticket.indexOf(foundProduct);
      ticket.splice(productIndex);
      setTicket([...ticket, finalProduct]);
    } else {
      setTicket([...ticket, finalProduct]);
    }
  };
  const [createTicket, isLoading] = useCreateTicket(
    ticket,
    cleanSelectedProducts
  );
  let idTicketProduct = 0;
  return (
    <>
      <div className='selected-products-table'>
        <div className='products-table-row table-head'>
          <p>Name</p>
          <p>Quantity</p>
          <p>Amount</p>
        </div>
        <div>
          {selectedProducts.map((product) => {
            idTicketProduct = idTicketProduct + 1;
            return (
              <SingleSelectedProduct
                key={idTicketProduct}
                product={product}
                handleClick={handleClick}
                idTicketProduct={idTicketProduct}
              />
            );
          })}
        </div>
      </div>
      <button
        className='btn'
        onClick={() => createTicket(ticket, cleanSelectedProducts)}
      >
        Save
      </button>
      {isLoading && <Loading />}
    </>
  );
};

export default SelectedProducts;
