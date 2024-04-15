import express from 'express';

const router = express.Router();
import {
    postFaculty,
    getFaculty,
    updateFaculty,
    deleteTeacher,
    getFacultyClasses
} from '../controllers/teacherController.js';

//Update :-
// router.put("/:id", updateStudent);
router.put('/:id', updateFaculty)

// Delete :-
router.delete('/:id', deleteTeacher)

// get a Teacher :-
// router.get('/:id', getTeacher)
router.get('/:id', getFaculty)
router.get('/class/:id', getFacultyClasses)

router.post('/register', postFaculty)
export default router