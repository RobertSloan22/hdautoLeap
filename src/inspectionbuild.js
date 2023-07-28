import React, { useState, useEffect } from 'react';
import './Inspection.module.css';

const inspectionItems = Array(25).fill().map((_, i) => `Item ${i + 1}`);

function Inspection() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    customer: '',
    date: '',
    vehicle: '',
    complaint: '',
    lastName: '',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    setAppointments([...appointments, form]);
    setForm({
      customer: '',
      date: '',
      vehicle: '',
      complaint: '',
      lastName: '',
    });
  }

  const [inspectionStatus, setInspectionStatus] = useState({});
  const [severity, setSeverity] = useState({});

  const handleStatusChange = (item, status) => {
    setInspectionStatus(prevStatus => ({ ...prevStatus, [item]: status }));
  };

  const handleSeverityChange = (item, value) => {
    setSeverity(prevSeverity => ({ ...prevSeverity, [item]: value }));
  };
  // The content in the return statement below is what will be rendered to the screen should be shown using the bootstrap styling of hero, container, card, etc.
    return (

      <div className="hero">
        <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis">HD-Auto Inspection Portal</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Digital inspection tool.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Select Customer</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Select Vehicle</button>
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Select Mechanic </button>
        

      </div>
    </div>
  </div>

  <div className="b-example-divider"></div>

            <div className="grid-container">
        <div className="card text-center">
          <h5 className="card-title">{currentDateTime.toLocaleString()}</h5>
          <h1>HD-Auto-Data Platform </h1>
          <p className="lead"></p>
          <a href="#/Login/" className="btn btn-primary">Go to Account </a>
        </div>
      

        <form onSubmit={handleSubmit}>
          <input name="customer" placeholder="Customer" value={form.customer} onChange={handleInputChange} required />
          <div className="b-example-divider"></div>
          <input type="date" name="date" placeholder="Date" value={form.date} onChange={handleInputChange} required />
          <input name="vehicle" placeholder="Vehicle" value={form.vehicle} onChange={handleInputChange} required />
          <input name="complaint" placeholder="Complaint" value={form.complaint} onChange={handleInputChange} required />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleInputChange} required />
          <button type="submit">Schedule Appointment</button>
        </form>

        <h2>Scheduled Appointments</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {appointment.customer}, {appointment.date}, {appointment.vehicle}, {appointment.complaint}, {appointment.lastName}
            </li>
          ))}
        </ul>

        <div className="card-body">
          <h1> </h1>
          <h5 className="mb-4">Inspection-Items</h5>
        </div>
        <div className="hero">
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
      </div>
    </div>
    );
  }

export default Inspection;