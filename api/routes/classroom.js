import express from 'express';

const router = express.Router();
import {
    putAttendance,
    postClassroom
} from '../controllers/classroomController.js';

// router.put('/:id', updateClass)

// router.get('/:id', getStudent)

router.put('/:id', putAttendance)
router.post('/:id', postClassroom)
export default router