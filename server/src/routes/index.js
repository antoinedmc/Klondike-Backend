import express from 'express';
// import { note } from '../controllers';
import noteController from '../controllers/note';

const router = express.Router();

console.log('NC', noteController);

router.post('/notes', noteController.create);
router.delete('/notes/:noteId', noteController.deleteC);

export default router;