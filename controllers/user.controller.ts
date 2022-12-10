import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { CreateUserTrainingType, CreateUserType } from '../types/user.type';
import UserService from '../services/user.service';
import UserHasTrainingsService from '../services/user_has_trainings.service';

export default class UserController {
  constructor() {}

  public signUp() {}

  public createUser(req: Request, res: Response): any {
    let userBody: CreateUserType = req.body;

    UserService.creatUser(userBody)
      .then((resp: any) => {
        return res.status(resp.http_code).json(resp.results);
      })
      .catch((err: any) => {
        return res.status(err.http_code).json(err.reason);
      });
  }
  public getUsers(req: Request, res: Response): any {
    UserService.getUsers()
      .then((resp: any) => {
        return res.status(resp.http_code).json(resp.results);
      })
      .catch((err: any) => {
        return res.status(err.http_code).json(err.reason);
      });
  }
  public setTrainingToUser(req: Request, res: Response): any {
    let userTrainingBody: CreateUserTrainingType = req.body;

    UserHasTrainingsService.setTrainingToUser(userTrainingBody)
      .then((resp: any) => {
        return res.status(resp.http_code).json(resp.results);
      })
      .catch((err: any) => {
        return res.status(err.http_code).json(err.reason);
      });
  }
}
