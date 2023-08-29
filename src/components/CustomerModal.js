import React, { useState } from 'react';

const CustomerModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/customers');
      const json = await response.json();
      setCustomers(json);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div>
      <button onClick={fetchData}>Show Customers</button>
      {showModal && (
        <div className="modal">
          <button onClick={closeModal}>Close</button>
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>{customer.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerModal;
