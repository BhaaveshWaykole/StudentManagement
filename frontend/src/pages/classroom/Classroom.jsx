import React, { useEffect, useState, useParams } from 'react'
import axios from 'axios'
import AnnouncementCard from '../../components/announcements/AnnouncementCard.jsx'
import ClassNavbar from '../../components/navbar/ClassNavbar.jsx'

export default function Clasroom() {
  const [classInfo, setClassInfo] = useState({});
  const [announcements, setAnnouncements] = useState([]);
  const { classId } = useParams();

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await axios.get(`/api/classroom/${classId}`);
        setClassInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch class details', error);
      }
    };
    fetchClassDetails();
  }, [classId]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`/api/announcements/${classId}`);
        setAnnouncements(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch announcements', error);
      }
    };

    fetchAnnouncements();
  }, [classId]);

  const goToAnnouncement = (announcementId) => {
    console.log(announcementId);
    // Implement navigation or other logic as needed
  };
  // const goToAnnouncement = (announcementId) => {
  //   console.log(announcementId);
  // };

  // let announcements = [
  //   {
  //     id: 1,
  //     title: "Welcome to the Class!",
  //     teachers: "Vipin T",
  //     content: "Dear students, welcome to our class. I'm excited to start this journey with you all. Please make sure to review the syllabus and let me know if you have any questions.",
  //     date: "April 5, 2024"
  //   },
  //   {
  //     id: 2,
  //     title: "Assignment Submission Reminder",
  //     teachers: "Deepak D",
  //     content: "Just a reminder that the deadline for the first assignment is approaching. Make sure to submit it before the end of the week. Good luck!",
  //     date: "April 10, 2024"
  //   },
  //   {
  //     id: 3,
  //     title: "Office Hours Update",
  //     teachers: "Parija B",
  //     content: "I've updated my office hours for this semester. Please check the schedule on the course website and feel free to drop by if you have any questions or concerns.",
  //     date: "April 7, 2024"
  //   }
  // ];

  return (
    <div className="Main-corousel bg-red-500 mx-10 mt-10 rounded-rnd-6p">
      <div className="navbar">
        <ClassNavbar />
      </div>
      <div className="Main-Name bg-amber-600 h-60 p-3 rounded-rnd-6p">
        <h1 className="text-center font-poppins-500 text-3xl">
          {classInfo.className}
        </h1>
        <h3 className="p-3 rounded-rnd-6p h-4/5 bg-green-500 flex flex-col flex-col-reverse font-poppins-200">
          <p>{classInfo.yearBatch}</p>
          -{classInfo.facultyName}
        </h3>
      </div>

      <div className="h-36 font-poppins-500 bg-yellow-500 my-3 mx-5 p-3 rounded-rnd-6p">
        <h4>Announcements</h4>
        <input type="text" placeholder='Post Announcement here' className="font-poppins-200 rounded-rnd-6 bg-transparent border-b border-black w-full mt-12 focus:outline-none" />
      </div>

      <div className="font-poppins-500">
        <a href="">
          <div className="flex flex-row flex-wrap">
            {announcements.map((announcementItem) => (
              <div className="border-2 border-black w-full h-fit my-3 mx-5 p-3 rounded-rnd-6p bg-white" key={announcementItem.key} onClick={() => goToAnnouncement(announcementItem.key)}>
                <AnnouncementCard announceInfo={announcementItem} />
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
  )
}
