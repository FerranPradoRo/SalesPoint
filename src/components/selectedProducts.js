import React, { useState } from 'react';
import SingleSelectedProduct from './singleSelectedProduct';
import { useCreateTicket } from '../hooks/useCreateTicket';

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
              <SingleSelectedProduct
                key={idTicketProduct}
                product={product}
                handleClick={handleClick}
                idTicketProduct={idTicketProduct}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={() => createTicket(ticket, cleanSelectedProducts)}>
        Save
      </button>
    </>
  );
};

export default SelectedProducts;
