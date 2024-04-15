import React from 'react'
import { Link } from 'react-router-dom';

function ClassNavbar() {
  return (
    <div className="ml-5 flex flex-row gap-7 p-5">
      <Link to="/attendance">
        <h2 className="bg-gray-500 p-2 rounded-lg text-white">
          Attendance
        </h2>
      </Link>
      <Link to="/students">
        <h2 className="bg-gray-500 p-2 rounded-lg text-white">
          Students
        </h2>
      </Link>
    </div>
  )
}

export default ClassNavbar