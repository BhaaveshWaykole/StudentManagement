import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
    classroomID: {
        type: String,
        required: true
    },
    students: {
        type: Array,
        default: []
    },
    //owners 
    teachers: {
        type: Array,
        default: []
    },
    //announcements : 
    feed: {
        type: Array,
        default: []
    },
    attendance: [
        {
            date: {
                type: Date,
                required: true
            },
            studentPresent: {
                type: Array,
                required: true
            }
        }
    ]
},
);

const classroom = mongoose.model("Classroom", classroomSchema)
export default student;