import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ClassCard({ classInfo }) {
  const [teacherName, setTeacherName] = useState("");

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`/api/teachers/${classInfo.teachers}`);
        setTeacherName(response.data.name);
      } catch (error) {
        console.error('Failed to fetch teacher', error);
      }
    };

    fetchTeacher();
  }, [classInfo.teachers]);
  return (
    <div className='h-54 w-64 bg-gray-400 p-3 m-3 rounded-rnd-6p'>
      <div className="text-left">
        <h1 className='font-poppins-500 bg-red-500 p-0.5 text-xl rounded-rnd-2p' style={{backgroundColor:'#DAD7D5'}}> {classInfo.className} </h1>
        <h2 className='font-poppins-200 p-1'>{teacherName}</h2>
        <div className='rounded-rnd-2p p-2 flex justify-end' style={{backgroundColor:'#DAD7D5'}}>
          <img src="" alt="ClassCardPic" className='rounded-full border border-black mt-1 h-12 w-12' />
        </div>
        <div>
          {/* displays latest 3 assignments only  */}
          {/* <li className='list-none'>
            <ul>Assignment 1</ul>
            <ul>Assignment 2</ul>
            <ul>Assignment 3</ul>
          </li> */}
        </div>
      </div>
    </div>
  )
}
