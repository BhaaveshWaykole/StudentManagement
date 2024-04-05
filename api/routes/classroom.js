import express from 'express';

const router = express.Router();
import {
    postAnnouncement
} from '../controllers/classroomController.js';

// router.put('/:id', updateClass)

// router.get('/:id', getStudent)

router.post('/postannouncement', postAnnouncement)
export default router