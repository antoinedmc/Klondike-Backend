import express from 'express';
import noteController from '../controllers/note';
import postController from '../controllers/post';

const router = express.Router();

// notes
router.post('/notes', noteController.createNote);
router.delete('/notes/:noteId', noteController.deleteNote);

// post
router.post('/posts', postController.createPost);
router.delete('/posts/:postId', postController.deletePost);

export default router;