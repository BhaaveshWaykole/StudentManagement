import React from 'react'

export default function Profile() {
    return (
        <div className='flex justify-center align-center h-screen items-center'>
            <div className='flex flex-column'>
                <div>
                    <h1>Profile</h1>
                </div>
                <div>
                    <a href="/profile"> {/* Redirect to profile page */}
                        <img src="profilePic.jpeg" alt="ProfilePic" className='rounded-full h-12 w-12 border-4 border-solid' />
                    </a>
                </div>
                <div>
                    <h2>Username: </h2>
                    <h2>Email: </h2>
                </div>
            </div>
        </div>
    )
}
