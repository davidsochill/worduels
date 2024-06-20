import express from 'express';
import userController from './controllers/user';
import duelController from './controllers/duel';

const router = express.Router();

router.use('/user', userController);
router.use('/duel', duelController);

export default router;