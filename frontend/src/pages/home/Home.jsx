import React from 'react'
import ClassCard from '../../components/classcard/ClassCard.jsx';

// using map -> map the classes on hompage using the goToClassroom page when clicked redirect to main classroom page.
//fetch classrooms pass it in classInfo and display teacher and subject in components classcard
export default function Home() {
    const goToClassroom = (classId) => {
        console.log(classId);
    };
    const classes = [
        { key: 1, className: "Network" },
        { key: 2, className: "DBMS" },
        { key: 3, className: "IP" },
        { key: 4, className: "DWM" },
        { key: 5, className: "Flexi" },
        { key: 6, className: "Data Struct" },
        { key: 7, className: "SRE" },
    ];
    return (
        <div className ="flex flex-row flex-wrap">
        {classes.map((classItem) => (
          <div key={classItem.key} onClick={() => goToClassroom(classItem.key)}>
            {/* Class {classItem.key}: {classItem.className} */}
            <ClassCard classInfo={classItem}/>
          </div>
        ))}
      </div>
    )
}
