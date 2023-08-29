import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomTooltip from './CustomTooltip';
import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Importing Bootstrap components
import axios from 'axios';

const inspectionItems = Array(35).fill().map((_, i) => `Item ${i + 1}`);

const Inspection = () => {
  const [inspectionStatus, setInspectionStatus] = useState({});
  const [severity, setSeverity] = useState({});
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });
  const [vehicleInfo, setVehicleInfo] = useState({ make: '', model: '', year: '' });

  const handleStatusChange = (item, status) => {
    setInspectionStatus(prevStatus => ({ ...prevStatus, [item]: status }));
  };

  const handleSeverityChange = (item, value) => {
    setSeverity(prevSeverity => ({ ...prevSeverity, [item]: value }));
  };

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleVehicleInfoChange = (e) => {
    setVehicleInfo({ ...vehicleInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h5 className="mb-4">Inspection</h5>
      <Form>
        <Form.Group controlId="customerInfo">
          <Form.Label>Customer Information</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" value={customerInfo.name} onChange={handleCustomerInfoChange} />
          <Form.Control type="email" placeholder="Email" name="email" value={customerInfo.email} onChange={handleCustomerInfoChange} />
          <Form.Control type="tel" placeholder="Phone" name="phone" value={customerInfo.phone} onChange={handleCustomerInfoChange} />
        </Form.Group>
        <Form.Group controlId="vehicleInfo">
          <Form.Label>Vehicle Information</Form.Label>
          <Form.Control type="text" placeholder="Make" name="make" value={vehicleInfo.make} onChange={handleVehicleInfoChange} />
          <Form.Control type="text" placeholder="Model" name="model" value={vehicleInfo.model} onChange={handleVehicleInfoChange} />
          <Form.Control type="text" placeholder="Year" name="year" value={vehicleInfo.year} onChange={handleVehicleInfoChange} />
        </Form.Group>
      </Form>
      {inspectionItems.map((item, index) => (
        <div key={index} className="mb-3">
          <div>{item}</div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="Good" id={`${item}-good`} checked={inspectionStatus[item] === 'Good'} onChange={() => handleStatusChange(item, 'Good')} />
            <label className="form-check-label" htmlFor={`${item}-good`}>Good</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="OK" id={`${item}-ok`} checked={inspectionStatus[item] === 'OK'} onChange={() => handleStatusChange(item, 'OK')} />
            <label className="form-check-label" htmlFor={`${item}-ok`}>OK</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="Bad" id={`${item}-bad`} checked={inspectionStatus[item] === 'Bad'} onChange={() => handleStatusChange(item, 'Bad')} />
            <label className="form-check-label" htmlFor={`${item}-bad`}>Bad</label>
          </div>
          <label htmlFor={`${item}-severity`} className="form-label">Severity</label>
          <input type="range" className="form-range" id={`${item}-severity`} value={severity[item] || 0} onChange={(e) => handleSeverityChange(item, e.target.value)} />
        </div>
      ))}
    </div>
  );
};

export default Inspection;
