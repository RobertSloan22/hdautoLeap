import React from 'react';
import { Link } from 'react-router-dom';
import CustomTooltip from './CustomTooltip';
import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Importing Bootstrap components
// import the styling from NavBar.css
import './NavBar.module.css';
function NavBar(){

    const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
  return(
    <>
    <div className="NavBar">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/Home/">Harlem & Division-Launch Pad</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <CustomTooltip tooltipText="MAIN DASHBOARD">
              <Nav.Link as={Link} to="/Home/">Harlem Division Auto Repair</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="New Customers">
              <Nav.Link as={Link} to="/CreateAccount/">Create Customer Portal</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Scheduling">
              <Nav.Link as={Link} to="/Deposit/">Appointments</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Estimate/inProgress-Invoices">
              <Nav.Link as={Link} to="/Withdraw/">Invoices</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Active Work">
              <Nav.Link as={Link} to="/ListGroup/">Invoices</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="All open Tickets and Active Work">
              <Nav.Link as={Link} to="/AllData/">AllData</Nav.Link>
            </CustomTooltip>
          </Nav.Item>  
          <Nav.Item>
            <CustomTooltip tooltipText="New Customer Setup ">
              <Nav.Link as={Link} to="/CustomerEntry/">CustomerEntry</Nav.Link>
            </CustomTooltip>
          </Nav.Item>    
          <Nav.Item>
            <CustomTooltip tooltipText="Customer Database">
              <Nav.Link as={Link} to="/Customers/">Customer data</Nav.Link>
            </CustomTooltip>
          </Nav.Item>     
          <Nav.Item>
            <CustomTooltip tooltipText="ChatComponent">
              <Nav.Link as={Link} to="/ChatComponent/">ChatComponent</Nav.Link>
            </CustomTooltip>
          </Nav.Item>   
          <Nav.Item>
            <CustomTooltip tooltipText="Digital Inspection Page">
              <Nav.Link as={Link} to="/Inspection/">Inspection</Nav.Link>
            </CustomTooltip>
          </Nav.Item>       
          <Nav.Item>
            <Nav.Link className="font-weight-bold text-align-right" disabled>{currentDateTime.toLocaleString()}</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <CustomTooltip tooltipText="Login to your Account">
              <Nav.Link as={Link} to="/Login/">Login to Account</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Logout from your account">
              <Nav.Link as={Link} to="/Logout/">Logout</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </>
  );
}

export default NavBar;
