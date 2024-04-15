import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/classcard/ClassCard.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.js';

// using map -> map the classes on hompage using the goToClassroom page when clicked redirect to main classroom page.
//fetch classrooms pass it in classInfo and display teacher and subject in components classcard
// export default function Home() {
//   const goToClassroom = (classId) => {
//     console.log(classId);
//   };
//   const classes = [
//     { key: 1, className: "Network" },
//     { key: 2, className: "DBMS" },
//     { key: 3, className: "IP" },
//     { key: 4, className: "DWM" },
//     { key: 5, className: "Flexi" },
//     { key: 6, className: "Data Struct" },
//     { key: 7, className: "SRE" },
//   ];
//   return (
//     <div>
//         <Navbar />
//       <div className="flex flex-row flex-wrap">
//         {classes.map((classItem) => (
//           <div key={classItem.key} onClick={() => goToClassroom(classItem.key)}>
//             {/* Class {classItem.key}: {classItem.className} */}
//             <ClassCard classInfo={classItem} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// useEffect(() => {
//   const fetchClasses = async () => {
//     try {
//       const response = await axios.get('/api/classroom/');
//       setClasses(response.data);  // Assuming the data is an array of classes
//       // console.log(response.data);
//     } catch (error) {
//       console.error('Failed to fetch classes', error);
//     }
//   };

//   fetchClasses();
// }, []);

export default function Home() {
  const navigate = useNavigate();
  // const [classes, setClasses] = useState([]);
  // Updated goToClassroom function to navigate
  const goToClassroom = (classId) => {
    navigate(`/classroom/${classId}`); // This will navigate to the classroom route with the classId
  };

  const { user } = useAuth(); // Get user information from context
  const [classes, setClasses] = useState([]);

  // const classes = [
  //   { key: 1, className: "Network" },
  //   { key: 2, className: "DBMS" },
  //   { key: 3, className: "IP" },
  //   { key: 4, className: "DWM" },
  //   { key: 5, className: "Flexi" },
  //   { key: 6, className: "Data Struct" },
  //   { key: 7, className: "SRE" },
  // ];
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        // Determine the API endpoint based on the user type
        let endpoint;
        if (user && user.type === 'student') {
          endpoint = `/api/students/class/${user.id}`;
        } else if (user && user.type === 'faculty') {
          endpoint = `/api/teachers/class/${user.id}`;
        }
        if (endpoint) {
          const response = await axios.get(endpoint);
          setClasses(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch classes', error);
      }
    };

    fetchClasses();
  }, [user]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap">
        {classes.map((classItem) => (
          <div key={classItem.key} onClick={() => goToClassroom(classItem._id)}>
            {/* <ClassCard classInfo={{
              key: classItem._id,
              className: classItem.name,
              teachers: classItem.teachers,
              students: classItem.students,
            }} /> */}
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