import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (id, userType) => {
    try {
      let userData;
      if (userType === 'student') {
        userData = await axios.get(`/api/student/${id}`);
      } else if (userType === 'faculty') {
        userData = await axios.get(`/api/faculty/${id}`);
      }
      setUser(userData.data);
    } catch (error) {
      console.error('Login failed:', error);
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
