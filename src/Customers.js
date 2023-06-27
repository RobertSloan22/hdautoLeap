import React, { useContext, useState } from 'react';
import { CustomerContext } from './CustomerContext';
import { Modal, Button } from 'react-bootstrap';

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const { customers } = useContext(CustomerContext);

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
            <p><strong>Vehicle VIN:</strong> {selectedCustomer.vehicleVIN}</p>
            <p><strong>Vehicle Year:</strong> {selectedCustomer.vehicleYear}</p>
            <p><strong>Vehicle Make:</strong> {selectedCustomer.vehicleMake}</p>
            <p><strong>Vehicle Model:</strong> {selectedCustomer.vehicleModel}</p>
            <p><strong>Vehicle Mileage:</strong> {selectedCustomer.vehicleMileage}</p>
            <p><strong>Vehicle Engine:</strong> {selectedCustomer.vehicleEngine}</p>
            <p><strong>Phone Number:</strong> {selectedCustomer.phoneNumber}</p>
            <p><strong>Email:</strong> {selectedCustomer.email}</p>
            <p><strong>Address:</strong> {selectedCustomer.address}</p>
            <p><strong>City:</strong> {selectedCustomer.city}</p>
            <p><strong>State:</strong> {selectedCustomer.state}</p>
            <p><strong>Zip Code:</strong> {selectedCustomer.zipCode}</p>
            <p><strong>Country:</strong> {selectedCustomer.country}</p>
            <p><strong>Notes:</strong> {selectedCustomer.notes}</p>
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
