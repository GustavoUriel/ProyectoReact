import React, { useState, useContext } from 'react';
export const OrderDeleteContext = React.createContext();

export function useOrderDelete() {
  return useContext(OrderDeleteContext);}
  
  export function CartContext({ children }) {
  const [order, setOrder] = useState([]);
  
  const deleteOrderItem = (i) => {
    let tmp = [...order];
    tmp.splice(i, 1);
    console.log(tmp);
    setOrder(tmp);
  };

  return (
          <OrderDeleteContext.Provider value={deleteOrderItem}>
            {children}
          </OrderDeleteContext.Provider>
  );
}
