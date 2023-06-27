import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

function Home() {
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
  };

  return (
    <div className={styles.container} style={{ marginTop: '20px' }}>
      <div className={styles.item1}>
        <div className="card text-center">
          <h5 className="card-title">{currentDateTime.toLocaleString()}</h5>
          <h1>HD-Auto-Data Platform </h1>
          <p className="lead"></p>
          <a href="#/Login/" className="btn btn-primary">Go to Account </a>
        </div>
      </div>
      <div className={styles.item3}>
        {/* Add content for item2 here */}
      </div>
      <div className={styles.item2}>
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
      </div>
      <div className={styles.item4}>
 <a href="https://robertsloan22.github.io/RobertSloan22.io" className="btn btn-primary"> Robert Sloan Webpage 1 </a>
        <a href="https://robertsloan22.github.io/PatrickSloanPhotography.io" className="btn btn-primary">Patrick Sloan's Photography Website</a>

        <a href="https://robertsloan22.github.io/ISS-realtime-location" className="btn btn-primary">International Space Station Real Time Tracker </a>

        <a href="https://robertsloan22.github.io/PatrickSloanPhotography.io" className="btn btn-primary">Patrick Sloan's Photography Website</a>


        <a href="https://robertsloan22.github.io/HappyMothersday" className="btn btn-primary">Happy Mothersday </a>
        <a href="https://robertsloan22.github.io/projects001" className="btn btn-primary">Resource Tool and Project Showcase RobertSloan </a>
        <a href="https://robertsloan22.github.io/harlemdivisionautorepair" className="btn btn-primary">Harlem Division Auto Repair Website Version 0.1</a>

        <a href="https://robertsloan22.github.io/ISS-realtime-location" className="btn btn-primary">Go to Account </a>
        <a href="#//" className="btn btn-primary">Go to Account </a>
      </div><div className="card-body">
        <h5 className="card-title">{currentDateTime.toLocaleString()}</h5>
        <h1>HD-Auto-Data Platform </h1>
        <p className="lead"></p>
        <a href="https://robertsloan22.github.io/ISS-realtime-location" className="btn btn-primary">Go to Account </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{currentDateTime.toLocaleString()}</h5>
        <h1>HD-Auto-Data Platform </h1>
        <p className="lead"></p>
        <a href="https://robertsloan22.github.io/ISS-realtime-location" className="btn btn-primary">Go to Account </a>
      </div>
    </div>
  );
}

export default Home;
