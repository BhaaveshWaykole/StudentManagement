import Announcement from '../models/Announcement.js';
import Classroom from '../models/Classroom.js';
import Attendance from '../models/Attendance.js';
import Faculty from '../models/Faculty.js';
import Student from '../models/Student.js';

export const createClassroom = async (req, res) => {
    // check if class with the name, with same teacher with same batch, if we get a class then class already exist even one fails we will create a new class ofc.

    const getClass = await Classroom.findOne({ name: req.body.name, teachers: req.body.teachers, batch: req.body.batch });
    try {
        // const getFaculty = Faculty.findById(req.params.id)
        // create class -- get teacher id from param , maybe approach different later
        if (!(getClass)) {
            const newClassroom = new Classroom({
                name: req.body.name,
                teachers: req.body.teachers,
                batch: req.body.batch
            });
            const classroom = await newClassroom.save();

            // adding class to teacher table :-
            const updateTeacherPromises = newClassroom.teachers.map(async teacherId => {
                // Update attendanceRecord by pushing the student ID
                return Faculty.findByIdAndUpdate(
                    teacherId,
                    { $push: { classes: newClassroom.id } },
                    { new: true }
                );
            });

            // const updateFaculty = await Faculty.findByIdAndUpdate(
            //     req.body.id,
            //     { $push: { classes: newClassroom._id } },
            //     { new: true }
            // );
            // console.log("after")
            // Save User
            res.status(200).json(classroom)
            console.log(updateFaculty)
        } else {
            const Faculties = await Promise.all(getClass.teachers.map(async (teachersId) => {
                let teacher = await Faculty.findById(teachersId)
                return teacher.name
            }))
            res.status(503).json("Class already exist, with owner teachers : " + Faculties)
        }
        // console.log("done")
    } catch (err) {
        res.send(err)
    }
}

export const updateClassroom = async (req, res) => {
    const getClass = await Classroom.findById(req.params.id);
    try {
        const notCommonStudents = req.body.students.filter(studentId => !getClass.students.includes(studentId));
        const notCommonTeachers = req.body.teachers.filter(teacherId => !getClass.teachers.includes(teacherId));
        const updatedClass = await Classroom.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    students: { $each: notCommonStudents },
                    teachers: { $each: notCommonTeachers }
                }
            },
            { new: true }
        )

        await Student.updateMany(
            { _id: { $in: notCommonStudents } },
            { $push: { classes: updatedClass.id } }
        )

        await Faculty.updateMany(
            { _id: { $in: notCommonTeachers } },
            { $push: { classes: updatedClass.id } }
        )

        res.status(200).json(updatedClass)
    } catch (err) {
        res.status(503).json(err)
    }
}

export const getClassroom = async (req, res) => {
    try {
        // const getFaculty = Faculty.findById(req.params.id)
        // create class -- get teacher id from param , maybe approach different later
        const newClassroom = new Classroom({
            name: req.body.name,
            teachers: req.params.id
        });
        // adding class to teacher table :-
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

export const deleteClassroom = async (req, res) => {
    try {
        // const getFaculty = Faculty.findById(req.params.id)
        // create class -- get teacher id from param , maybe approach different later
        const newClassroom = new Classroom({
            name: req.body.name,
            teachers: req.params.id
        });
        // adding class to teacher table :-
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