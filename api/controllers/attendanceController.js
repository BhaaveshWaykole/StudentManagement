import Classroom from '../models/Classroom.js';
import Attendance from '../models/Attendance.js';
import Student from '../models/Student.js';
import attendance from '../models/Attendance.js';

// C 
export const createAttendance = async (req, res) => {
    try {
        const dateToFind = req.body.date;
        const classToFind = req.body.cId;
        //         // console.log(dateToFind)
        const attendanceRecordDate = await Attendance.findOne({ date: dateToFind, cId: classToFind })
        if (!(attendanceRecordDate)) {
            const attendanceClass = new Attendance({
                cId: req.body.cId, // take class id for which class attendance is getting created.
                date: req.body.date,
                studentPresent: req.body.studentPresent
            })
            await attendanceClass.save()
            console.log(attendanceClass)
            const updateClassroom = await Classroom.findByIdAndUpdate(
                attendanceClass.cId,
                { $push: { attendance: attendanceClass._id } },
                { new: true }
            );
            const updateStudentPromises = attendanceClass.studentPresent.map(async studentId => {
                // Update attendanceRecord by pushing the student ID
                return Student.findByIdAndUpdate(
                    studentId,
                    { $push: { attendance: attendanceClass.id } },
                    { new: true }
                );
            });

            res.status(200).json(attendanceClass)
        } else {
            res.status(503).json("attendance already exist.")
        }
    } catch (err) {
        res.status(err)
    }
}

// U
// updating student in attendance
export const updateAttendance = async (req, res) => {
    try {
        const getAttendance = await Attendance.findById(req.params.id);
        // console.log(getAttendance.id)
        // const dateToFind = req.body.date;
        const classId = await Classroom.findOne({ _id: req.body.cId })
        // console.log(dateToFind)
        // const attendanceRecord = await Attendance.findOne({ date : dateToFind })
        console.log(getAttendance.cId)
        console.log(classId.id)
        if (classId.id === getAttendance.cId) {
            try {
                const getStudids = getAttendance.studentPresent
                // filter all those student ids not present in attendance already so that we will get attendance to mark of student which is requested by teacher to mark, andit just ensures if already marked it will skip those 
                const notCommonStudents = req.body.studentPresent.filter(studentId => !getStudids.includes(studentId));
                // filter - returns array of student who are not present.
                let updateAttendees;
                if (notCommonStudents) {
                    const updateAttendeesPromises = notCommonStudents.map(async studentId => {
                        // Update getAttendance by pushing the student ID
                        return Attendance.findByIdAndUpdate(
                            getAttendance.id,
                            { $push: { studentPresent: studentId } },
                            { new: true }
                        );
                    });
                    const updatedAttendees = await Promise.all(updateAttendeesPromises);
                    res.status(200).json(updatedAttendees);
                }
            }
            catch (err) {
                res.status(200).json(err);
            }
        } else {
            res.status(503).json("attendance does not exist")
        }
    } catch (err) {
        res.status(err)
    }
}

// G :
export const getAttendance = async (req, res) => {
    const aId = req.params.id;
    try {
        const getAttendance = await Attendance.findById(aId)
        res.status(200).json(getAttendance);
    } catch (err) {
        res.status(err)
    }
}
// D :
export const deleteAttendance = async (req, res) => {
    try {
        if (req.params.id === req.body.attId) {
            try {
                const studIds = await Student.find({ attendance: req.params.id })
                // promise all -> used to handle multiple async requests in map() concurrently
                const studIdlist = await Promise.all(studIds.map(async (ids) => {
                    // pull used to delete or pull of a specific record.
                    await Student.updateOne(
                        { _id: ids.id },
                        { $pull: { attendance: req.params.id } }
                    )
                }))
                await Attendance.findByIdAndDelete(req.params.id) // deletes the main atendance .. Hence the output erase the attendance also attendance of student of that deleted record -> consistency
                res.status(200).json("Attendance has been deleted");
            } catch (err) {
                return res.status(500).json(err);
            }
        } else {
            return res.status(403).json("Unable to delete");
        }
    } catch (err) {
        res.status(err)
    }
}