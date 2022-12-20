import { createContext } from "react";
import React, { useEffect, useState } from "react";


export const UserContext = createContext({ name: '', email:'', auth: false });
// This also works: const UserContext = createContext();

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    
    const [user, setUser] = useState({ name: '', email:'', auth: false });

  
    // Login updates the user data with a name parameter
    const login = (name, email) => {
      setUser((user) => ({
        name: name,
        email: email,
        auth: true,
      }));
      console.log('safe dkhalna');
    };
  
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        name: '',
        email: '',
        auth: false,
      }));
      console.log('safe khrajna');

    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }
export default UserProvider;
