import express from 'express';
import multer from 'multer';
import noteController from '../controllers/note';
import postController from '../controllers/post';
import userController from '../controllers/user';
import checkAuth from '../middlewares/check-auth';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString + file.originalname);
    }
});

const upload = multer({ storage: storage });

// users
router.post('/users/signup', userController.addUser);
router.post('/users/login', userController.loginUser);
router.delete('/users/:userId', checkAuth, userController.deleteUser);
router.get('users/:userId?', userController.getUser); // fonctionne pas

// notes
router.post('/notes', noteController.createNote);
router.delete('/notes/:noteId', noteController.deleteNote);

// post
router.post('/posts', upload.single('postImage'), postController.createPost);
router.delete('/posts/:postId', checkAuth, postController.deletePost);
router.get('/posts/:postId?', postController.getPost);

export default router;