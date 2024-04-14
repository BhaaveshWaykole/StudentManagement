import React from 'react'

function AttendanceCard() {
    return (
        <div>
            <div className="flex flex-row bg-gray-500 my-10 mx-5 rounded-rnd-6p p-6">
                <div>
                    <h4>
                        Date
                        {/* timestamp of when posted */}
                    </h4>
                </div>
                <div className='ml-5 profile flex flex-row mr-2'>
                    {/* redirect to profile page */}
                    <h3> Number of students present </h3>
                </div>
            </div>
            <div className='announceContent mt-2 h-fit text-wrap p-3'>
                <p>
                    {/* {announceInfo.content} */}
                </p>
            </div>
        </div>
    )
}

export default AttendanceCard