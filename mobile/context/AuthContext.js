// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password, userType) => {
    try {
      let userData;
      if (userType === 'student') {
        console.log(userType);
        userData = await axios.post('http://10.24.70.217:8000/api/students/login', { email, password, userType });
      } else if (userType === 'faculty') {
        userData = await axios.post('http://10.24.70.217:8000/api/faculty/login', { email, password, userType });
      }
      console.log("Zian");
      console.log(userData.data);
      setUser(userData.data);
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw the error to be caught by the login component
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
