import Announcement from '../models/Announcement.js';
import Classroom from '../models/Classroom.js';
import Attendance from '../models/Attendance.js';
import Faculty from '../models/Faculty.js';

export const postClassroom = async (req, res) => {
    // const getFaculty = Faculty.findById(req.params.id)
    // cause any teacher can create a classroom
    // if (getFaculty) {
    try {
        // const getFaculty = Faculty.findById(req.params.id)
        const newClassroom = new Classroom({
            name: req.body.name,
            teachers: req.params.id
        });
        const updateFaculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            { $push: { classes: newClassroom._id } },
            { new: true }
        );
        // console.log("after")
        // Save User
        const classroom = await newClassroom.save();
        res.status(200).json(classroom)
        console.log(updateFaculty)
        // console.log("done")
    } catch (err) {
        res.send(err)
    }
}

export const putAttendance = async (req, res) => {
    // maybe use query to allow faculty only to change attendance and check if that faculty is in the classroom
    // const getFaculty = Faculty.findById(req.params.id)
    try {
        // const getClassroom = await Classroom.findById(req.params.id)
        const attendance = new Attendance({
            cId : req.params.id,
            date: req.body.date,
            studentPresent: req.body.studentPresent
        })
        await attendance.save()
        const updateClassroom = await Classroom.findByIdAndUpdate(
            req.params.id,
            { $push: { attendance: attendance._id } },
            { new: true }
        );
        console.log(updateClassroom)
        res.status(200).json(updateClassroom);
        // console.log("done")
    } catch (err) {
        res.send(err)
    }
}