import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ClassNavbar() {
  const { classId } = useParams();
  const navigate = useNavigate();
  const AttendanceCardNav = () => {
    navigate(`/attendance/${classId}`)
  }
<<<<<<< HEAD
  const StudentCardNav = () => {
    navigate(`/students/${classId}`)
=======
  const studentList = () => {
    navigate(`/students/class/${classId}`)
>>>>>>> refs/remotes/origin/main
  }
  return (
    <div className="ml-5 flex flex-row gap-7 p-5">
      <h2 className="bg-gray-500 p-2 rounded-lg text-white" onClick={AttendanceCardNav}>
        Attendance
      </h2>
      <h2 className="bg-gray-500 p-2 rounded-lg text-white" onClick={studentList}>
        Students
      </h2>
    </div>
  )
}

export default ClassNavbar