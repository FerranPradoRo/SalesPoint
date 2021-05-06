import React, { useState } from 'react';

const SelectedProduct = ({ product }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isInput, setIsInput] = useState(false);
  return (
    <div>
      <p onClick={() => setIsInput(true)}>{product.name}</p>
      {isInput ? (
        <form onSubmit={() => setIsInput(false)}>
          <input
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            autoFocus='autoFocus'
            onFocus={(e) => e.target.select()}
          />
        </form>
      ) : (
        <span onClick={() => setIsInput(true)}>{productQuantity}</span>
      )}
    </div>
  );
};

export default SelectedProduct;
