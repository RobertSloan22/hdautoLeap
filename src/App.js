import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import Login from './components/Login';
import CustomerEntry from './components/CustomerEntry';
import Customers from './components/Customers'; // Import Customers
import Inspection from './components/Inspection'; // Import Inspection
import { AuthProvider } from './components/AuthProvider';
import { UserProvider } from './components/Context';
import { BalanceProvider } from './components/BalanceContext';
import { CustomerProvider } from './components/CustomerContext';
import ChatGPT from './components/ChatGPT'; // Import ChatGPT 
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <NavBar/>
        <ChatGPT/>
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
