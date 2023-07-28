import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { CustomerContext } from './CustomerContext';

const CustomerEntry = () => {
  const { addCustomer } = useContext(CustomerContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      vehicle: '',
      phoneNumber: '',
      vehicleVIN: '',
      vehicleYear: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleMileage: '',
      vehicleEngine: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      notes: ''
    },
    onSubmit: async values => {
      if (Object.values(values).some(value => value === "")) {
        setErrorMessage('All fields are required.');
        setSuccessMessage('');
      } else {
        try {
          const response = await fetch('http://localhost:3001/api/customers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            const data = await response.json();
            // Add customer to context
            addCustomer(data.customer);

            setSuccessMessage('Customer added successfully');
            setErrorMessage('');
            formik.resetForm();
          } else {
            const error = await response.json();
            setErrorMessage(error.message);
            setSuccessMessage('');
          }
        } catch (error) {
          console.error('Error:', error);
          setErrorMessage('An error occurred while adding the customer.');
          setSuccessMessage('');
        }
      }
    },
  });


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
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            {/* Adding all other fields similarly */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
            {/* Rest of the fields would be created in the similar manner */}
            <div className="form-group">
              <label htmlFor="vehicle">Vehicle</label>
              <input
                type="text"
                className="form-control"
                id="vehicle"
                value={formik.values.vehicle}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleVIN">Vehicle VIN</label>
              <input
                type="text"
                className="form-control"
                id="vehicleVIN"
                value={formik.values.vehicleVIN}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleYear">Vehicle Year</label>
              <input
                type="number"
                className="form-control"
                id="vehicleYear"
                value={formik.values.vehicleYear}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleMake">Vehicle Make</label>
              <input
                type="text"
                className="form-control"
                id="vehicleMake"
                value={formik.values.vehicleMake}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleModel">Vehicle Model</label>
              <input
                type="text"
                className="form-control"
                id="vehicleModel"
                value={formik.values.vehicleModel}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleMileage">Vehicle Mileage</label>
              <input
                type="number"
                className="form-control"
                id="vehicleMileage"
                value={formik.values.vehicleMileage}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleEngine">Vehicle Engine</label>
              <input
                type="text"
                className="form-control"
                id="vehicleEngine"
                value={formik.values.vehicleEngine}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                className="form-control"
                id="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Customer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerEntry;
