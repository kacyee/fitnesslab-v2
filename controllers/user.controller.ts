import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';
import { CreateUserTrainingType, CreateUserType } from '../types/user.type';
import UserService from '../services/user.service';
import UserHasTrainingsService from '../services/user_has_trainings.service';
import { User } from '../models';

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

  public async signInUser(req: Request, res: Response): Promise<any> {
    const user = await UserService.getUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({ message: 'User does not exists.' });
    }

    const isPasswordValid = bcrypt.compare(req.body.password!, user.password);
    if (!isPasswordValid)
      return res.status(403).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: user!.id }, process.env.secret!);
    return res.status(201).json({ token: token });
  }
}
