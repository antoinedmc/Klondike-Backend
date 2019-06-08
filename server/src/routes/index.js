import express from 'express';
import notes from '../controllers';

const router = express.Router();

router.post('/notes', notes.create);

router.get('/notes', notes.findAll);

router.get('/notes/:noteId', notes.findOne);

router.put('/notes/:noteId', notes.update);

router.delete('/notes/:noteId', notes.delete);

module.exports = router;

