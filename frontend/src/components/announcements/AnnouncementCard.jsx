import React from 'react'

export default function AnnouncementCard({ announceInfo }) {
  return (
    <div>
      <div className="flex flex-row">
        <div className='profile flex flex-row mr-2'>
          {/* redirect to profile page */}
          <a href="">
            <img src="profilePic.jpeg" alt="ProfilePic" className='rounded-full h-12 w-12' />
          </a>
        </div>
        <div>
          <h2>
            {announceInfo.teachers}
          </h2>
          <h4 className='text-xs'>
            posted now
            {/* timestamp of when posted */}
          </h4>
        </div>
      </div>
      <div className='announceContent mt-2 h-fit text-wrap p-3'>
        <p>
          {announceInfo.content}
        </p>
      </div>
    </div>
  )
}
