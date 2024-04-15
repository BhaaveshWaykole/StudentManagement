import React, { useRef } from 'react';
import { useAuth } from '../../context/AuthContext.js';

import './Login.css'

export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userTypeRef = useRef(null);
  const { login } = useAuth()

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userType = userTypeRef.current.value;

    // Assuming you have a method to validate user input before sending the request
    if (!email || !password) {
      console.error('Please enter email and password');
      return;
    }

    try {
      // Call the login method with email, password, and user type
      await login(email, password, userType);
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <select
        className="dropdown border-black border-2 mt-5 p-1 rounded-md"
        ref={userTypeRef}
      >
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <div className="inputs">
        <div className="input">
          <img src="email.png" alt="" />
          <input type="email"
            placeholder="Email Id"
            ref={emailRef}
          />
        </div>
        <div className="input">
          <img src="password.png" alt="" />
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
      </div>
      <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login;
