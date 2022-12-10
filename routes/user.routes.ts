import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { authJwt } from '../middleware';

export default class UserRoutes {
  private router = Router();
  private userController = new UserController();

  constructor() {
    this.createRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  private createRoutes() {
    this.router.post('/create-user', this.userController.createUser);
    this.router.get('/', [authJwt.verifyToken], this.userController.getUsers);
    this.router.post('/add-training', this.userController.setTrainingToUser);
    this.router.post('/sign-in', this.userController.signInUser);
  }
}
