import express from 'express';
import userController from '../controllers/user';

const router = express.router();

router.post('/users', userController.addUser);

export default router;

