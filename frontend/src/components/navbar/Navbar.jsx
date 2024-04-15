import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-gray-400 h-16 flex flex-row align-center justify-between'>
      <div className="name font-poppins-800 w-fit h-full p-5 text-2xl">
        {/* redirect to home page  */}
        <a href="">
          <h1 className="text-bold">LMS</h1>
        </a>
      </div>
      <div className="flex ">
        <div className="items-center flex mx-5">
          <button className='p-1 rounded-md bg-yellow-500'>Create Class</button>
        </div>
        <div className='profile flex flex-row mr-2 pt-2'>
          {/* redirect to profile page */}
          <a href="">
            <img src="profilePic.jpeg" alt="ProfilePic" className='rounded-full h-12 w-12' />
          </a>
        </div>
      </div>
    </div>
  )
}