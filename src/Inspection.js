// Create a component named Inspection that is a functional component for doing automotive inspections using react and bootstrap styling. 
// This component should have a form that allows the user to enter the customer's information and the vehicle's information.
// This component should also have a 25 point inspection checklist that the user can check off as they inspect the vehicle.


import React, { useState } from 'react';
// import the styling from Inspection.css
import './Inspection.module.css';
const inspectionItems = Array(35).fill().map((_, i) => `Item ${i + 1}`);

const Inspection = () => {
  const [inspectionStatus, setInspectionStatus] = useState({});
  const [severity, setSeverity] = useState({});

  const handleStatusChange = (item, status) => {
    setInspectionStatus(prevStatus => ({ ...prevStatus, [item]: status }));
  };

  const handleSeverityChange = (item, value) => {
    setSeverity(prevSeverity => ({ ...prevSeverity, [item]: value }));
  };

  return (
    <div className="container">   
    <div className="card-body">
      <h1>HD-Auto-Data Platform </h1>
      <h5 className="mb-4">Inspection-Items</h5>
    </div>
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
