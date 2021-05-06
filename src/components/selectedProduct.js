import React, { useState, useEffect } from 'react';

const SelectedProduct = ({ product, handleClickTicket, idTicketProduct }) => {
  const { id, name, price } = product;
  const [productQuantity, setProductQuantity] = useState(1);
  const [isInput, setIsInput] = useState(false);
  const [amount, setAmount] = useState(price);
  useEffect(() => {
    handleClickTicket({
      id,
      idTicketProduct,
      name,
      price,
      productQuantity,
      amount,
    });
  }, [amount]);
  return (
    <tr>
      <td className='products-table-name'>{name}</td>
      {isInput ? (
        <td>
          <form
            onSubmit={() => {
              setIsInput(false);
              setAmount(price * productQuantity);
            }}
          >
            <input
              type='number'
              value={productQuantity}
              onChange={(e) => {
                setProductQuantity(e.target.value);
              }}
              autoFocus='autoFocus'
              onFocus={(e) => e.target.select()}
            />
          </form>
        </td>
      ) : (
        <td onClick={() => setIsInput(true)}>{productQuantity}</td>
      )}
      <td>{amount}</td>
    </tr>
  );
};

export default SelectedProduct;
