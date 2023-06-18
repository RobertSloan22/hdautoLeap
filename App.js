import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import { UserContext } from './Context';
import { BalanceContext } from './BalanceContext'; // import BalanceProvider
import  Login from './Login';
import { CustomerContext } from './CustomerContext';
import CustomerEntry from './CustomerEntry';



function App() {
  const [users, setUsers] = useState([{name:'Robert Sloan',email:'rstechsolutionsmeco@gmail.com',password:'MIT',balance:500}]);

  return (
    <Router>
      <UserContext.Provider value={{users, setUsers}}>
        <CustomerContext>
        <BalanceContext> { /* Wrap your Routes in BalanceProvider */}
          <NavBar />
          <div className="container" style={{padding: "20px"}}>
            
            <Route path="/" exact component={Home} />
            <Route path="/Home/" component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Deposit/" component={Deposit} />
            <Route path="/Withdraw/" component={Withdraw} />
            <Route path="/Login/" component={Login} />
            <Route path="/AllData/" component={AllData} />
            <Route path="/CustomerEntry/" component={CustomerEntry} />
          </div>
        </BalanceContext> {/* end of BalanceProvider */}
        </CustomerContext>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
