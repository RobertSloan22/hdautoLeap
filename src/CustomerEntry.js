import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomerContext } from './CustomerContext'; // Importing CustomerContext

const CustomerEntry = () => {
  const { addCustomer } = useContext(CustomerContext); // Use addCustomer from CustomerContext
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCustomerEntry = () => {
    if (!firstName || !lastName || !vehicle || !phoneNumber) {
      setErrorMessage('All fields are required.');
    } else {
      addCustomer({ firstName, lastName, vehicle, phoneNumber }); // Use addCustomer function from CustomerContext
      setSuccessMessage('Customer added successfully.');
      setFirstName('');
      setLastName('');
      setVehicle('');
      setPhoneNumber('');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Customer Entry</h5>
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle">Vehicle</label>
              <input
                type="text"
                className="form-control"
                id="vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCustomerEntry}
              disabled={!firstName || !lastName || !vehicle || !phoneNumber}
            >
              Add Customer
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerEntry;
