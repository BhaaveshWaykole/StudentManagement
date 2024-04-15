import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/classcard/ClassCard.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.js';

export default function Home() {
  const navigate = useNavigate();
  const goToClassroom = (classId) => {
    navigate(`/classroom/${classId}`);
  };
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        if (user) {
          // console.log("HI start")
          let endpoint;
          if (user.userType === 'student') {
            endpoint = `/api/students/class/${user._id}`;
            // console.log("HI student")
          } else if (user.type === 'faculty') {
            endpoint = `/api/faculty/class/${user._id}`;
            // console.log("HI teacher")
          }

          if (endpoint) {
            const response = await axios.get(endpoint);
            console.log("HI res")
            setClasses(response.data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch classes', error);
      }
    };

    fetchClasses();
  }, [user]);

  // return (
  //   <div>
  //     <Navbar />
  //     <div className="flex flex-row flex-wrap">
  //       {classes.map((classItem) => (
  //         <div key={classItem.key} onClick={() => goToClassroom(classItem._id)}>
  //           //
  //           <ClassCard classInfo={{
  //             key: classItem._id,
  //             className: classItem.name,
  //             teachers: classItem.teachers,
  //             students: classItem.students,
  //           }} />
  //           //
  //           <ClassCard classInfo={{
  //             key: classItem._id,
  //             className: classItem.name,
  //             teachers: classItem.teachers,
  //             students: classItem.students,
  //           }} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap">
        {classes.map((classItem) => (
          <div key={classItem._id} onClick={() => goToClassroom(classItem._id)} className="class-card">
            {/* <ClassCard classInfo={classItem} /> */}
            <ClassCard classInfo={{
              key: classItem._id,
              className: classItem.name,
              teachers: classItem.teachers,
              students: classItem.students,
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}