import React from 'react'

export default function ClassCard({ classInfo }) {
  return (
    <div className='h-54 w-64 bg-orange-400 p-3 m-5 rounded-rnd-6p'>
      <div className="text-left">
        <h1 className='font-poppins-500 bg-red-500 text-xl'> {classInfo.className} </h1>
        <h2 className='font-poppins-200'>Teacher name</h2>
        <div className='bg-white rounded-rnd-2p p-2 flex justify-end'>
          <img src="" alt="ClassCardPic" className='rounded-full border border-black mt-1 h-12 w-12' />
        </div>
        <div>
          {/* displays latest 3 assignments only  */}
          <li className='list-none'>
            <ul>Assignment 1</ul>
            <ul>Assignment 2</ul>
            <ul>Assignment 3</ul>
          </li>
        </div>
      </div>
    </div>
  )
}
