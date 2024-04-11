import Student from '../models/Student.js';
import Classroom from '../models/Classroom.js';
import Attendance from '../models/Attendance.js';

import bcrypt from 'bcrypt'

export const updateStudent = async (req, res) => {
    // console.log("in")
    if (req.body.studId === req.params.id) {
        // console.log("In")
        try {
            // console.log("IN")
            console.log(req.body)
            const updateStud = await Student.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            console.log(updateStud)
            // console.log("updated")
            res.status(200).json(updateStud);
            // console.log("done")
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        console.log("error")
    }
}

export const postStudent = async (req, res) => {
    // console.log("in")
    // const newStudent = await new Student({
    //     username: "bhaavesh",
    //     email: "bhaavesh@gmail.com",
    //     password: "12345"
    try {
        // Hash password - secure with size 10 hash
        // console.log("In")
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // create a new user
        // console.log("before")
        const newStudent = new Student({
            prn: req.body.prn,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        // console.log("after")
        // Save User
        const user = await newStudent.save();
        res.status(200).json(user)
        // console.log("done")
    } catch (err) {
        res.send(err)
    }
}

export const getStudent = async (req, res) => {
    // console.log("in")
    const studID = req.params.id
    try {
        // console.log("In")
        const getStud = await Student.findById(studID);
        res.status(200).json(getStud);
        // console.log("done")
    } catch (err) {
        return res.json(err)
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        const classroomIds = student.classes;
        await Classroom.updateMany(
            { _id: { $in: classroomIds } },
            { $pull: { students: req.params.id } }
        );
        await Attendance.updateMany(
            { "studentPresent.studentId": req.params.id },
            { $pull: { studentPresent: { studentId: req.params.id } } }
        );
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getTotalAttendance = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        let totalPresent = 0;
        student.attendance.forEach(record => {
            totalPresent += record.total_present;
        });

        res.status(200).json({ total_present: totalPresent });
    } catch (error) {
        res.status(500).json('An error occurred while calculating total present');
    }
}