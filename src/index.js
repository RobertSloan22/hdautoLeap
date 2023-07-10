import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthProvider';
import { UserProvider } from './Context';
import { BalanceProvider } from './BalanceContext'; // Import BalanceProvider
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import CustomerEntry from './CustomerEntry';
import { CustomerProvider } from './CustomerContext'; // Import CustomerProvider
import Customers from './Customers'; // Import Customers
import Inspection from './Inspection';
import ListGroup from './ListGroup';
import ChatComponent from './ChatComponent'; // Import ChatComponent`
function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <NavBar/>
       
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
                  <Route path="/Login/" element={<Login />} />
                  <Route path="/CustomerEntry/" element={<CustomerEntry />} />
                  <Route path="/Customers/" element={<Customers />} /> {/* Add Customers route */} 
                  <Route path="/Inspection/" element={<Inspection />} /> {/* Add Inspection route */} 
                  <Route path="/ChatComponent/" element={<ChatComponent />} /> {/* Add WebcamCapture route */}
                  <Route path="/ListGroup/" element={<ListGroup />} /> {/* Add ListGroup route */}
                </Routes>
              </div>
            </BalanceProvider>
          </UserProvider> 
        </CustomerProvider>
       
      </AuthProvider>     
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
