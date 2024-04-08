import express from 'express';

const router = express.Router();
import {
    getClassroom,
    createClassroom,
    updateClassroom,
    deleteClassroom
} from '../controllers/classroomController.js';

// to create class taking id of teacher to add teacher's name ... change later if needed
router.post('/regClass', createClassroom)
router.put('/:id', updateClassroom)
// router.put('/:id', getClassroom)
// router.put('/:id', deleteClassroom)

// router.get('/:id', getStudent)

export default router