import React, { useState } from 'react';

function CreateClassroom() {
    const [classroom, setClassroom] = useState({
        name: '',
        batch: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setClassroom(prevClassroom => ({
            ...prevClassroom,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting Classroom Data:', classroom);
        setClassroom({
            name: '',
            batch: ''
        });
    };

    return (
        <div>
            <h1>Create Classroom</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Classroom Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={classroom.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="batch">Batch:</label>
                    <input
                        type="text"
                        id="batch"
                        name="batch"
                        value={classroom.batch}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Classroom</button>
            </form>
        </div>
    );
}

export default CreateClassroom;
