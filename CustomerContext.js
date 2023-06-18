import React, { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
};
