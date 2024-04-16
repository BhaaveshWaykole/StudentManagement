import React from 'react';
import { useAuth } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    // You may perform additional logout-related actions here, such as redirecting to the login page
    navigate('/')
  };

  const createClassHandle = () => {
    // You may perform additional logout-related actions here, such as redirecting to the login page
    navigate('/createclassroom')
  };

  return (
    <div className='bg-gray-400 h-16 flex flex-row align-center justify-between'>
      <div className="name font-poppins-800 w-fit h-full p-5 text-2xl">
        <a href="/">
          <h1 className="text-bold">LMS</h1>
        </a>
      </div>
      <div className="flex ">
        {user && user.role === 'faculty' && (
          <div className="items-center flex mx-5">
            <button className='p-1 rounded-md bg-yellow-500' onClick={createClassHandle}>Create Class</button>
          </div>
        )}
        <div className='profile flex flex-row mr-2 pt-2'>
          <a href="/profile"> {/* Redirect to profile page */}
            <img src="profilePic.jpeg" alt="ProfilePic" className='rounded-full h-12 w-12' />
          </a>
        </div>
        <div className="items-center flex mx-5">
          <button className='p-1 rounded-md bg-yellow-500' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
