import { Router } from 'express';
import TrainingController from '../controllers/training.controller';

export default class trainingRoutes {
  private router = Router();
  private trainingController = new TrainingController();

  constructor() {
    this.createRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  private createRoutes() {
    this.router.post(
      '/create-training',
      this.trainingController.createTraining
    );
    this.router.get('/', this.trainingController.getTrainings);
  }
}
