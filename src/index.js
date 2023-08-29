import React from 'react';

import ReactDOM from 'react-dom';
import { AuthProvider } from './components/AuthProvider';
import { UserProvider } from './components/Context';
import { BalanceProvider } from './components/BalanceContext'; // Import BalanceProvider
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerEntry from './components/CustomerEntry';
import { CustomerProvider } from './components/CustomerContext'; // Import CustomerProvider
import Customers from './components/Customers'; // Import Customers
import Inspection from './components/Inspection';
import ChatGPT from './components/ChatGPT'; // Import ChatComponent`
import { BContextProvider } from './components/BContext'; // Import BcontextProvider
// Import the functions you need from the SDKs you need
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <NavBar/>
       <BContextProvider>
        <CustomerProvider> {/* Wrap your application with CustomerProvider */}
          <UserProvider> {/* Use UserProvider instead of UserContext.Provider */}
            <BalanceProvider>  {/* Wrap your Routes in BalanceProvider */}
              <div className="container" style={{padding: "20px"}}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home/" element={<Home />} />
                  <Route path="/CreateAccount/" element={<CreateAccount />} />
                  <Route path="/Deposit/" element={<Deposit />} />
                  <Route path="/Withdraw/" element={<Withdraw />} />
                  <Route path="/AllData/" element={<AllData />} />
                  <Route path="/CustomerEntry/" element={<CustomerEntry />} />
                  <Route path="/Customers/" element={<Customers />} /> {/* Add Customers route */} 
                  <Route path="/Inspection/" element={<Inspection />} /> {/* Add Inspection route */} 
                  <Route path="/ChatGPT/" element={<ChatGPT />} /> {/* Add WebcamCapture route */}
                </Routes>
              </div>
            </BalanceProvider>
          </UserProvider> 
        </CustomerProvider>
        </BContextProvider>
      </AuthProvider>     
    </HashRouter>
  </React.StrictMode>,



document.getElementById('root')
);
