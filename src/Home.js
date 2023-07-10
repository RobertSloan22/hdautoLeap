import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Iframe from './Iframe';
import Iframe2 from './Iframe2';
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
          <a href="https://robertsloan22.github.io/harlemdivisionautorepair" className="btn btn-primary">Harlem & Division Auto Repair Public Website </a>

        </div>
      </div>
      <div className={styles.item3}>
        < Iframe/>
        <div className="b-example-divider"></div>
        < Iframe2/>
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
      <a href="https://robertsloan22.github.io/harlemdivisionautorepair" className="btn btn-primary">Harlem Division Auto Repair Website Version 0.1</a>

        <a href="https://auth.deployscript.com/portal" className="btn btn-primary">Deploy Script </a>
        <a href="https://dev.azure.com/sloanaf2016/?acquisitionId=8f6bb7e9-a1ac-407f-ad48-b5b0c53d8046&acquisition=true" className="btn btn-primary">AZURE DASHBOARD</a>
        <a href="https://cloud.digitalocean.com/projects/40a8ad5d-1307-4e78-8258-e0c0005e101a/resources?i=f3b5b7" className="btn btn-primary">DIGITAL OCEAN DASHBOARD </a>
        <a href="https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#" className="btn btn-primary">AMAZON WEB SERVICES CONSOLE </a>
        <a href="https://chat.openai.com/?model=gpt-4-plugins" className="btn btn-primary">CHATGPT-4 DEVELOPER CONSOLE </a>
        <a href="https://lucid.app/documents#/documents?folder_id=home" className="btn btn-primary">LUCIDCHART DASHBOARD </a>
        <a href="https://classroom.emeritus.org/courses/1480/modules" className="btn btn-primary">M.I.T DASHBOARD</a>
        <a href="https://github.com/RobertSloan22" className="btn btn-primary">GITHUB-ROBERTSLOAN22</a>


      </div><div className="card-body">
        <h5 className="card-title">{currentDateTime.toLocaleString()}</h5>
        <h1>HD-Auto-Data Platform </h1>
        <p className="lead"></p>
        <a href="https://robertsloan22.github.io/ISS-realtime-location" className="btn btn-primary">Go to Account </a>
      </div>
    
    </div>
  );
}

export default Home;
