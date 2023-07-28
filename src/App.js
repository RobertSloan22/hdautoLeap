import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import Login from './Login';
import CustomerEntry from './CustomerEntry';
import Customers from './Customers'; // Import Customers
import Inspection from './Inspection'; // Import Inspection
import { AuthProvider } from './AuthProvider';
import { UserProvider } from './Context';
import { BalanceProvider } from './BalanceContext';
import { CustomerProvider } from './CustomerContext';
import ChatGPT from './ChatGPT'; // Import ChatGPT 
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <NavBar/>
        <CustomerProvider>
          <UserProvider>
            <BalanceProvider>
              <div className="container" style={{padding: "20px"}}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home/" element={<Home />} />
                  <Route path="/CreateAccount/" element={<CreateAccount />} />
                  <Route path="/Deposit/" element={<Deposit />} />
                  <Route path="/Withdraw/" element={<Withdraw />} />
                  <Route path="/AllData/" element={<AllData />} />
                  <Route path="/Login/" element={<Login />} />
                  <Route path="/CustomerEntry/" element={<CustomerEntry />} />
                  <Route path="/Customers/" element={<Customers />} />
                  <Route path="/Inspection/" element={<Inspection />} />
                  <Route path="/ChatGPT/" element={<ChatGPT />} />
                </Routes>
              </div>
            </BalanceProvider>
          </UserProvider>
        </CustomerProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
