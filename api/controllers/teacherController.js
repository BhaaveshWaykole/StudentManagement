import Faculty from '../models/Faculty.js';
import bcrypt from 'bcrypt'

export const updateFaculty = async (req, res) => {
    // console.log("in")
    if (req.body.fId === req.params.id) {
        // console.log("In")
        try {
            // console.log("IN")
            console.log(req.body)
            const updateFaculty = await Faculty.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            console.log(updateFaculty)
            // console.log("updated")
            res.status(200).json(updateFaculty);
            // console.log("done")
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        console.log("error")
    }
}

export const postFaculty = async (req, res) => {
    try {
        // Hash password - secure with size 10 hash
        // console.log("In")
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // create a new user
        // console.log("before")
        const newFaculty = new Faculty({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        // console.log("after")
        // Save User
        const user = await newFaculty.save();
        res.status(200).json(user)
        // console.log("done")
    } catch (err) {
        res.send(err)
    }
}

export const getFaculty = async (req, res) => {
    // console.log("in")
    const fID = req.params.id
    try {
        // console.log("In")
        const getfaculty = await Faculty.findById(fID);
        res.status(200).json(getfaculty);
        // console.log("done")
    } catch (err) {
        return res.json(err)
    }
}