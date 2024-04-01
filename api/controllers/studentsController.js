import Student from '../models/Student.js';
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
    //     password: "bhaavesh10"
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