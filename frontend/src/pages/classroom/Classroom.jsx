import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import AnnouncementCard from '../../components/announcements/AnnouncementCard.jsx'
import ClassNavbar from '../../components/navbar/ClassNavbar.jsx'
import { useParams } from 'react-router-dom';

export default function Clasroom() {
  const [classInfo, setClassInfo] = useState({});
  const [announcements, setAnnouncements] = useState([]);
  const [teacher, setTeacherName] = useState([]);
  const { classId } = useParams();
  const announcementRef = useRef();
  const announcementTitleRef = useRef();
  
  const handlePost = async (req, res) => {
    const content = announcementRef.current.value
    const title = announcementTitleRef.current.value
    await axios.post("/api/announcement/regAnnouncement", {content, cId : classId, teacher : teacher._id, title})
  }

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        // console.log("HI", classId)
        // console.log("HI", classId)
        const response = await axios.get(`/api/classroom/${classId}`);
        setClassInfo(response.data);
        // console.log(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch class details', error);
      }
    };
    fetchClassDetails();
  }, [classId]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`/api/announcement/${classId}`);
        console.log(response.data)
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Failed to fetch announcements', error);
      }
    };

    fetchAnnouncements();
  }, [classId]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`/api/teachers/teacherName/${classId}`);
        setTeacherName(response.data[0]);
      } catch (error) {
        console.error('Failed to fetch teacher', error);
      }
    };

    fetchTeacher();
  }, [classInfo.teachers]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`/api/teachers/teacherName/${classId}`);
        setTeacherName(response.data[0]);
      } catch (error) {
        console.error('Failed to fetch teacher', error);
      }
    };

    fetchTeacher();
  }, [classInfo.teachers]);

  const goToAnnouncement = (announcementId) => {
    console.log(announcementId);
    // Implement navigation or other logic as needed
  };

  return (
    <div className="bg-gray-500">
    <div className="Main-corousel bg-gray-500 rounded-rnd-6p">
      <div className="navbar">
        <ClassNavbar />
      </div>
      <div className="Main-Name h-60 p-3" style={{backgroundColor: '#DAD7D5'}}>
        <h1 className="text-center font-poppins-500 text-3xl">
          {classInfo.name}
        </h1>
        <h3 className="p-3 rounded-rnd-6p h-4/5 bg-gray-500 flex flex-col flex-col-reverse font-poppins-200">
          <p>{classInfo.yearBatch}</p>
          -{teacher.name}
        </h3>
      </div>
      <div className="h-fit font-poppins-500 bg-yellow-500 my-3 mx-5 p-3 rounded-rnd-6p" style={{backgroundColor: '#DAD7D5'}}>
        <h4>Announcements</h4>
        <input type="text" placeholder='Title' className="font-poppins-200 rounded-rnd-6 bg-transparent border-b border-black w-full mt-12 focus:outline-none" ref={announcementTitleRef} />

        <input type="text" placeholder='Post Announcement here' className="font-poppins-200 rounded-rnd-6 bg-transparent border-b border-black w-full mt-12 focus:outline-none" ref={announcementRef} />

        <button className='bg-green-500 rounded-md mt-2 p-1 text-white' style={{backgroundColor:'#4B0082'}} onClick={handlePost}>Post</button>

        {/* <input type="text" placeholder='Title' className="font-poppins-200 rounded-rnd-6 bg-transparent border-b border-black w-full mt-12 focus:outline-none" ref={announcementTitleRef} />

        <input type="text" placeholder='Post Announcement here' className="font-poppins-200 rounded-rnd-6 bg-transparent border-b border-black w-full mt-12 focus:outline-none" ref={announcementRef} />
        
        <button className='bg-green-500 rounded-md mt-1 p-1' onClick={handlePost}>Post</button> */}
      </div>

      <div className="font-poppins-500" >
        <a href="">
          <div className="flex flex-row flex-wrap">
            {announcements.map((announcementItem) => (
              <div className="border-2 border-black w-full h-fit my-3 mx-5 p-3 rounded-rnd-6p" style={{backgroundColor: '#DAD7D5'}} key={announcementItem.key} onClick={() => goToAnnouncement(announcementItem.key)}>
                <AnnouncementCard announceInfo={announcementItem} />
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
    </div>
  )
}
