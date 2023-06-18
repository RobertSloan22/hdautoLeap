import React, { useContext, useState } from 'react';
import { CustomerContext } from './CustomerContext';
import { Modal, Button } from 'react-bootstrap';

const Customers = () => {
  const { customers } = useContext(CustomerContext);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleShowDetails = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleClose = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="container mt-4">
      <h5 className="mb-4">Customers</h5>
      {customers.map((customer, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{customer.firstName} {customer.lastName}</h5>
            <Button variant="primary" onClick={() => handleShowDetails(customer)}>
              Show Details
            </Button>
          </div>
        </div>
      ))}

      {selectedCustomer && (
        <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Customer Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>First Name:</strong> {selectedCustomer.firstName}</p>
            <p><strong>Last Name:</strong> {selectedCustomer.lastName}</p>
            <p><strong>Vehicle:</strong> {selectedCustomer.vehicle}</p>
            <p><strong>Phone Number:</strong> {selectedCustomer.phoneNumber}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Customers;
