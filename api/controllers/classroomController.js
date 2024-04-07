import Announcement from '../models/Announcement.js';
import Classroom from '../models/Classroom.js';
import Attendance from '../models/Attendance.js';
import Faculty from '../models/Faculty.js';
import Student from '../models/Student.js';

// when attendance does not exist, create:
// const generateAttendance = async (req, res) => {
//     const attendanceClass = new Attendance({
//         cId: req.params.id,
//         date: req.body.date,
//         studentPresent: req.body.studentPresent
//     })
//     await attendanceClass.save()
//     const updateClassroom = await Classroom.findByIdAndUpdate(
//         req.params.id,
//         { $push: { attendance: attendanceClass._id } },
//         { new: true }
//     );
//     return updateClassroom
// }

export const postClassroom = async (req, res) => {
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

// export const putAttendance = async (req, res) => {
//     // maybe use query to allow faculty only to change attendance and check if that faculty is in the classroom
//     // const getFaculty = Faculty.findById(req.params.id)
//     try {
//         const getClassroom = await Classroom.findById(req.params.id);
//         const dateToFind = req.body.date;
//         // console.log(dateToFind)
//         const attendanceRecord = await Attendance.findOne({ date: dateToFind })
//         if (attendanceRecord && getClassroom.attendance.length > 0) {
//             try {
//                 const getStudids = attendanceRecord.studentPresent
//                 // const students = await Student.find({ _id: { $in: getStudids } })
//                 // filter all those student ids not present in attendance already so that we will get attendance to mark of student which is requested by teacher to mark, andit just ensures if already marked it will skip those 
//                 const notCommonStudents = req.body.studentPresent.filter(studentId => !getStudids.includes(studentId));
//                 // filter - returns array of student who are not present.
//                 let updateAttendees;
//                 if (notCommonStudents) {
//                     const updateAttendeesPromises = notCommonStudents.map(async studentId => {
//                         // Update attendanceRecord by pushing the student ID
//                         return Attendance.findByIdAndUpdate(
//                             attendanceRecord._id,
//                             { $push: { studentPresent: studentId } },
//                             { new: true }
//                         );
//                     });
//                     const updatedAttendees = await Promise.all(updateAttendeesPromises);
//                     res.status(200).json(updatedAttendees);
//                 }
//                 // res.status(200).json(attendanceRecord.studentPresent);
//             }
//             catch (err) {
//                 res.sendStatus(200).json(err);
//             }
//         } else {
//             // code when attendance does not exist
//             const createAtt = generateAttendance()
//             // console.log(updateClassroom)
//             res.status(200).json(createAtt);
//         }
//     } catch (err) {
//         res.send(err)
//     }
// }