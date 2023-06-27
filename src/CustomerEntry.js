import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomerContext } from './CustomerContext'; // Importing CustomerContext

const CustomerEntry = () => {
  const { addCustomer } = useContext(CustomerContext); // Use addCustomer from CustomerContext
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [vehicleVIN, setVehicleVIN] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [vehicleEngine, setVehicleEngine] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  //add form fields for email, address, city, state, zip code, country, and notes
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [notes, setNotes] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
// once customer is added , use the setSuccessMessage to display a success message
  const handleCustomerEntry = () => {
    if (!firstName || !lastName || !vehicle || !phoneNumber || !vehicleVIN || !vehicleYear || !vehicleMake || !vehicleModel || !vehicleMileage || !vehicleEngine) {
      setErrorMessage('All fields are required.');
      if (successMessage) {
        setSuccessMessage('');
      }
    } else {
      addCustomer({ 
        firstName, 
        lastName, 
        vehicle, 
        phoneNumber, 
        vehicleVIN, 
        vehicleYear, 
        vehicleMake, 
        vehicleModel, 
        vehicleMileage, 
        vehicleEngine, 
        email, 
        address, 
        city, 
        state, 
        zipCode, 
        country, 
        notes 
      });
      
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
              <label htmlFor="vehicle VIN">VIN</label>
              <input
                type="text" 
                className="form-control"
                id="vehicleVIN"
                value={vehicleVIN}
                onChange={(e) => setVehicleVIN(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleYear">Year</label>
              <input
                type="text"
                className="form-control"
                id="vehicleYear"
                value={vehicleYear}
                onChange={(e) => setVehicleYear(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleMake">Make</label>
              <input
                type="text"
                className="form-control"
                id="vehicleMake"
                value={vehicleMake}
                onChange={(e) => setVehicleMake(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleModel">Model</label>
              <input
                type="text"
                className="form-control"
                id="vehicleModel"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleMileage">Mileage</label>
              <input
                type="text"
                className="form-control"
                id="vehicleMileage"
                value={vehicleMileage}
                onChange={(e) => setVehicleMileage(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleEngine">Engine</label>
              <input
                type="text"
                className="form-control"
                id="vehicleEngine"
                value={vehicleEngine}
                onChange={(e) => setVehicleEngine(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"  
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <input
                type="text"
                className="form-control"
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}  
              />
            </div>
        

          


            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCustomerEntry}
              disabled={!firstName || !lastName || !vehicle || !phoneNumber || !email || !address || !city || !state || !zipCode || !country || !notes  }
            >
              Add Customer
            </button>
          </form>

          
          <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
        </div>
      </div>
    </div>
  )
}

export default CustomerEntry;
