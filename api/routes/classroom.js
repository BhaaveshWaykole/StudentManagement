import express from 'express';

const router = express.Router();
import {
    // putAttendance,
    postClassroom,
    // updateClassroom,
    // deleteClassroom
} from '../controllers/classroomController.js';

// to create class taking id of teacher to add teacher's name ... change later if needed
router.post('/:id', postClassroom)
// router.put('/:id', updateClassroom)
// router.put('/:id', getClassroom)
// router.put('/:id', deleteClassroom)

// router.get('/:id', getStudent)

export default router