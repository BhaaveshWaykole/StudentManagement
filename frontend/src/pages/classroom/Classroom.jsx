import React from 'react'
import AnnouncementCard from '../../components/announcements/AnnouncementCard.jsx'

export default function Clasroom() {
  return (
    <div className="Main-corousel bg-red-500 h-screen mx-10 mt-10 rounded-rnd-6p">

      <div className="Main-Name bg-amber-600 h-60 p-3 rounded-rnd-6p">
        <h1 className="text-center font-poppins-500 text-3xl">
          Classroom Name
        </h1>
        <h3 className="p-3 rounded-rnd-6p h-4/5 bg-green-500 flex flex-col flex-col-reverse font-poppins-200">
          <p>Year (batch)</p>
          -Faculty name
        </h3>
      </div>

      <div className="h-36 font-poppins-500 bg-yellow-500 my-3 mx-5 p-3 rounded-rnd-6p">
        <h4>Announcements</h4>
        <input type="text" placeholder='Post Announcement here' className="font-poppins-200 rounded-rnd-6 bg-transparent border-b border-black w-full mt-12 focus:outline-none" />
      </div>

      <div className="font-poppins-500 bg-white my-3 mx-5 p-3 rounded-rnd-6p">
        <a href="">
          <AnnouncementCard />
        </a>
      </div>

    </div>
  )
}
