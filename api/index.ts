import express from 'express';
import userController from './controllers/user';

const router = express.Router();

router.use('/user', userController);

export default router;