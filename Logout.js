// Logout.js
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './Context';

function Logout() {
  const ctx = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    // Clear user data from context
    ctx.setUser(null);
    history.push('/Login/');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
