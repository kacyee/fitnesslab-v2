import { Router } from 'express';
import trainingRoutes from './training.routes';
import UserRoutes from './user.routes';

const router = Router();
const userRouter = new UserRoutes();
const trainingRouter = new trainingRoutes();

router.use('/users', userRouter.getRouter());
router.use('/trainings', trainingRouter.getRouter());

export default router;
