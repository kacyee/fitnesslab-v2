import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import TrainingService from '../services/training.service';
import { CreateTrainingType } from '../types/training.type';

export default class TrainingController {
  constructor() {}

  public createTraining(req: Request, res: Response): any {
    let trainingBody: CreateTrainingType = req.body;

    TrainingService.createTraining(trainingBody)
      .then((resp: any) => {
        return res.status(resp.http_code).json(resp.results);
      })
      .catch((err: any) => {
        return res.status(err.http_code).json(err.reason);
      });
  }
  public getTrainings(req: Request, res: Response): any {
    TrainingService.getTrainings()
      .then((resp: any) => {
        return res.status(resp.http_code).json(resp.results);
      })
      .catch((err: any) => {
        return res.status(err.http_code).json(err.reason);
      });
  }
}
