import express from 'express';

const router = express.Router();
import {
    postStudent,
    getStudent,
    updateStudent
} from '../controllers/studentsController.js';
//Update :-
// router.put("/:id", updateStudent);
router.put('/:id', updateStudent)

// Delete :-
// router.delete('/:id', deleteStudent)

// get a Student :-
// router.get('/:id', getStudent)
router.get('/:id', getStudent)

router.post('/register', postStudent)
export default router