import React, { useState } from "react";
import { UserContext } from './Context';

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([{name:'Robert Sloan',email:'rstechsolutionsmeco@gmail.com',password:'MIT',balance:500}]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
