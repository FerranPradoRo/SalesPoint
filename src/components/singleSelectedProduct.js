import React, { useState, useEffect } from 'react';

const SingleSelectedProduct = ({ product, handleClick, idTicketProduct }) => {
  const { id, name, price } = product;
  const [productQuantity, setProductQuantity] = useState(1);
  const [isInput, setIsInput] = useState(false);
  const [amount, setAmount] = useState(price);
  useEffect(() => {
    handleClick({
      id,
      idTicketProduct,
      name,
      price,
      productQuantity,
      amount,
    });
  }, [amount]);
  return (
    <div className='products-table-row'>
      <p>{name}</p>
      {isInput ? (
        <div>
          <form
            onSubmit={() => {
              setIsInput(false);
              setAmount(price * productQuantity);
            }}
          >
            <input
              className='quantity-input'
              type='number'
              value={productQuantity}
              onChange={(e) => {
                setProductQuantity(e.target.value);
              }}
              autoFocus='autoFocus'
              onFocus={(e) => e.target.select()}
            />
          </form>
        </div>
      ) : (
        <p onClick={() => setIsInput(true)}>{productQuantity}</p>
      )}
      <p>{amount.toLocaleString('en-US')}</p>
    </div>
  );
};

export default SingleSelectedProduct;
