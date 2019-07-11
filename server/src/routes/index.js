import express from 'express';
import noteController from '../controllers/note';
import postController from '../controllers/post';
import userController from '../controllers/user';

// import usersRoutes from './users';

const router = express.Router();

// users
router.post('/users/signup', userController.addUser);
router.post('/users/login', userController.loginUser);
router.delete('/users/:userId', userController.deleteUser);
router.get('users/:userId?', userController.getUser); // fonctionne pas

// notes
router.post('/notes', noteController.createNote);
router.delete('/notes/:noteId', noteController.deleteNote);

// post
router.post('/posts', postController.createPost);
router.delete('/posts/:postId', postController.deletePost);
router.get('/posts/:postId?', postController.getPost);

export default router;